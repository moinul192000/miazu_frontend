"use server";
import { auth } from "@/auth";
import axios, { setAxiosAuthorization } from "@/lib/axios";
async function deleteProduct(code: string) {
  const session = await auth();
  if (!session) {
    return { error: "Not authenticated" };
  }
  setAxiosAuthorization(session.user.accessToken);
  try {
    const res = await axios.delete(`/products/${code}`);
    const data = res.status;
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
}

export default deleteProduct;
