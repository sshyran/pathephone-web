// @flow strict

import type { TPlaybackControlsScreen } from "types/state";

import * as React from "react";

import { WarningIcon } from "icons/round-warning";
import { PauseIcon } from "icons/round-pause";
import { PlayArrowIcon } from "icons/round-play-arrow";
import { PlaylistIcon } from "icons/round-queue_music";
import { SquareButton } from "view/SquareButton";
import { Spinner } from "view/Spinner";

import { PlaybackControlsInfo } from "./styled/PlaybackControlsInfo";
import { PlaybackControlsGroup } from "./styled/PlaybackControlsGroup";
import { PlaybackControlsWrapper } from "./styled/PlaybackControlsWrapper";

type TProps = {|
  screen: TPlaybackControlsScreen,
  title: string,
  artistName: string,
  onPlaybackButtonClick(): void,
  onPlaylistButtonClick(): void
|};

export const PlaybackControlsView = ({
  screen,
  title,
  artistName,
  onPlaybackButtonClick,
  onPlaylistButtonClick
}: TProps) => {
  return (
    <PlaybackControlsWrapper>
      <PlaybackControlsGroup mod="player">
        <SquareButton
          disabled={screen === "PENDING" || screen === "FAILED"}
          onClick={onPlaybackButtonClick}
        >
          {screen === "PLAYING" && <PauseIcon />}
          {screen === "PAUSED" && <PlayArrowIcon />}
          {screen === "FAILED" && <WarningIcon />}
          {screen === "PENDING" && <Spinner />}
        </SquareButton>
      </PlaybackControlsGroup>
      <PlaybackControlsInfo title={title} artistName={artistName} />
      <PlaybackControlsGroup mod="playlist">
        <SquareButton onClick={onPlaylistButtonClick}>
          <PlaylistIcon />
        </SquareButton>
      </PlaybackControlsGroup>
    </PlaybackControlsWrapper>
  );
};