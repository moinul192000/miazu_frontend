import {
  CardTitle,
  CardDescription,
  CardHeader,
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { ProductWithVariant } from "@/common/product-types";

export default function ProductDetails({ product }: { product: ProductWithVariant }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-10">
      <Card className="w-full max-w-sm p-10 grid gap-10">
        <CardHeader className="items-center space-y-0 gap-4 p-0">
          <div className="grid gap-1 text-center">
            <Image
              alt="Product Image"
              className="w-full h-64 object-cover mb-4"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <CardTitle className="text-lg">{product.name}</CardTitle>
            <CardDescription className="text-xs">
              Product Code: {product.productCode}
            </CardDescription>
            <CardDescription className="text-xs">Brand: {product.brand}</CardDescription>
            <CardDescription className="text-xs">
              Material: {product.material}
            </CardDescription>
            <CardDescription className="text-xs">
              Fit: {product.fit}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-0 grid gap-4">
          <Card className="w-full max-w-sm p-10 grid gap-10">
            <CardHeader className="items-center space-y-0 gap-4 p-0">
              <div className="grid gap-1 text-center">
                <CardTitle className="text-lg">Variant 1</CardTitle>
                <CardDescription className="text-xs">
                  SKU: SKU-PJ012
                </CardDescription>
                <CardDescription className="text-xs">Size: X</CardDescription>
                <CardDescription className="text-xs">
                  Color: White
                </CardDescription>
                <CardDescription className="text-xs">
                  Stock Level: 9
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Button size="lg">Add Variant</Button>
        </CardContent>
      </Card>
      <Card className="w-full max-w-sm p-10 grid gap-10">
        <CardHeader className="items-center space-y-0 gap-4 p-0">
          <div className="grid gap-1 text-center">
            <CardTitle className="text-lg">Add New Variant</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-0 grid gap-4">
          <Input
            className="mb-4"
            placeholder="Product ID: e4f8c5a6-8d5a-4f7e-8f5b-9b9a4c1b8a1e"
          />
          <Input className="mb-4" placeholder="SKU: SKU-0001" />
          <Input className="mb-4" placeholder="Size: M" />
          <Input className="mb-4" placeholder="Color: Red" />
          <Input className="mb-4" placeholder="Stock Level: 100" />
          <Button size="lg">Submit</Button>
        </CardContent>
      </Card>
    </div>
  );
}
