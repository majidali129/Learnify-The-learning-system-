import { FaStar } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

interface CardProps {
    image: string;
    title: string;
    category: string;
    rating:number;
    students: number;
    price: number
}

const Card = ({image, title, category, rating, students, price}:CardProps) => {
  return (
    <div className=" max-w-[410px] box-shadow bg-white-1  !rounded-[5px] flex flex-col gap-y-2 ">
      <figure className="h-[210px] rounded-md relative">
        <div className="absolute z-40 flex items-center justify-center w-12 h-12 p-3 rounded-full -bottom-2 right-2 price bg-brand-800 text-white-1">
            {`${price}$`}
        </div>
        <img
          src={image}
          alt="Popular course image"
          className="object-cover w-full h-full aspect-video [clip-path:polygon(0_0,100%_0,100%_90%,0%_100%);]"
        />
      </figure>
      <div className="px-2 py-2 space-y-2 lg:py-3 lg:px-3">
        <Badge variant='outline'>{category}</Badge>
        <h5>{title}</h5>
        <p className="flex-between">
          <div className=" flex-between">
            <span>
              {<FaStar className="w-5 h-5 fill-brand-400 text-brand-500" />}
            </span>
            <span className="text-[1.05rem]">{rating}</span>
          </div>
          <div className="space-x-1.5">
            <span className="font-semibold">{students}</span>
            <span className="text">students</span>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Card;
