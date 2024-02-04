const OrderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex h-14 items-center border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
        <h1 className="text-lg font-semibold">Order Managment</h1>
      </header>
      <main className="flex-1 p-4 md:p-6">{children}</main>
    </div>
    );
};

export default OrderLayout;