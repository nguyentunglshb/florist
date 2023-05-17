import { Plant } from ".";

export type CartItem = Pick<Plant, "headImageUrl" | "name"> & {
  price: Plant["currentPrice"];
  productId: Plant["_id"];
  quantity: number;
  subTotalPrice: Plant["currentPrice"];
};

export type Cart = {
  items: CartItem[];
  totalPrice: number;
  _id: string;
};
