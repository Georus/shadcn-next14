"use client";
import { Button } from "@/components/ui/button";
import { Pencil2Icon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import EditCandForm from "./editCandForm";

interface Props {
  id: number;
}

const EditCand = ({ id }: Props) => {
  const [isPanelOpen, setPanelOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setPanelOpen(!isPanelOpen)}>
        <Pencil2Icon className="mr-1" />
        Edit Candidate
      </Button>
      {isPanelOpen && <EditCandForm index={id} />}
    </div>
  );
};

export default EditCand;
