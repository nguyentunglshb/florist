import { FlowerCard, FlowerCardProps } from "@/components/elements/flower-card";
import { useQueryGetMostView } from "./apis";

export const Offer = () => {
  const { data } = useQueryGetMostView();
  return (
    <div className="w-full max-w-screen-lg mx-auto pb-16">
      <p className="text-primaryDark text-4xl font-black capitalize text-center pb-9 tracking-wider">
        What we offer to you
      </p>
      <div className="w-full grid grid-cols-4 gap-6">
        {data &&
          data.data.length &&
          data.data.map(
            ({ headImageUrl, name, originPrice, currentPrice, _id }) => {
              const flowerProps: FlowerCardProps = {
                headImageUrl,
                name,
                originPrice,
                currentPrice,
                _id,
              };
              return <FlowerCard {...flowerProps} key={_id} />;
            }
          )}
      </div>
    </div>
  );
};
