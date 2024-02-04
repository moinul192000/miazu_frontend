"use client";
import React, { useState, useTransition } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { CreateProductSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { FitType, ProductWithVariant } from "@/common/product-types";
import createProduct from "@/actions/createProduct";
import ProductDetails from "./product-card";

const ProductForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const [product, setProduct] = useState<ProductWithVariant | undefined>();

  const form = useForm<z.infer<typeof CreateProductSchema>>({
    resolver: zodResolver(CreateProductSchema),
    defaultValues: {
      productCode: "",
      name: "",
      brand: "",
      material: "",
      fit: FitType.REGULAR_FIT,
      description: "",
    },
    values: {
      productCode: "",
      name: "",
      brand: "",
      material: "",
      fit: FitType.REGULAR_FIT,
      description: "",
    },
  });
  // Write a OnSubmit function to post this data to the server
  const onSubmit = async (data: z.infer<typeof CreateProductSchema>) => {
    startTransition(() => {
      setError("");
      setSuccess("");
    });
    try {
      const res = await createProduct(data);
      setProduct(res.data);
      setSuccess("Product created successfully!");
      form.reset();
    } catch (err:any) {
      setError(err.message);
    }
  }
  if (isPending) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex items-center justify-center w-12 h-12 border-t-2 border-gray-900 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="productCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Code</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="PD-0001"
                    type="text"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="Product Name"
                    type="text"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="brand"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Brand</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="Brand Name (e.g. Nike)"
                    type="text"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="material"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Material</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="Product Material (e.g. Cotton)"
                    type="text"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
            control={form.control}
            name="fit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fit</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select fit type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={FitType.REGULAR_FIT}>
                      Regular Fit
                    </SelectItem>
                    <SelectItem value={FitType.SLIM_FIT}>Slim Fit</SelectItem>
                    <SelectItem value={FitType.LOOSE_FIT}>Loose Fit</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="Description"
                    type="text"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormError message={error} />
        <FormSuccess message={success} />
        <Button disabled={isPending} type="submit">
          Add Product
        </Button>
      </form>
    </Form>
  </>
  );
};

export default ProductForm;
