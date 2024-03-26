import { ReactNode } from "react";

const BrowseCategoryCard = ({
  categoryName,
  noOfCourses,
  icon,
}: {
  categoryName: string;
  noOfCourses: string;
  icon: string | ReactNode;
}) => {
  return (
      <div className="flex items-center px-3 md:px-4 lg:px-5 gap-x-3 lg:gap-x-4 py-1 bg-brand-100 w-full md:h-[70px] lg:h-[104px]">
        <span className="w-8 h-8 md:w-12 lg:w-14 lg:h-14 md:h-12 bg-white-main flex-center">
          {icon}
        </span>
        <div>
          <h5>{categoryName}</h5>
          <span className="text">{noOfCourses}</span>
        </div>
      </div>
  );
};

export default BrowseCategoryCard;
