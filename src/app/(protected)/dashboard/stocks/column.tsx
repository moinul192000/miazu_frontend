"use client";

import { ProductVariant, ProductWithVariant } from "@/common/product-types";
import { ColumnDef } from "@tanstack/react-table";
import VariantsTable from "./variants-table";


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
];
