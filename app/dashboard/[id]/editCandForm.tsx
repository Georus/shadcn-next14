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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { editCand } from "@/lib/serverActions";
import { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";

export const EditFormSchema = z.object({
  type: z.enum(["hired", "considered", "discarded"], {
    required_error: "You need to select a notification type.",
  }),
  comments: z.string().min(2),
});

const EditCandForm = ({ index }: { index: number }) => {
  const [isLoading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof EditFormSchema>>({
    resolver: zodResolver(EditFormSchema),
  });

  async function onSubmit(data: z.infer<typeof EditFormSchema>) {
    setLoading(true);
    await editCand(data, index);
    setLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Recruit state</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="hired" />
                    </FormControl>
                    <FormLabel className="font-normal">Hired</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="considered" />
                    </FormControl>
                    <FormLabel className="font-normal">Considering</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="discarded" />
                    </FormControl>
                    <FormLabel className="font-normal">Rejected</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="comments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comments</FormLabel>
              <FormControl>
                <Textarea placeholder="Commentary ..." {...field} />
              </FormControl>
              <FormDescription>
                Any comments about the recruit goes here
              </FormDescription>
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

export default EditCandForm;
