"use server";
import { auth } from "@/auth";
import {z} from "zod";
import axios, { setAxiosAuthorization } from "@/lib/axios";
import { ordersResponseSchema } from "@/schemas/order";
async function getOrders(): Promise<z.infer<typeof ordersResponseSchema> | { error: string }> {
  const session = await auth();
  if (!session) {
    return { error: "Not authenticated" };
  }
  setAxiosAuthorization(session.user.accessToken);
  try {
    const res = await axios.get("/orders");
    const data = await ordersResponseSchema.parseAsync(res.data);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
}

export default getOrders;
