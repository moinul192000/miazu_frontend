import { OrderStatus } from "@/common/order-types";
import { z } from "zod";
import { ProductSchema, ProductVariantSchema } from "@/schemas/product";

const userSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phone: z.string(),
});

const productSchema = z.object({
  productCode: z.string(),
  name: z.string(),
  brand: z.string(),
  material: z.string(),
  fit: z.string(),
});

const productVariantSchema = z.object({
  sku: z.string(),
  barcode: z.union([z.string(), z.null()]),
  size: z.string(),
  color: z.string(),
});

const itemSchema = z.object({
  id: z.string(),
  product: productSchema,
  productVariant: productVariantSchema,
  quantity: z.number(),
  price: z.number(),
});

const orderSchema = z.object({
  id: z.string(),
  createdAt: z.string(), // or z.date() if you want to enforce date objects
  user: userSchema,
  phoneNumber: z.string(),
  address: z.string(),
  items: z.array(itemSchema),
  status: z.nativeEnum(OrderStatus)
});

export const ordersResponseSchema = z.array(orderSchema);


export const OrderSelectionFormSchema = z.object({
  selectedProduct: ProductSchema.optional(),
  selectedVariant: ProductVariantSchema.optional(),
  quantity: z.number().min(0, { message: "Quantity can't be negative" }),
});

export type OrderSelectionFormType = z.infer<typeof OrderSelectionFormSchema>;

export const CreateOrderFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  address: z.string().min(1, "Address is required"),
  phone: z.string().min(1, "Phone number is required"),
  note: z.string().optional(),
  delivery: z
    .string()
    .transform((value) => parseFloat(value))
    .refine((value) => !isNaN(value) && value >= 0, {
      message: "Delivery cost must be a positive number",
    }),
  discount: z
    .string()
    .transform((value) => parseFloat(value))
    .refine((value) => !isNaN(value) && value >= 0, {
      message: "Discount must be a positive number",
    }),
});