// @flow strict

import * as React from "react";

import { DropZoneWrapper } from "./styled/DropZoneWrapper";
import { DropZoneLabel } from "./styled/DropZoneLabel";
import { DropZoneInput } from "./styled/DropZoneInput";
import { DropZoneText } from "./styled/DropZoneText";
import { useDispatch } from "hooks/useDispatch";
import { useIntlDictionary } from "hooks/useIntl";

type TProps = {|
  errorText?: string,
  successText?: string
|};

export const DropZone = (props: TProps) => {
  const { errorText, successText } = props;

  const {
    dropZone: { mainText }
  } = useIntlDictionary();

  const dispatch = useDispatch();

  const onFilesChange = React.useCallback(
    (files: FileList) => {
      dispatch({
        type: "DROP_ZONE__FILES_RECIEVED",
        payload: files
      });
    },
    [dispatch]
  );

  return (
    <DropZoneWrapper>
      <DropZoneLabel>
        <DropZoneInput onFilesChange={onFilesChange} />
        <DropZoneText
          mainText={mainText}
          errorText={errorText}
          successText={successText}
        />
      </DropZoneLabel>
    </DropZoneWrapper>
  );
};