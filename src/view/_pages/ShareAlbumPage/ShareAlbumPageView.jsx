// @flow strict

import * as React from "react";

import { Page } from "view/Page";
import { useShareAlbumPageState } from "hooks/useShareAlbumPageState";
import { useIntlDictionary } from "hooks/useIntl";

import { AlbumEditor } from "./nested/AlbumEditor";
import { DropZone } from "./nested/DropZone";
import { ShareAlbumPageLoader } from "./styled/ShareAlbumPageLoader";

export const ShareAlbumPageView = () => {
  const { screenMap, error, didSucceed } = useShareAlbumPageState();

  const {
    shareAlbumPage: { didSucceedText }
  } = useIntlDictionary();

  const errorText = error ? error.message : undefined;

  const successText = didSucceed ? didSucceedText : undefined;

  return (
    <Page centered={screenMap.LOADING || screenMap.SELECTING_FILES}>
      {screenMap.LOADING && <ShareAlbumPageLoader />}
      {screenMap.EDITING_ALBUM && <AlbumEditor />}
      {screenMap.SELECTING_FILES && (
        <DropZone errorText={errorText} successText={successText} />
      )}
    </Page>
  );
};