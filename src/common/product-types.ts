export enum FitType {
  REGULAR_FIT = "REGULAR_FIT",
  SLIM_FIT = "SLIM_FIT",
  LOOSE_FIT = "LOOSE_FIT",
}

export type ProductVariant = {
  sku: string;
  barcode?: string;
  size: string;
  color: string;
  stockLevel?: number;
};

type Product = {
  productCode: string;
  name: string;
  brand: string;
  material: string;
  fit?: FitType; // Assuming FitType is defined somewhere
  description: string;
};

export type ProductWithVariant = Product & {
  variants: ProductVariant[];
};
