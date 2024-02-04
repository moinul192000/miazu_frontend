"use client";
import { set, z } from "zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ProductArraySchema } from "@/schemas/product";
import OrderTable from "@/components/order/order-table";
import { ProductSelection } from "./product-selection";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateOrderFormSchema } from "@/schemas/order";

export interface CartItem {
  id: string;
  productName: string;
  size: string;
  sku: string;
  quantity: number;
  price: number;
}

export default function OrderForm({
  products,
}: {
  products: z.infer<typeof ProductArraySchema>;
}) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const [totalAmount, setTotalAmount] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue, // Used for setting values dynamically, such as for controlled custom inputs like ProductSelection
  } = useForm<z.infer<typeof CreateOrderFormSchema>>({
    resolver: zodResolver(CreateOrderFormSchema),
  });

  // Watch delivery and discount inputs for changes
  const deliveryCost = watch("delivery", 0);
  const discount = watch("discount", 0); 

  const handleAddToCart = (cartItem:CartItem) => {
    setCartItems([...cartItems, cartItem]);
    setIsCartEmpty(false);
  };

  const handleRemoveFromCart = (id: string) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    if(newCartItems.length === 0) {
      setIsCartEmpty(true);
    }
    setCartItems(newCartItems);
  }

  const onSubmit = (data:any) => {
    console.log("Form submitted", data);
    if (isCartEmpty) {
      console.error("Cart is empty");
      return;
    }
    const submissionData = { ...data, items: cartItems };
    console.log("Form submitted", submissionData);
    // Process the form submission here
  };

  // Use effect to watch for changes in cartItems, deliveryCost, and discount to recalculate the total amount
  // useEffect(() => {
  //   const subTotal = cartItems.reduce(
  //     (acc, item) => acc + item.price * item.quantity,
  //     0
  //   );
  //   const total = Number(subTotal) + Number(deliveryCost) - Number(discount);
  //   setTotalAmount(total);
  // }, [cartItems, deliveryCost, discount]);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Order Details</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Please fill out the form below to place a new order.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <div className="flex-1 min-w-0 md:basis-1/2 lg:basis-1/4 space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              placeholder="Enter customer's first name"
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
          </div>
          <div className="flex-1 min-w-0 md:basis-1/2 lg:basis-1/4 space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              placeholder="Enter customer's last name"
              {...register("lastName")}
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName.message}</p>
            )}
          </div>
          <div className="flex-1 min-w-0 md:basis-1/2 lg:basis-1/5 space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              placeholder="Enter customer's phone number"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>
          <div className="flex-1 min-w-0 md:basis-1/2 lg:basis-1/4 space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              placeholder="Enter customer's address"
              {...register("address")}
            />
            {errors.address && (
              <p className="text-red-500">{errors.address.message}</p>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="note">Notes</Label>
          <Textarea
            className="min-h-[50px]"
            id="note"
            placeholder="Enter any additional notes"
            {...register("note")}
          />
          {errors.note && <p className="text-red-500">{errors.note.message}</p>}
        </div>
        <div className="space-y-2">
          <Label>Items</Label>
          <div className="border rounded-lg p-4">
            <ProductSelection
              products={products}
              handleAddToCart={handleAddToCart}
            />
            <OrderTable items={cartItems} handleRemove={handleRemoveFromCart} />
          </div>
        </div>
        <div className="flex gap-2 justify-end">
          <div className="space-y-2 max-w-[150px] w-full sm:flex-1">
            <Label htmlFor="delivery">Delivery</Label>
            <Input
              id="delivery"
              placeholder="Enter delivery cost"
              type="number"
              {...register("delivery")}
            />
            {errors.delivery && (
              <p className="text-red-500">{errors.delivery.message}</p>
            )}
          </div>
          <div className="space-y-2 max-w-[150px] w-full sm:flex-1">
            <Label htmlFor="discount">Discount</Label>
            <Input
              id="discount"
              type="number"
              placeholder="Enter discount amount"
              {...register("discount")}
            />
            {errors.discount && (
              <p className="text-red-500">{errors.discount.message}</p>
            )}
          </div>
        </div>
        <div className="flex justify-end">
          <p className="text-lg font-semibold pt-2">
            Total:
            {cartItems.reduce(
              (acc, item) => acc + item.price * item.quantity,
              0
            ) +
              Number(deliveryCost) -
              Number(discount)}
          </p>
        </div>
        <div className="flex justify-end">
          <Button type="submit" disabled={isCartEmpty}>
            Create Order
          </Button>
        </div>
      </form>
    </div>
  );
}


