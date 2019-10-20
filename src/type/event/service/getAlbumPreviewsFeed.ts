import { AlbumPreview } from "type/model";

type TPending = {
  type: "GET_ALBUM_PREVIEWS_FEED__PENDING";
};

type TResolved = {
  type: "GET_ALBUM_PREVIEWS_FEED__RESOLVED";
  payload: {
    albums: AlbumPreview[];
    lastPageFlag: boolean;
  };
};

type TRejected = {
  type: "GET_ALBUM_PREVIEWS_FEED__REJECTED";
  payload: Error;
};

export type GetAlbumPreviewsFeedEvent = TPending | TResolved | TRejected;