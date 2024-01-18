import { FitType } from "@/common/product-types";
import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required!",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
});

export const CreateProductSchema = z.object({
  productCode: z.string().min(3, {
    message: "Product code must be at least 3 characters long",
  },).max(10, {
    message: "Product code must be at most 10 characters long",
    }),
  name: z.string().min(3, {
    message: "Name must be at least 3 characters long",
  }),
  brand: z.string().min(3, {
    message: "Brand must be at least 3 characters long",
  }),
  material: z.string().min(3, {
    message: "Material must be at least 3 characters long",
  }),
  fit: z.nativeEnum(FitType),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters long",
  }),
});