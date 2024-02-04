"use client";
import { ProductSchemaType, ProductVariantSchemaType } from "@/schemas/product";
import { useState } from "react";
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue } from "@/components/ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CartItem } from "./order-form";

export function ProductSelection({
  products,
  handleAddToCart,
}: {
  products: ProductSchemaType[];
  handleAddToCart: (cartItem:CartItem) => void;
}) {
  const [selectedProduct, setSelectedProduct] =
    useState<ProductSchemaType>();
  const [selectedVariant, setSelectedVariant] =
    useState<ProductVariantSchemaType>();
  const [quantity, setQuantity] = useState<number>(0);

  const handleProductChange = (productId: string) => {
    const selectedProduct = products.find(
      (product) => product.id === productId
    );

    if (selectedProduct) {
      setSelectedProduct(selectedProduct);
    }
    setSelectedVariant(undefined);
    setQuantity(0);
  };

  const handleAdd = () => {
    if (selectedProduct && selectedVariant) {
      const newCartItem = {
        id: selectedVariant.id,
        productName: selectedProduct.name,
        size: selectedVariant.size,
        sku: selectedVariant.sku,
        quantity: quantity,
        // Todo: Add price
        price: 0,
      };

      handleAddToCart(newCartItem);
    }
  }

  const handleVariantChange = (variantId: string) => {
    if (!selectedProduct) return;

    const selectedVariant = selectedProduct.variants?.find(
      (variant) => variant.id === variantId
    );

    if (selectedVariant) {
      setSelectedVariant(selectedVariant);
      setQuantity(0);
    }
  }

  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center gap-4">
        <Select onValueChange={(value) => handleProductChange(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select item" />
          </SelectTrigger>
          <SelectContent>
            {products.map((product) => (
              <SelectItem key={product.id} value={product.id}>
                {product.productCode}-{product.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          disabled={!selectedProduct || !selectedProduct.variants}
          onValueChange={(variantId) => handleVariantChange(variantId)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select size" />
          </SelectTrigger>
          <SelectContent>
            {selectedProduct &&
              selectedProduct.variants?.map((variant) => (
                <SelectItem key={variant.id} value={variant.id}>
                  {variant.size} - {variant.color} - {variant.stockLevel}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
        <Input
          placeholder="Quantity"
          type="number"
          disabled={!selectedVariant}
          max={selectedVariant && selectedVariant.stockLevel}
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
        />
        <Button type="button" variant="outline" onClick={handleAdd}>
          Add
        </Button>
      </div>
    </div>
  );

}