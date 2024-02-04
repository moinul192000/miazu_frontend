import { z } from "zod";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { ordersResponseSchema } from "@/schemas/order";
import { Button } from "../ui/button";
import OrderStatusComponent from "./order-status";
import Link from "next/link";

const OrderList = ({
  orders,
}: {
  orders: z.infer<typeof ordersResponseSchema>;
}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>User</TableHead>
          <TableHead>Items</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order, indx) => (
          <TableRow key={order.id}>
            <TableCell>{indx+1}</TableCell>
            <TableCell>
              {new Date(order.createdAt).toLocaleDateString()}
            </TableCell>
            <TableCell>
              {`${order.user.firstName} ${order.user.lastName}`}
              <br />
              <span className="text-sm text-gray-500">
                {`${order.phoneNumber}`}
              </span>
              <br />
              <span className="text-sm text-gray-500">{`${order.address}`}</span>
            </TableCell>
            <TableCell>
              <ol className="list-decimal">
                {order.items.map((item) => (
                  <li
                    key={item.id}
                    className="py-1"
                  >{`${item.product.name} - ${item.productVariant.size} (x${item.quantity})`}</li>
                ))}
              </ol>
            </TableCell>
            <TableCell>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BDT",
              }).format(
                order.items.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                )
              )}
            </TableCell>
            <TableCell>
              <OrderStatusComponent status={order.status} />
            </TableCell>
            <TableCell>
              <Button asChild variant="ghost">
                <Link href={`/orders/${order.id}`}>View</Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OrderList;