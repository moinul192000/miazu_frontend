"use server";
import { auth } from "@/auth";
import { ProductWithVariant } from "@/common/product-types";
import axios, { setAxiosAuthorization } from "@/lib/axios";

async function getProductWithVariants(productId: string)
: Promise<ProductWithVariant> {
  const session = await auth();
  if (!session) {
    throw new Error("Not authenticated");
  }
  console.log("session.user.accessToken", session.user.accessToken);
  setAxiosAuthorization(session.user.accessToken);

  try {
    const res = await axios.get(`/products/${productId}`);
    const ProductWithVariant: ProductWithVariant = res.data;
    return ProductWithVariant;
  } catch (error: any) {
    throw new Error(error);
  }
}

export default getProductWithVariants;
