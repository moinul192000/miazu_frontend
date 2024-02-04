import { OrderStatus } from "@/common/order-types";

interface OrderStatusProps {
  status: OrderStatus;
}

const getStatusStyles = (status: OrderStatus): string => {
  switch (status) {
    case OrderStatus.PENDING:
      return "bg-yellow-100 text-yellow-700";
    case OrderStatus.APPROVED:
      return "bg-blue-100 text-blue-700";
    case OrderStatus.PROCESSED:
      return "bg-indigo-100 text-indigo-700";
    case OrderStatus.DELIVERED:
      return "bg-green-100 text-green-700";
    case OrderStatus.RETURNED:
      return "bg-red-100 text-red-700";
    case OrderStatus.PARTIAL_RETURNED:
      return "bg-purple-100 text-purple-700";
    case OrderStatus.CANCELED:
      return "bg-gray-100 text-gray-700";
    case OrderStatus.COMPLETED:
      return "bg-teal-100 text-teal-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const OrderStatusComponent = ({ status }: { status: OrderStatus }) => {
  const statusStyles = getStatusStyles(status);
  return (
    <span
      className={`px-2 py-1 rounded-md text-xs font-semibold ${statusStyles}`}
    >
      {status}
    </span>
  );
};

export default OrderStatusComponent;
