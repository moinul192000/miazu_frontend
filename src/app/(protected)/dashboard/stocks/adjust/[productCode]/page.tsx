import getProductWithVariants from "@/actions/getProductWithVariants";
import ProductDetails from "@/components/product/product-card";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Stocks - Dashboard",
  description: "Miazu Admin Stocks Area",
};

export default async function AdjustStockPage({ params }: { params: { productCode: string } }) {
  const data = await getProductWithVariants(params.productCode);

  return (
    <>
      <div className="container mx-auto py-10">
        <ProductDetails product={data} />
      </div>
    </>
  );
}
