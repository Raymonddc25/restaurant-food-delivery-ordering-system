import React from "react";

function OrdersPage() {
  return (
    <div className="p-4 lg:px-20 xl:40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base odd:bg-red-100">
            <td className="hidden md:block py-6 px-1">123456789</td>
            <td className="py-6 px-1">23.01.2024</td>
            <td className="py-6 px-1">89.80</td>
            <td className="hidden md:block py-6 px-1">
              Big Burger Menu (2), Veggie pizza (2), Coca Cola 1L (2)
            </td>
            <td className="py-6 px-1">On the Way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">123456789</td>
            <td className="py-6 px-1">23.01.2024</td>
            <td className="py-6 px-1">89.80</td>
            <td className="hidden md:block py-6 px-1">
              Big Burger Menu (2), Veggie pizza (2), Coca Cola 1L (2)
            </td>
            <td className="py-6 px-1">Delivered</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">123456789</td>
            <td className="py-6 px-1">23.01.2024</td>
            <td className="py-6 px-1">89.80</td>
            <td className="hidden md:block py-6 px-1">
              Big Burger Menu (2), Veggie pizza (2), Coca Cola 1L (2)
            </td>
            <td className="py-6 px-1">Delivered</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrdersPage;
