import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import bannerImg from "@/assets/images/hero.png";
import courseImg1 from "@/assets/images/best-courses/1.png";
import courseImg2 from "@/assets/images/best-courses/2.png";
import courseImg3 from "@/assets/images/best-courses/3.png";
import courseImg4 from "@/assets/images/best-courses/4.png";
import courseImg6 from "@/assets/images/best-courses/6.png";
import courseImg7 from "@/assets/images/best-courses/7.png";
import courseImg8 from "@/assets/images/best-courses/8.png";
import courseImg9 from "@/assets/images/best-courses/9.png";
import BrowseCategoryCard from "@/components/BrowseCategoryCard";
import Card from "@/components/Card";
const HomePage = () => {
  return (
    <>
      <Header />
      <Navbar />
      {/* Hero section */}
      <section className=" w-full flex flex-col md:flex-row items-center !gap-0 bg-[linear-gradient(3deg,rgba(203,207,222,0.020975577731092487)_0%,#fff_100%)] ">
        <div className="order-2 lg:w-10/12 max-sm:text-center max-sm:py-3 md:order-1">
          <div className="mx-auto space-y-2 md:space-y-3 md:w-5/6 lg:w-4/6">
            <h1>Learn with expert anytime anywhere</h1>
            <p className="text">
              Our mision is to help people to find the best course online and
              learn with expert anytime, anywhere.
            </p>
            <Button size="lg">Create Account</Button>
          </div>
        </div>
        <div className="self-start order-1 md:order-2">
          <img
            src={bannerImg}
            alt="Hero section image "
            className="-mt-0.5 aspect-video"
          />
        </div>
      </section>

      {/* Top Categories Section */}
      <section className="bg-white-main">
        <div className="tw-container ">
          <div className="flex-col flex-center tw-space-y">
            <h2>Browse top category</h2>
            <div className="grid w-full card-wrapper grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-1.5 gap-y-2 md:gap-x-2  lg:gap-x-3.5 *:rounded-sm">
              <BrowseCategoryCard
                categoryName="Label"
                noOfCourses="63,476 Courses"
                icon="⁉️"
              />
              <BrowseCategoryCard
                categoryName="Label"
                noOfCourses="63,476 Courses"
                icon="⁉️"
              />
              <BrowseCategoryCard
                categoryName="Label"
                noOfCourses="63,476 Courses"
                icon="⁉️"
              />
              <BrowseCategoryCard
                categoryName="Label"
                noOfCourses="63,476 Courses"
                icon="⁉️"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Top Categories Section */}
      <section className="bg-inherit">
        <div className="tw-container ">
          <div className="flex-col flex-center tw-space-y">
            <h2>Best selling courses</h2>
            <div className="grid w-full card-wrapper sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-4 md:gap-x-2.5 md:gap-y-2.5  lg:gap-x-7 lg:gap-y-7 *:rounded-sm">
              <Card students={100023} image={courseImg1} rating={4.2} category="Development" price={321} title="Front End Development " />
              <Card students={100023} image={courseImg2} rating={4.2} category="Development" price={321} title="Learn Game Development with C#" />
              <Card students={100023} image={courseImg3} rating={4.2} category="Development" price={321} title="Back End Development In JavaScript" />
              <Card students={100023} image={courseImg4} rating={4.2} category="Development" price={321} title="Let's Build Communication " />
            </div>
          </div>
        </div>
      </section>

      {/* Recently Added Courses Section */}
      <section className="bg-white-1">
        <div className="tw-container ">
          <div className="flex-col flex-center tw-space-y">
            <h2>Recently Added Courses</h2>
            <div className="grid w-full card-wrapper sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-4 md:gap-x-2.5 md:gap-y-2.5  lg:gap-x-7 lg:gap-y-7 *:rounded-sm">
              <Card students={100023} image={courseImg6} rating={4.2} category="Development" price={321} title="Front End Development " />
              <Card students={100023} image={courseImg7} rating={4.2} category="Development" price={321} title="Learn Game Development with C#" />
              <Card students={100023} image={courseImg8} rating={4.2} category="Development" price={321} title="Back End Development In JavaScript" />
              <Card students={100023} image={courseImg9} rating={4.2} category="Development" price={321} title="Let's Build Communication " />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
