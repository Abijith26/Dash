import React from "react";

const productsData = [
  {
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: 82,
    amount: "$6,518.18",
  },
  {
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    quantity: 37,
    amount: "$4,754.50",
  },
  {
    name: "Half Sleeve Shirt",
    price: "$39.99",
    quantity: 64,
    amount: "$2,559.36",
  },
  {
    name: "Lightweight Jacket",
    price: "$20.00",
    quantity: 184,
    amount: "$3,680.00",
  },
  {
    name: "Marco Shoes",
    price: "$79.49",
    quantity: 64,
    amount: "$1,965.81",
  },
];

function TableData() {
  return (
    <div className="min-h-[336px] bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Header */}
          <div className="px-4 md:px-6 py-4 md:py-5 border-b border-gray-100">
            {/* <h2 className="text-lg md:text-xl font-semibold text-gray-900"> */}
            <h2 className="text-[14px] leading-[20px] font-[600] text-[#1C1C1C]">
              Top Selling Products
            </h2>
          </div>

          {/* Desktop/Tablet Table */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-[11px] px-4 md:px-6  text-[12px] leading-[18px] font-medium text-[#1C1C1C66]  tracking-wider">
                    Name
                  </th>
                  <th className="text-left py-[11px] px-4 md:px-6 text-[12px] leading-[18px] font-medium text-[#1C1C1C66]  tracking-wider">
                    Price
                  </th>
                  <th className="text-left py-[11px] px-4 md:px-6 text-[12px] leading-[18px] font-medium text-[#1C1C1C66]  tracking-wider">
                    Quantity
                  </th>
                  <th className="text-left py-[11px] px-4 md:px-6 text-[12px] leading-[18px] font-medium text-[#1C1C1C66]  tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {productsData.map((product, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-25 transition-colors duration-150"
                  >
                    <td className="py-4 px-4 md:px-6">
                      <div className="text-sm font-medium text-gray-900">
                        {product.name}
                      </div>
                    </td>
                    <td className="py-4 px-4 md:px-6">
                      <div className="text-sm text-gray-700">
                        {product.price}
                      </div>
                    </td>
                    <td className="py-4 px-4 md:px-6">
                      <div className="text-sm text-gray-700">
                        {product.quantity}
                      </div>
                    </td>
                    <td className="py-4 px-4 md:px-6">
                      <div className="text-sm font-medium text-gray-900">
                        {product.amount}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="sm:hidden">
            <div className="divide-y divide-gray-100">
              {productsData.map((product, index) => (
                <div key={index} className="p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm font-medium text-gray-900 pr-2">
                      {product.name}
                    </h3>
                    <span className="text-sm font-medium text-gray-900 whitespace-nowrap">
                      {product.amount}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Price: {product.price}</span>
                    <span>Qty: {product.quantity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableData;
