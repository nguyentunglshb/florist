import { Table } from "@/components";

import type { ColumnDefineType } from "@/components/widgets/table/models";
import { CartTotal } from "./cart-total";

type Data = {
  product: string;
  price: string;
  quantity: number;
  subtotal: string;
};

const columns: ColumnDefineType<Data, keyof Data>[] = [
  {
    key: "product",
    header: "Product",
    width: 200,
    render: ({ product }) => (
      <div className="w-[100px] mx-auto">
        <img className="w-full object-contain mx-auto" src={product} />
      </div>
    ),
  },
  {
    key: "price",
    header: "Price",
  },
  {
    key: "quantity",
    header: "Quantity",
  },
  {
    key: "subtotal",
    header: "Subtotal",
  },
];

const data: Data[] = [
  {
    product:
      "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2020/12/10-6-600x713.jpg",
    price: "$50.00",
    quantity: 1,
    subtotal: "$50.00",
  },
  {
    product:
      "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2020/12/15-8-600x713.jpg",
    price: "$50.00",
    quantity: 1,
    subtotal: "$50.00",
  },
];

export const CartPage = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto py-32">
      <p className="text-primaryDark font-black text-4xl text-center py-16">
        Shopping Cart
      </p>
      <div className="flex space-x-6">
        <div className="flex-[2_2_0%]">
          <Table<Data, keyof Data> columns={columns} data={data} />
        </div>
        <CartTotal />
      </div>
    </div>
  );
};
