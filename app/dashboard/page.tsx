import { DataTable } from "./DataTable";
import ServerTable from "./ServerTable";
import TableToolbar from "./TableToolbar";

export const dynamic = "force-dynamic";

const page = async () => {
  return (
    <div className="pt-4">
      <TableToolbar />
      <ServerTable />
      <DataTable />
    </div>
  );
};

export default page;
