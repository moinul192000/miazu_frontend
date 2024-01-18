"use client";
import { ProductVariant } from "@/common/product-types";
import DataTable from "@/components/ui/data-table";
import { useMemo } from "react";

type VariantsTableProps = {
  variants: ProductVariant[];
};

const VariantsTable: React.FC<VariantsTableProps> = ({ variants }) => {
  const columns = useMemo(
    () => [
      // {
      //   accessorKey: "color",
      //   header: "Color",
      // },
      {
        accessorKey: "size",
        header: "Size",
      },
      {
        accessorKey: "stockLevel",
        header: "Stocks",
        cell: (info) => {
          const stockLevel = info.getValue() as number;
          return (
            // Conditional rendering
            <div className="flex items-center">
              <div
                className={`h-2 w-2 rounded-full ${
                  stockLevel > 0 ? "bg-green-500" : "bg-red-500"
                } mr-2`}
              ></div>
              {stockLevel}
            </div>
          );
        },
      },
    ],
    []
  );

  const data = useMemo(() => variants, [variants]);

  return <DataTable columns={columns} data={data} />;
};

export default VariantsTable;
