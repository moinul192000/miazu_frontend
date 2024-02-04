"use server";
import { auth } from "@/auth";
import axios, { setAxiosAuthorization } from "@/lib/axios";
async function getProducts() {
  const session = await auth();
  if (!session) {
    return { error: "Not authenticated" };
  }
  setAxiosAuthorization(session.user.accessToken);
  try {
    const res = await axios.get("/products");
    const data = res.data;
    return data.data;
  } catch (error: any) {
    throw new Error(error);
  }
}

export default getProducts;
