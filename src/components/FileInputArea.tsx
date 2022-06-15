// @flow 
import * as React from 'react';
type Props = {
    
};
export const FileInputArea = (props: Props) => {
    const upload = async (e: any) => {
        
        // Convert the FileList into an array and iterate
        let files = Array.from(e.target.files).map(file => {
            
            // Define a new file reader
            let reader = new FileReader();
            
            // Create a new promise
            return new Promise(resolve => {
                
                // Resolve the promise after reading file
                reader.onload = () => resolve(reader.result);
                
                // Reade the file as a text
                reader.readAsText(file as File);
                
            });
            
        });
        
        // At this point you'll have an array of results
        let res = await Promise.all(files);
        
    }
    
    return(
        <input onChange = {upload} type = 'file' multiple/>
    );
};

