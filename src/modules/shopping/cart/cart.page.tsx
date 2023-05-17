import { Table } from "@/components";

import type { ColumnDefineType } from "@/components/widgets/table/models";
import { CartTotal } from "./cart-total";
import { useQueryGetCart } from "./apis";
import { CartItem, NavigationPath } from "@/models";
import { Link } from "react-router-dom";

const columns: ColumnDefineType<CartItem, keyof CartItem>[] = [
  {
    key: "headImageUrl",
    header: "Product",
    width: 200,
    render: ({ headImageUrl, productId }) => (
      <Link
        to={NavigationPath.PLANTERS_DETAIL.replace(":_id", productId)}
        className="block w-[100px] mx-auto"
      >
        <img className="w-full object-contain mx-auto" src={headImageUrl} />
      </Link>
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
    key: "subTotalPrice",
    header: "Subtotal",
  },
];

export const CartPage = () => {
  const { data } = useQueryGetCart();

  console.log(data);

  return (
    <div className="w-full max-w-screen-lg mx-auto py-32">
      <p className="text-primaryDark font-black text-4xl text-center py-16">
        Shopping Cart
      </p>
      <div className="flex space-x-6">
        <div className="flex-[2_2_0%]">
          <Table<CartItem, keyof CartItem>
            columns={columns}
            data={data?.data?.items || []}
          />
        </div>
        <CartTotal />
      </div>
    </div>
  );
};
