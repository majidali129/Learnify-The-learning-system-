import { FaStar } from "react-icons/fa"
import courseImg1 from "@/assets/images/best-courses/1.png";
import { ReactNode } from "react";

interface InstructorProp{
    name:string;
    field: string;
    students: number;
    rating: number;
    children?: ReactNode
}

const InstructorCard = ({children, name, field, students, rating}: InstructorProp) => {
  return (
    <div className="box-shadow">
    <figure>
      <img
        src={courseImg1}
        alt="Instructor Photo"
        className="object-cover w-full h-full"
      />
    </figure>
    <div className="border border-t-0 border-slate-200 bg-white-1">
    <div className="py-1.5 text-center border-b instructor-info border-slate-200">
      <h5>{name}</h5>
      <h6 className="text !mt-0">{field}</h6>
    </div>
    <div className="px-3 py-2 space-y-2 ">
      <div className="flex-between">
        <div className="flex-between">
          <span>
            <FaStar className="fill-warning-500" />
          </span>
          <span>{rating}</span>
        </div>
        <div className="space-x-1.5">
          <span className="font-semibold">{students}</span>
          <span className="text">students</span>
        </div>
      </div>
      <div className="flex-center">
      {children}
      </div>
    </div>
    </div>
  </div>
  )
}

export default InstructorCard