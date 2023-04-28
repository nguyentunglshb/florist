import {
  IconGrow,
  IconQuanlity,
  IconScissors,
  IconTemperature,
  bgTakecare,
} from "@/assets";

export const TakeCare = () => {
  return (
    <div className="w-full flex py-16">
      <div className="w-1/2">
        <img src={bgTakecare} alt="takecare" />
      </div>
      <div className="w-1/2 grid grid-cols-2">
        {takecareData.map((data, index) => {
          return <TakeCareCard {...data} key={index} />;
        })}
      </div>
    </div>
  );
};

type TakeCareCardProps = {
  Icon: JSX.Element;
  title: string;
  desc: string;
  className: string;
};

const takecareData: TakeCareCardProps[] = [
  {
    Icon: <IconQuanlity />,
    title: "Quality Product",
    desc: "Our flowers are of the highest quality, carefully selected and sourced from reputable",
    className: "bg-[#FCFCFC]",
  },
  {
    Icon: <IconGrow />,
    title: "Always Fresh",
    desc: "Our flowers are always fresh, handpicked and delivered promptly for maximum longevity and enjoyment.",
    className: "bg-[#F8F8F8]",
  },
  {
    Icon: <IconTemperature />,
    title: "Work Smart",
    desc: "We work smart, using innovative techniques and technology to streamline our processes",
    className: "bg-[#F8F8F8]",
  },
  {
    Icon: <IconScissors />,
    title: "Excelent Service",
    desc: "We pride ourselves on providing excellent service, going above and beyond to meet our customers' needs",
    className: "bg-[#FCFCFC]",
  },
];

const TakeCareCard = (props: TakeCareCardProps) => {
  const { Icon, title, desc, className } = props;

  return (
    <div className={`flex flex-col px-[25%] pt-[16.6777%] ${className}`}>
      {Icon}
      <p className="text-primaryDark font-black text-xl pt-8 pb-3">{title}</p>
      <p className="text-defaultText opacity-80 font-medium leading-[150%]">
        {desc}
      </p>
    </div>
  );
};
