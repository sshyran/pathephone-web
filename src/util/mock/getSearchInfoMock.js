// @flow strict

import type { TSearchInfo } from "type/state";

import { getUID } from "util/uid";

export const getSearchInfoMock = (): TSearchInfo => ({
  text: `text${getUID()}`,
  saved: true,
  resultsCount: Math.floor(Math.random() * 10)
});

export const getSearchInfoMocks = (initialCount: number) => {
  let count = initialCount;
  const mocks: TSearchInfo[] = [];
  while (count > 0) {
    mocks.push(getSearchInfoMock());
    count -= 1;
  }
  return mocks;
};