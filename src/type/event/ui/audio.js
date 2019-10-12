// @flow stric

type TPaused = {|
  type: "AUDIO__PAUSED"
|};

type TPlayed = {|
  type: "AUDIO__PLAYING"
|};

type TWaiting = {|
  type: "AUDIO__WAITING"
|};

type TEnded = {|
  type: "AUDIO__ENDED"
|};

type TFailed = {|
  type: "AUDIO__FAILED",
  payload: null | MediaError
|};

export type TAudioEvent = TPaused | TPlayed | TWaiting | TEnded | TFailed;