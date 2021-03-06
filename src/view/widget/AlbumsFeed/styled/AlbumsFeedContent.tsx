import * as React from "react";

import styles from "./AlbumsFeed.module.css";

type TProps = {
  children: React.ReactNode;
};

export const AlbumsFeedContent = ({ children }: TProps) => (
  <div className={styles.AlbumsFeed__Content}>{children}</div>
);
