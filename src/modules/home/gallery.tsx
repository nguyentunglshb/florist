import { gallery1, gallery2, gallery3, gallery4, gallery5 } from "@/assets";

export const Gallery = () => {
  return (
    <div className="w-full py-14">
      <p className="text-primaryDark tracking-wider capitalize font-black text-4xl text-center pb-9">
        Our Gallery View
      </p>
      <div className="w-full flex space-x-2">
        <img src={gallery1} className="w-1/3" />
        <div className="grid grid-cols-2 w-2/3 gap-2">
          <img src={gallery2} />
          <img src={gallery3} />
          <img src={gallery4} />
          <img src={gallery5} />
        </div>
      </div>
    </div>
  );
};
