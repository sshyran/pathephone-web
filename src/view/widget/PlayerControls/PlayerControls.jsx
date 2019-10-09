// @flow strict

import * as React from "react";

import { EventBoundary } from "utils/EventBoundary";
import { useAudio } from "hooks/useAudio";

import { PlaylistControls } from "view/widget/PlaylistControls";
import { PlaybackControls } from "view/widget/PlaybackControls";
import { usePlayerControlsState } from "./state/usePlayerControlsState";

type TProps = {||};

export const PlayerControls = (props: TProps) => {
  const [state, dispatch] = usePlayerControlsState();

  useAudio();

  return (
    <EventBoundary handler={dispatch}>
      {state.hasPlaylistMode ? <PlaylistControls /> : <PlaybackControls />}
    </EventBoundary>
  );
};