import { ProductWithVariant } from "@/common/product-types";
import { DataTable } from "@/components/ui/data-table";
import { getCurrentUser } from "@/lib/auth";
import { Metadata } from "next";
import Image from "next/image";
import { columns } from "./column";

export const metadata: Metadata = {
  title: "Stocks - Dashboard",
  description: "Miazu Admin Stocks Area",
};

async function getStockData() {
  const user = await getCurrentUser();
  const url = `${process.env.BACKEND_URL}/stocks`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${user?.accessToken}`,
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data:ProductWithVariant[] = await res.json();
  return data;
}

export default async function StocksPage() {
  const data = await getStockData();

  return (
    <>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
