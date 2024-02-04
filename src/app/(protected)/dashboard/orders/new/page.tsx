import getProductWithVariantsWithStock from "@/actions/product/getProductVariantStock";
import OrderForm from "@/components/order/order-form";

export default async function NewOrderPage() {
  const products = await getProductWithVariantsWithStock();
  return (
    <div>
      <OrderForm products={products}/>
    </div>
  );
}
