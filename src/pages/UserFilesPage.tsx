// @flow
import * as React from "react";
import { FileGroup } from "../domain/files/FileGroup";
import { FileItemGroup } from "../components/FileItemGroup";
import { UserFileFilters } from "../components/UserFileFilters";
import { useFetch } from "../hooks/useFetchGet";
interface UserFilesProps {}
export const UserFilesPage = (props: UserFilesProps) => {
  const [fileGroups, setFileGroups] = React.useState<FileGroup[]>([]);

  const [date, setDate] = React.useState();

  const [fileName, setFileName] = React.useState();

  //const {data, loading, error} = useFetch(`localhost:5001/api/userfiles?searchTerm=${fileName}&date=${date}`);

  // if (!data) {
  //     setFileGroups(data as unknown as FileGroup[]);
  // }
  // if (loading) {
  //     return error ? (
  //       <span>Error: {error}</span>
  //     ) : (
  //     <>
  //         <UserFileFilters handleDateUpdate={setDate} handleSearchUpdate={setFileName}/>
  //         {fileGroups.map((fg: FileGroup) => <FileItemGroup {...fg} key={fg.date.length}/>)}
  //     </>
  //     );
  // }
  return <span>Loading...</span>;
};
