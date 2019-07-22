// @flow strict

import * as React from "react";

import { FixedPanel } from "view/_ui/FixedPanel/index";

import styles from "./PlaybackControls.module.css";

type TProps = {|
  children: React.Node,
  toRight?: boolean
|};

export const PlaybackControlsWrapper = ({ children, toRight }: TProps) => {
  return (
    <FixedPanel position="bottom">
      <div className={styles.PlaybackControls__Wrapper}>{children}</div>
    </FixedPanel>
  );
};
