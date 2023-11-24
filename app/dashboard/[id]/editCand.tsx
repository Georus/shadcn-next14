"use client";
import { Button } from "@/components/ui/button";
import { Pencil2Icon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import EditCandForm from "./editCandForm";
import DeleteCandDiag from "./deleteCandDiag";

const EditCand = ({ id }: { id: number }) => {
  const [isPanelOpen, setPanelOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setPanelOpen(!isPanelOpen)}>
        <Pencil2Icon className="mr-1" />
        Edit Candidate
      </Button>
      <DeleteCandDiag id={id} />
      {isPanelOpen && <EditCandForm index={id} />}
    </div>
  );
};

export default EditCand;
