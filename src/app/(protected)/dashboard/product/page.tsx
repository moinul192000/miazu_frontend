import getProducts from "@/actions/getProducts";
import { ProductWithVariant } from "@/common/product-types";
import ProductList from "@/components/product/product-list";
import { getCurrentUser } from "@/lib/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - Dashboard",
  description: "Miazu Admin Dashboard Area",
};

export default async function ProductsPage() {
  const data = await getProducts();

  return (
    <>
      <div className="container">
        <ProductList products={data} />
      </div>
    </>
  );
}
