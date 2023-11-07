"use server";

import prisma from "@/lib/db";
import { formSchema } from "@/app/contact/CVForm";
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
