import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { deleteCand } from "@/lib/serverActions";
import { ReloadIcon, TrashIcon } from "@radix-ui/react-icons";
import { FormEvent, useState } from "react";

const DeleteCandDiag = ({ id }: { id: number }) => {
  const [isLoading, setLoading] = useState(false);

  const onDelete = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    deleteCand(id);
    setLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" className="ml-2">
          <TrashIcon className="mr-1" /> Delete Candidate
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Esta seguro?</DialogTitle>
          <DialogDescription>
            El candidato despues de borrado no se puede recuperar
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <form onSubmit={onDelete}>
            <Button type="submit">
              Submit
              {isLoading && (
                <ReloadIcon className="ml-2 h-4 w-4 animate-spin" />
              )}
            </Button>
          </form>
          <DialogClose asChild>
            <Button variant="secondary">Cancelar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteCandDiag;
