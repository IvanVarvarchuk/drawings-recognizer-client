import { FileFormatType } from "../enums/FileFormatType";

export interface FileDTO {
    id: string;
    fileName: string;
    extention: FileFormatType;
}