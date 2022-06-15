// @flow 
import * as React from 'react';
import { FileDTO } from '../domain/files/FileDTO';
import { FileItem } from './FileItem';
interface FileItemGroupProps {
    fileItems: FileDTO[];
    date: string;
};
export const FileItemGroup = (props: FileItemGroupProps) => {

    const {fileItems, date} = props
    return (
        <div>
            <span className="bg-gray"><p>{date}</p></span>
            <div>
                {fileItems.map(f => 
                    <FileItem 
                        fileDTO={f} 
                        deleteAction={()=>{}} 
                        downloadAction={()=>{}} 
                        key={f.id}/>)}
            </div>
        </div>
    );
};