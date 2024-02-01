"use server";
import * as z from "zod";
import { CreateVariantSchema } from "@/schemas";
import { auth } from "@/auth";
import axios, { setAxiosAuthorization } from "@/lib/axios";
async function createProductVariant(
  values: z.infer<typeof CreateVariantSchema>
) {
  const session = await auth();
  if (!session) {
    return { error: "Not authenticated" };
  }
  setAxiosAuthorization(session.user.accessToken);

  const validatedFields = CreateVariantSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  const { productId, sku, size, color, stockLevel } = validatedFields.data;
  try {
    const res = await axios.post("/products/variants", {
      productId,
      sku,
      size,
      color,
      stockLevel,
    });
    const data = res.data;
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
}

export default createProductVariant;
