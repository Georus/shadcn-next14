import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/lib/db";
import delay from "delay";

import React from "react";
import TableToolbar from "./TableToolbar";

const page = async () => {
  const cands = await prisma.candidate.findMany();
  await delay(2000);
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
          {cands.map((cand) => (
            <TableRow key={cand.id}>
              <TableCell>{cand.id}</TableCell>
              <TableCell>{cand.username}</TableCell>
              <TableCell>{cand.jobdesc}</TableCell>
              <TableCell>{cand.experience}</TableCell>
              <TableCell>{cand.countries}</TableCell>
              <TableCell>{cand.createdAt.toString()}</TableCell>
              <TableCell>{cand.updatedAt.toString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default page;
