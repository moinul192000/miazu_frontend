import { Product } from "@/common/product-types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import deleteProduct from "@/actions/deleteProduct";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="flex items-center justify-between space-y-2">
      <Table className="md:max-w-screen-md">
        <TableHeader>
          <TableRow>
            <TableHead>Code</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="text-center">Brand</TableHead>
            <TableHead className="text-center">Material</TableHead>
            <TableHead className="text-center">Fit</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.productCode}>
              <TableCell className="font-medium">
                {product.productCode}
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell className="text-center font-semibold">
                {product.brand}
              </TableCell>
              <TableCell className="text-center">{product.material}</TableCell>
              <TableCell className="text-center">{product.fit}</TableCell>
              <TableCell className="text-center">
                <Button className="md:mr-2" disabled>Edit</Button>
                <Button variant="destructive" disabled>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}