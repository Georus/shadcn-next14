import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import React from "react";
import TableToolbar from "./TableToolbar";

const loadingCandidatesPage = () => {
  const skeletons = [1, 2, 3, 4, 5];
  const columns = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="pt-4">
      <TableToolbar />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Job</TableHead>
            <TableHead>Experience</TableHead>
            <TableHead>Countries wanted</TableHead>
            <TableHead>Created at</TableHead>
            <TableHead>Updated at</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {skeletons.map((skeleton) => (
            <TableRow key={skeleton}>
              {columns.map((col, i) => (
                <TableCell key={i}>
                  <Skeleton className="h-4" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default loadingCandidatesPage;
