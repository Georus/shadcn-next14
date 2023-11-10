import HiringStatusBadge from "@/components/hiringStatusBadge";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import EditCand from "./editCand";

//this is where next gets the id param from the url
interface Props {
  params: { id: string };
}

const detailsPage = async ({ params }: Props) => {
  const candidate = await prisma.candidate.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!candidate) notFound();

  return (
    <div className="grid grid-cols-1 gap-3 p-3 md:grid-cols-2">
      <div>
        <p>{candidate?.username}</p>
        <p>{candidate?.jobdesc}</p>
        <p>{candidate?.experience}</p>
        <HiringStatusBadge status={candidate.hired} />
      </div>
      <EditCand id={parseInt(params.id)} />
    </div>
  );
};

export default detailsPage;
