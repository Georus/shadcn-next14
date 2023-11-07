"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { createCand } from "@/lib/serverActions";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  jobdesc: z.string().min(2, {
    message: "Puesto actual must be at least 2 characters.",
  }),
  experience: z.string().min(2, {
    message: "Puesto actual must be at least 2 characters.",
  }),
  countries: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

const CVForm = () => {
  const [isLoading, setLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      jobdesc: "",
      experience: "",
      countries: ["mex"],
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    await createCand(values);
    setLoading(false);
    console.log(values);
  }

  const countries = [
    {
      id: "mex",
      label: "Mexico",
    },
    {
      id: "usa",
      label: "Estados Unidos",
    },
    {
      id: "can",
      label: "Canada",
    },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input className="lg:w-1/2" placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="jobdesc"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Puesto actual</FormLabel>
              <FormControl>
                <Input className="lg:w-1/2" placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>Puesto actual en el que labora.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Experiencia</FormLabel>
              <FormControl>
                <Textarea
                  className="lg:w-1/2"
                  placeholder="Describa aqui ..."
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Describa su experiencia laboral y academica
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="countries"
          render={({ field }) => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Sucursales</FormLabel>
                <FormDescription>
                  Seleccione las locaciones en las que este interesado.
                </FormDescription>
              </div>
              {countries.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="countries"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id,
                                    ),
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          Submit
          {isLoading && <ReloadIcon className="ml-2 h-4 w-4 animate-spin" />}
        </Button>
      </form>
    </Form>
  );
};

export default CVForm;
