import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/lib/db";
import TableToolbar from "./TableToolbar";
import Link from "next/link";
import { DataTable } from "./DataTable";

const page = async () => {
  const cands = await prisma.candidate.findMany();

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
              <TableCell>
                <Link
                  className="text-slate-400 underline hover:text-slate-600"
                  href={`/dashboard/${cand.id}`}
                >
                  {cand.username}
                </Link>
              </TableCell>
              <TableCell>{cand.jobdesc}</TableCell>
              <TableCell>{cand.experience}</TableCell>
              <TableCell>{cand.countries}</TableCell>
              <TableCell>{cand.createdAt.toDateString()}</TableCell>
              <TableCell>{cand.updatedAt.toDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <DataTable /> */}
    </div>
  );
};

export default page;
