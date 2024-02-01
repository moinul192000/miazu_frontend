"use client";

import { ProductVariant, ProductWithVariant } from "@/common/product-types";
import { ColumnDef } from "@tanstack/react-table";
import VariantsTable from "./variants-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export const columns: ColumnDef<ProductWithVariant>[] = [
  {
    accessorKey: "productCode",
    header: "Code",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  // {
  //   accessorKey: "brand",
  //   header: "Brand",
  // },
  {
    accessorKey: "material",
    header: "Material",
  },
  {
    accessorKey: "fit",
    header: "Fit Type",
  },
  {
    accessorKey: "variants",
    header: "Variants",
    cell: (info) => {
      const variants = info.getValue() as ProductVariant[];
      return (
        <div className="-m-2">
          <VariantsTable variants={variants} />
        </div>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: (info) => {
      const product = info.row.original;
      return (
        <div className="flex items-center md:max-w-5">
          {/* <Button
            variant="default"
            onClick={() => {
              console.log("Edit product", product);
            }}
          >
            Edit
          </Button> */}
          <Button
            asChild
            variant="default"
          >
            <Link href={`/dashboard/stocks/adjust/${product.productCode}`}>Adjust Stock</Link>
          </Button>
        </div>
      );
    },
  }
];
