"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CiPaperplane } from "react-icons/ci";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { cn } from "~/lib/utils";
import { Input } from "~/components/ui/input";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { isValidPhoneNumber } from "react-phone-number-input";
import emailjs from "@emailjs/browser";
import { PhoneInput } from "~/components/ui/phone-input";

const formSchema = z
  .object({
    name: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email("Enter a valid email"),
    message: z.string().min(20, {
      message: "Your message must have at least 5 words",
    }),
    phone: z.string({ required_error: "Enter a phone number" }),
  })
  .refine(
    (data) => (data.phone!.length > 1 ? isValidPhoneNumber(data.phone!) : true),
    {
      message: "Invalid phone number",
      path: ["phone"],
    }
  );

const VolunteerForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>): Promise<void> {
    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      from_phone: values.phone,
      message: values.message,
    };
    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID2!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      toast("Thank you!! We're grateful you can help. We'll respond shortly.", {
        duration: 5000,
      });
      return form.reset();
    } catch (error) {
      toast("Message failed to send. Please try again later.", {
        duration: 5000,
      });
      return form.reset();
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex flex-col", "gap-y-4")}
      >
        {/* Full Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Full Name"
                  {...field}
                  className="block outline-none px-2 md:px-4 py-3 md:py-6 mb-3 border-dark/30 rounded-lg text-base text-zinc-900 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-dark/70 transition-all duration-300"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Email"
                  {...field}
                  className="block outline-none px-2 md:px-4 py-3 md:py-6 mb-3 border-dark/30 rounded-lg text-base text-zinc-900 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-dark/70 transition-all duration-300"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Phone number */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="col-span-full md:col-span-1">
              <FormControl>
                {/* @ts-ignore */}
                <PhoneInput
                  placeholder="(XXX) XXX-XXXX"
                  className="outline-none px-2 md:px-4 mb-3 flex border border-dark/30 rounded-lg text-base text-zinc-900 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-dark/70 transition-all duration-300"
                  defaultCountry="US"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="How can you help us"
                  className="resize-none p-4 border-dark/30 rounded-lg text-zinc-90 text-base focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-dark/70 transition-all duration-300"
                  cols={25}
                  rows={3}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          variant={"default"}
          className="bg-primary hover:bg-dark rounded-full group"
        >
          Message Us
          <CiPaperplane className=" ml-2 h-6 w-6 group-hover:-rotate-45 transition-transform duration-200" />
        </Button>
      </form>
    </Form>
  );
};

export default VolunteerForm;
