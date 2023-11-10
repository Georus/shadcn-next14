import React from "react";
import { Badge } from "./ui/badge";
import { Status } from "@prisma/client";

const statusMap: Record<Status, { label: string; color: string }> = {
  hired: { label: "Hired", color: "border-green-600 text-green-600" },
  considered: {
    label: "Considering",
    color: "border-yellow-600 text-yellow-600",
  },
  discarded: { label: "Rejected", color: "border-red-600 text-red-600" },
};

const HiringStatusBadge = ({ status }: { status: Status }) => {
  return (
    <Badge variant="secondary" className={statusMap[status].color}>
      {statusMap[status].label}
    </Badge>
  );
};

export default HiringStatusBadge;
