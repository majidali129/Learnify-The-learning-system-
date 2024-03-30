import Card from "@/components/Card";

import courseImg6 from "@/assets/images/best-courses/6.png";
import courseImg7 from "@/assets/images/best-courses/7.png";
import courseImg8 from "@/assets/images/best-courses/8.png";
import courseImg9 from "@/assets/images/best-courses/9.png";

const CourseList = () => {
  return (
    <div className="grid w-full sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-4 gap-y-4 md:gap-y-5  lg:gap-x-7 xl:gap-x-5 lg:gap-y-7 *:rounded-sm">
      <Card
        students={100023}
        image={courseImg6}
        rating={4.2}
        category="Development"
        price={321}
        title="Front End Development "
      />
      <Card
        students={100023}
        image={courseImg7}
        rating={4.2}
        category="Development"
        price={321}
        title="Learn Game Development with C#"
      />
      <Card
        students={100023}
        image={courseImg8}
        rating={4.2}
        category="Development"
        price={321}
        title="Back End Development In JavaScript"
      />
      <Card
        students={100023}
        image={courseImg8}
        rating={4.2}
        category="Development"
        price={321}
        title="Back End Development In JavaScript"
      />
      <Card
        students={100023}
        image={courseImg9}
        rating={4.2}
        category="Development"
        price={321}
        title="Let's Build Communication "
      />
    </div>
  );
};

export default CourseList;
