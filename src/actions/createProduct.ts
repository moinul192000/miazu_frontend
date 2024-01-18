"use server";
import * as z from "zod";
import { CreateProductSchema } from "@/schemas";
import { auth } from "@/auth";
import axios, { setAxiosAuthorization } from "@/lib/axios";
async function createProduct(values: z.infer<typeof CreateProductSchema>) {
    const session = await auth();
    if (!session) {
        return { error: "Not authenticated" };
    }
    setAxiosAuthorization(session.user.accessToken);

    const validatedFields = CreateProductSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: "Invalid fields!" };
    }
    const { productCode, name, brand, material, fit, description, } = validatedFields.data;
    try {
      const res = await axios.post("/products", {
          productCode,
          name,
          brand,
          material,
          fit,
          description,
      });
      console.log(res);
      const data = res.data;
      return data;
    } catch (error: any) {
      throw new Error(error);
    }
}

export default createProduct;