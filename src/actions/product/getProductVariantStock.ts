"use server";
import { z } from "zod";
import { auth } from "@/auth";
import { ProductWithVariant } from "@/common/product-types";
import axios, { setAxiosAuthorization } from "@/lib/axios";
import { ProductArraySchema } from "@/schemas/product";

async function getProductWithVariantsWithStock(): Promise<z.infer<typeof ProductArraySchema>> {
  const session = await auth();
  if (!session) {
    throw new Error("Not authenticated");
  }
  console.log("session.user.accessToken", session.user.accessToken);
  setAxiosAuthorization(session.user.accessToken);

  try {
    const res = await axios.get(`/products/variants`);
    const ProductWithVariant: z.infer<typeof ProductArraySchema> = res.data;
    return ProductWithVariant;
  } catch (error: any) {
    throw new Error(error);
  }
}

export default getProductWithVariantsWithStock;
