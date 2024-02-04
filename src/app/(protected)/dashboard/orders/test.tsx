// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/RGjnPPJlquq
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   SelectValue,
//   SelectTrigger,
//   SelectItem,
//   SelectContent,
//   Select,
// } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import {
//   TableHead,
//   TableRow,
//   TableHeader,
//   TableCell,
//   TableBody,
//   Table,
// } from "@/components/ui/table";

// export default function Component() {
//   return (
//     <div className="flex flex-col h-screen">
//       <header className="flex h-14 items-center border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
//         <h1 className="text-lg font-semibold">Admin Dashboard</h1>
//       </header>
//       <main className="flex-1 p-4 md:p-6">
//         <div className="space-y-4">
//           <div className="space-y-2">
//             <h2 className="text-lg font-semibold">Order Details</h2>
//             <p className="text-sm text-gray-500 dark:text-gray-400">
//               Please fill out the form below to place a new order.
//             </p>
//           </div>
//           <form className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="name">Name</Label>
//               <Input id="name" placeholder="Enter customer's name" />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="address">Address</Label>
//               <Input id="address" placeholder="Enter customer's address" />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="phone">Phone Number</Label>
//               <Input id="phone" placeholder="Enter customer's phone number" />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="notes">Notes</Label>
//               <Textarea
//                 className="min-h-[100px]"
//                 id="notes"
//                 placeholder="Enter any additional notes"
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="discount">Discount</Label>
//               <Input id="discount" placeholder="Enter discount code" />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="items">Items</Label>
//               <div className="border rounded-lg p-4">
//                 <div className="flex items-center gap-4">
//                   <Select>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select item" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="item1">Item 1</SelectItem>
//                       <SelectItem value="item2">Item 2</SelectItem>
//                       <SelectItem value="item3">Item 3</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <Select>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select size" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="size1">Size 1</SelectItem>
//                       <SelectItem value="size2">Size 2</SelectItem>
//                       <SelectItem value="size3">Size 3</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <Select>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select color" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="color1">Color 1</SelectItem>
//                       <SelectItem value="color2">Color 2</SelectItem>
//                       <SelectItem value="color3">Color 3</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <Input placeholder="Quantity" type="number" />
//                   <Button variant="outline">Add</Button>
//                 </div>
//                 <div className="mt-4">
//                   <Table>
//                     <TableHeader>
//                       <TableRow>
//                         <TableHead>Item</TableHead>
//                         <TableHead>Size</TableHead>
//                         <TableHead>Color</TableHead>
//                         <TableHead>Quantity</TableHead>
//                         <TableHead>Price</TableHead>
//                         <TableHead />
//                       </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                       <TableRow>
//                         <TableCell>Item 1</TableCell>
//                         <TableCell>Size 1</TableCell>
//                         <TableCell>Color 1</TableCell>
//                         <TableCell>2</TableCell>
//                         <TableCell>$20.00</TableCell>
//                         <TableCell>
//                           <Button size="icon" variant="outline">
//                             <TrashIcon className="h-4 w-4" />
//                             <span className="sr-only">Delete</span>
//                           </Button>
//                         </TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell>Item 2</TableCell>
//                         <TableCell>Size 2</TableCell>
//                         <TableCell>Color 2</TableCell>
//                         <TableCell>3</TableCell>
//                         <TableCell>$30.00</TableCell>
//                         <TableCell>
//                           <Button size="icon" variant="outline">
//                             <TrashIcon className="h-4 w-4" />
//                             <span className="sr-only">Delete</span>
//                           </Button>
//                         </TableCell>
//                       </TableRow>
//                     </TableBody>
//                   </Table>
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-end">
//               <Button type="submit">Place Order</Button>
//             </div>
//           </form>
//         </div>
//       </main>
//     </div>
//   );
// }

// function TrashIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M3 6h18" />
//       <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
//       <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
//     </svg>
//   );
// }
