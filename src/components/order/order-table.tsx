"use client";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { TrashIcon } from '@radix-ui/react-icons';
import { CartItem } from "./order-form";

interface OrderTableProps {
  items: CartItem[];
  handleRemove: (itemId: string) => void;
}

const OrderTable: React.FC<OrderTableProps> = ({ items, handleRemove }) => {
  return (
    <div className="mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Unit Price</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Actions</TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.productName}</TableCell>
              <TableCell>{item.size}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.price * item.quantity}</TableCell>
              <TableCell>
                <Button
                  size="icon"
                  variant="outline"
                  type="button"
                  onClick={() => handleRemove(item.id)}
                >
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-end mt-4">
        <span className="text-lg font-semibold text-gray-700">Total: {
          items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
        }</span>
      </div>
    </div>
  );
};

export default OrderTable;
