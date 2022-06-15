// @flow 
import { Input } from '@material-tailwind/react';
import * as React from 'react';
type Props = {
    handleDateUpdate: (e: any) => void;
    handleSearchUpdate: (e: any) => void;
};
export const UserFileFilters = (props: Props) => {
    return (
        <div>
            <Input type="text" />
            <Input type="date"/>
        </div>
    );
};