export type Plant = {
  boughts: number;
  content: string;
  currency: "USD" | "VND";
  currentPrice: number;
  originPrice: number;
  description: string;
  headImageUrl: string;
  imageUrls: string[];
  name: string;
  status: "active" | "inactive";
  tags: string[];
  views: number;
  _id: string;
};
