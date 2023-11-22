"use client";
import { Button } from "@/components/ui/button";
import { Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import EditCandForm from "./editCandForm";

const EditCand = ({ id }: { id: number }) => {
  const [isPanelOpen, setPanelOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setPanelOpen(!isPanelOpen)}>
        <Pencil2Icon className="mr-1" />
        Edit Candidate
      </Button>
      <Button variant="destructive" className="ml-2">
        <TrashIcon className="mr-1" /> Delete Candidate
      </Button>
      {isPanelOpen && <EditCandForm index={id} />}
    </div>
  );
};

export default EditCand;
