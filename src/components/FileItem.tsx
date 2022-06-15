// @flow
import * as React from "react";
import { FileDTO } from "../domain/files/FileDTO";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@material-tailwind/react";

interface FileItemProps {
  fileDTO: FileDTO;
  downloadAction: (fileId: string) => void;
  deleteAction: (fileId: string) => void;
}

export const FileItem = (props: FileItemProps) => {
  const { fileDTO, deleteAction, downloadAction } = props;
  return (
    <div>
      <span className="bg-blue">
        <Button
          onClick={() => deleteAction(fileDTO.id)}
          variant="gradient"
          className="flex items-center"
        >
          <>{DeleteIcon}</>
        </Button>
        <p>{fileDTO.fileName}</p>
        <Button
          onClick={() => downloadAction(fileDTO.id)}
          variant="gradient"
          className="flex items-center"
        >
          <>{FileDownloadRoundedIcon}</>
        </Button>
      </span>
    </div>
  );
};
