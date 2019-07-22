// @flow strict

import React from "react";

import { useServices } from "hooks/useServices";
import { useAsync } from "hooks/useAsync";
import { useRouter } from "hooks/useRouter";
import { routes } from "data/routes";

export const useSearchQueryStatus = (query: string) => {
  const {
    getSearchInfo: getSearchInfoService,
    deleteSearch: deleteSearchService,
    saveSearch: saveSearchService
  } = useServices();

  // Pending status state
  const [pending, setPending] = React.useState(true);

  const [getSearchInfoState, injectGetSearchInfoPromise] = useAsync();

  // Save status service state
  const [saveSearchState, saveSearch] = useAsync();

  // Delete status service state
  const [deleteSearchState, deleteSearch] = useAsync();

  // Get status service state
  const getSearchInfoByQuery = React.useCallback(
    () => injectGetSearchInfoPromise(getSearchInfoService(query)),
    [getSearchInfoService, injectGetSearchInfoPromise, query]
  );

  // Initial status retrival
  React.useEffect(() => {
    getSearchInfoByQuery();
  }, [getSearchInfoByQuery]);

  // Turn on pending status on search info retrival
  React.useEffect(() => {
    if (!getSearchInfoState || getSearchInfoState.pending) {
      setPending(true);
    }
  }, [getSearchInfoState]);

  // Status retrival on save / delete resolve
  React.useEffect(() => {
    if (saveSearchState && saveSearchState.resolved) {
      getSearchInfoByQuery();
    }
  }, [saveSearchState, deleteSearchState, getSearchInfoByQuery]);

  // Turn on pending status on save / delete
  // services requested
  React.useEffect(() => {
    if (
      (deleteSearchState && deleteSearchState.pending) ||
      (saveSearchState && saveSearchState.pending)
    ) {
      setPending(true);
    }
  }, [deleteSearchState, saveSearchState]);

  // Redirect to search queries list once delete search succeeded
  const { history } = useRouter();

  React.useEffect(() => {
    if (deleteSearchState && deleteSearchState.resolved) {
      history.push(routes.searchQueriesRoute());
    }
  }, [history, deleteSearchState]);

  // Turn off pending status on search info recieved
  React.useEffect(() => {
    if (getSearchInfoState && getSearchInfoState.resolved) {
      setPending(false);
    }
  }, [getSearchInfoState]);

  // State normalization

  const saved = React.useMemo(() => {
    if (getSearchInfoState && getSearchInfoState.value) {
      return getSearchInfoState.value.saved;
    }
    return null;
  }, [getSearchInfoState]);

  const toggleStatus = React.useCallback(() => {
    if (saved === true) {
      deleteSearch(deleteSearchService(query));
    } else {
      saveSearch(saveSearchService(query));
    }
  }, [
    saved,
    deleteSearch,
    deleteSearchService,
    query,
    saveSearch,
    saveSearchService
  ]);

  return {
    saved,
    pending,
    toggleStatus
  };
};