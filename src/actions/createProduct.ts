"use server";
import * as z from "zod";
import { CreateProductSchema } from "@/schemas";
import { getCurrentUser } from "@/lib/auth";
async function createProduct(values: z.infer<typeof CreateProductSchema>) {
    const user = await getCurrentUser();
    const validatedFields = CreateProductSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: "Invalid fields!" };
    }
    const { productCode, name, brand, material, fit, description, } = validatedFields.data;
    const backendUrl = `${process.env.BACKEND_URL}/products`;
    try {
      const res = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.accessToken}`,
        },
        body: JSON.stringify({
          productCode,
          name,
          brand,
          material,
          fit,
          description,
        }),
      });
      console.log(res);
      const data = await res.json();
      if (!res.ok) {
        return { error: data.message };
      }
      return data;
    } catch (error: any) {
      throw new Error(error);
    }
}

export default createProduct;