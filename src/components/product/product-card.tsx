import {
  CardTitle,
  CardDescription,
  CardHeader,
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { ProductWithVariant } from "@/common/product-types";
import Link from "next/link";

export default function ProductDetails({ product }: { product: ProductWithVariant }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-10">
      <Card className="w-full max-w-screen-md xs:p-5 sm:p-10 grid gap-10">
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
        
        <CardContent className="p-0 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
          {product.variants && product.variants.map((variant, index) => (
            <Card className="w-full max-w-sm p-10 grid gap-10" key={variant.sku}>
            <CardContent className="items-center space-y-0 gap-4 p-0">
              <div className="grid gap-1 text-center">
                <CardTitle className="text-lg">Variant -{index}</CardTitle>
                <CardDescription className="text-xs">
                  SKU: {variant.sku}
                </CardDescription>
                <CardDescription className="text-xs">Size: X</CardDescription>
                <CardDescription className="text-xs">
                  Color: {variant.color}
                </CardDescription>
                <CardDescription className="text-xs">
                  Stock Level: {variant.stockLevel}
                </CardDescription>
              </div>
            </CardContent>
          </Card>
          ))}
        </CardContent>

        <CardFooter className="flex justify-center">
          <Button size="lg">
            <Link href="{`/dashboard/products/${productId}/`}">
              Add Variant
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
