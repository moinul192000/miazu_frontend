import { z } from "zod";
import { FitType } from "@/common/product-types";


export const ProductVariantSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  sku: z.string(),
  barcode: z.string().nullable(),
  size: z.string(),
  color: z.string(),
  stockLevel: z.number(),
});

export const ProductSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  productCode: z.string(),
  name: z.string(),
  brand: z.string(),
  material: z.string(),
  fit: z.nativeEnum(FitType),
  variants: z.optional(z.array(ProductVariantSchema).nullable().default([])),
  description: z.string(),
});

export const ProductArraySchema = z.array(ProductSchema);

export const ProductVariantArraySchema = z.array(ProductVariantSchema);

export type ProductSchemaType = z.infer<typeof ProductSchema>;
export type ProductVariantSchemaType = z.infer<typeof ProductVariantSchema>;
