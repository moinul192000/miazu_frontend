"use client";
import React, { useState, useTransition } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { CreateVariantSchema } from "@/schemas";
import createProductVariant from "@/actions/createProductVariant";

const VariantForm = (productId: {productId: string}) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof CreateVariantSchema>>({
    resolver: zodResolver(CreateVariantSchema),
    defaultValues: {
      productId: productId.productId,
      sku: "",
      size: "",
      color: "",
      stockLevel: 0,
    },
  });

  const onSubmit = async (data: z.infer<typeof CreateVariantSchema>) => {
    startTransition(() => {
      setError("");
      setSuccess("");
    });
    try {
      const res = await createProductVariant(data);
      setSuccess("Variant added successfully!");
      form.reset();
    } catch (err: any) {
      setError(err.message);
    }
  };

  if (isPending) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        {/* Spinner or loading indicator */}
      </div>
    );
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-sm p-10 grid gap-10"
        >
          {/* <FormField
            control={form.control}
            name="productId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product ID</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="e4f8c5a6-8d5a-4f7e-8f5b-9b9a4c1b8a1e"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          <FormField
            control={form.control}
            name="sku"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product SKU</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="PG-1234"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="size"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Size</FormLabel>
                <FormControl>
                  <Input {...field} disabled={isPending} placeholder="Product size (eg.-S)" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="stockLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Items In Stock</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="Enter number of items in stock"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button disabled={isPending} type="submit">
            Add Variant
          </Button>
        </form>
      </Form>
    </>
  );
};

export default VariantForm;
