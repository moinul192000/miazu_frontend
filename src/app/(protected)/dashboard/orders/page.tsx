import getOrders from "@/actions/order/getOrders";
import OrderList from "@/components/order/order-list";

export default async function OrdersPage() {
  const orders = await getOrders();
  const validOrders = Array.isArray(orders) ? orders : [];
  return (
    <div>
      <OrderList orders={validOrders} />
    </div>
  );
}