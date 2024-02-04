import getProductWithVariants from "@/actions/getProductWithVariants";
import ProductDetails from "@/components/product/product-card";
import VariantForm from "@/components/product/product-variant-form";


export default async function AddProductVariantPage({
  params,
}: {
  params: { productId: string };
}) {

  return <VariantForm productId={params.productId} />;
};
