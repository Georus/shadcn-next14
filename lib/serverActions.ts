"use server";

import prisma from "@/lib/db";
import { formSchema } from "@/app/contact/CVForm";
import { EditFormSchema } from "@/app/dashboard/[id]/editCandForm";
import * as z from "zod";
import { redirect } from "next/navigation";

export async function createCand(values: z.infer<typeof formSchema>) {
  const locs = values.countries.reduce((acc, curr) => acc + " " + curr, "");

  try {
    await prisma.candidate.create({
      data: {
        username: values.username,
        jobdesc: values.jobdesc,
        experience: values.experience,
        countries: locs,
      },
    });
  } catch (error) {
    console.log(error);
  }

  redirect("/");
}

export async function editCand(
  values: z.infer<typeof EditFormSchema>,
  id: number,
) {
  try {
    await prisma.candidate.update({
      where: { id: id },
      data: { hired: values.type, comments: values.comments },
    });
  } catch (error) {
    console.log(error);
  }

  redirect("/");
}

export async function deleteCand(id: number) {
  try {
    await prisma.candidate.delete({ where: { id: id } });
  } catch (error) {
    console.log(error);
  }

  redirect("/");
}
