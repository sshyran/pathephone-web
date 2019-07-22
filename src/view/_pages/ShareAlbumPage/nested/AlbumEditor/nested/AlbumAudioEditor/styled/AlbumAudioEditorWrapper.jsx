// @flow strict

import * as React from "react";

import styles from "./AlbumAudioEditor.module.css";

type TProps = {|
  children: React.Node
|};

export const AlbumAudioEditorWrapper = ({ children }: TProps) => (
  <label className={styles.AlbumAudioEditor__Wrapper}>{children}</label>
);
