import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import bannerImgDesktop from "@/assets/images/hero-desktop.png";
import bannerImgMoile from "@/assets/images/hero-mobile.jpg";
import promotion1 from "@/assets/images/promotion-1.png";
import promotion2 from "@/assets/images/promotion-2.png";
import courseImg1 from "@/assets/images/best-courses/1.png";
import courseImg2 from "@/assets/images/best-courses/2.png";
import courseImg3 from "@/assets/images/best-courses/3.png";
import courseImg4 from "@/assets/images/best-courses/4.png";
import courseImg6 from "@/assets/images/best-courses/6.png";
import courseImg7 from "@/assets/images/best-courses/7.png";
import courseImg8 from "@/assets/images/best-courses/8.png";
import courseImg9 from "@/assets/images/best-courses/9.png";
import google from "@/assets/images/companies/google.png";
import netflex from "@/assets/images/companies/netflix.png";
import youtube from "@/assets/images/companies/youtube.png";
import lenove from "@/assets/images/companies/lenovo.png";
import slack from "@/assets/images/companies/slack.png";
import verison from "@/assets/images/companies/verison.png";
import lexmark from "@/assets/images/companies/lexmark.png";
import microsoft from "@/assets/images/companies/microsoft.png";
import BrowseCategoryCard from "@/components/BrowseCategoryCard";
import Card from "@/components/Card";
import { MoveRight } from "lucide-react";
import InstructorCard from "@/components/InstructorCard";
import { INSTRUCTORS } from "@/constants";
import Footer from "@/components/Footer";
import { GoSearch } from "react-icons/go";
import { Input } from "@/components/ui/input";
import MobileNav from "@/components/MobileNav";
const HomePage = () => {
  return (
    <>
      <Header />
      <Navbar />
      {/* Hero section */}
      <section className="w-full flex flex-col md:flex-row items-center !gap-0 bg-[linear-gradient(3deg,rgba(203,207,222,0.020975577731092487)_0%,#fff_100%)] ">
        <div className="order-2 px-3 lg:w-10/12 max-sm:py-3 md:order-1">
          <div className="mx-auto space-y-2 md:space-y-4 md:w-5/6 lg:w-4/6">
            <h1>Learn with expert anytime anywhere</h1>
            <p className="!mt-3 font-medium text">
              Our mision is to help people to find the best course online and
              learn with expert anytime, anywhere.
            </p>
            <Button size="lg" className="hidden font-semibold md:block">
              Create Account
            </Button>
          </div>
        </div>
        <div className="self-start order-1 md:order-2">
          <img
            src={bannerImgDesktop}
            alt="Hero section image "
            className="-mt-0.5 aspect-video hidden md:block"
          />
          <img
            src={bannerImgMoile}
            alt="Hero section image "
            className="-mt-0.5 aspect-video md:hidden object-cover"
          />
        </div>
      </section>

      <section className="!py-3  tw-container md:hidden">
        <div className="flex max-w-4xl ps-0 pe-2 my-2 lg:w-[300px] items-center bg-transparent border border-dark-300">
          <Input
            type="email"
            className="py-2.5"
            placeholder="What do you want to learn"
          />
          <span className="text-[20px]">
            <GoSearch />
          </span>
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
            <div className="course-grid">
              <Card
                students={100023}
                image={courseImg1}
                rating={4.2}
                category="Development"
                price={321}
                title="Front End Development "
              />
              <Card
                students={100023}
                image={courseImg1}
                rating={4.2}
                category="Development"
                price={321}
                title="Front End Development "
              />
              <Card
                students={100023}
                image={courseImg2}
                rating={4.2}
                category="Development"
                price={321}
                title="Learn Game Development with C#"
              />
              <Card
                students={100023}
                image={courseImg3}
                rating={4.2}
                category="Development"
                price={321}
                title="Back End Development In JavaScript"
              />
              <Card
                students={100023}
                image={courseImg4}
                rating={4.2}
                category="Development"
                price={321}
                title="Let's Build Communication "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recently Added Courses Section */}
      <section className="bg-white-1">
        <div className="tw-container ">
          <div className="flex-col flex-center tw-space-y">
            <h2>Recently Added Courses</h2>
            <div className="course-grid">
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
            <Button variant="secondary" className="font-semibold flex-center">
              {" "}
              <span>Browse All Courses</span>{" "}
              <span>
                <MoveRight />
              </span>
            </Button>
          </div>
        </div>
      </section>
      {/* Promotion Section */}
      <section className="bg-inherit">
        <div className="tw-container ">
          <div className="py-2 flex-center">
            <div className="grid w-full gap-6 card-wrapper sm:grid-cols-2">
              <img src={promotion1} alt="Promotion Banner Image" />
              <img src={promotion2} alt="Promotion Banner Image" />
            </div>
          </div>
        </div>
      </section>

      {/* Top Instructor Section */}
      <section className="bg-white-1">
        <div className="tw-container">
          <div className="flex-col flex-center tw-space-y">
            <h2>Top instructors of the month</h2>
            <div className="grid w-full card-wrapper max-sm:gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 xl:gap-x-6 gap-y-4 md:gap-4 lg:gap-x-7 lg:gap-y-7 *:rounded-sm">
              {INSTRUCTORS.slice(5).map((ins) => (
                <InstructorCard
                  key={ins.id}
                  name={ins.name}
                  field={ins.field}
                  students={ins.noOfStudents}
                  rating={ins.rating}
                />
              ))}
            </div>
            <div className="flex-between">
              <p className="text">
                Thousands of students waiting for a instructor. Start teaching &
                earning now!.
              </p>
              <Button variant="link">
                <span>Become Instructor</span> <MoveRight />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <section className="bg-white-1">
        <div className="tw-container">
          <div className="sm:grid sm:grid-cols-12 md:px-0 lg:px-14 gap-x-10 max-sm:space-y-4">
            <div className="lg:col-span-3 md:col-span-4 max-sm:text-center">
              <h2 className="md:leading-6 lg:leading-7">
                6.3k trusted companies
              </h2>
              <p className="text">
                Uncover the pillars of the education sector, each representing a
                unique approach to learning and empowerment.
              </p>
            </div>
            <div className="grid md:col-span-8 lg:col-span-9 grid-cols-2 gap-4  lg:grid-cols-4 md:gap-5 lg:gap-4  *:flex *:items-center *:justify-center *:bg-[#fff]  *:tw-shadow-2 *:h-[70px] *:md:h-[78px] *:max-sm:min-h-[70px] *:max-h-[90px] *:shadow-[0_0px_14px_-1px_#acaaaa5a] *:rounded">
              <div>
                <img src={netflex} alt="netflex logo" />
              </div>
              <div>
                <img src={youtube} alt="youtube logo" />
              </div>
              <div>
                <img src={google} alt="google logo" />
              </div>
              <div>
                <img src={lenove} alt="lenove logo" />
              </div>
              <div>
                <img src={slack} alt="slack logo" />
              </div>
              <div>
                <img src={verison} alt="verison logo" />
              </div>
              <div>
                <img src={lexmark} alt="lexmark logo" />
              </div>
              <div>
                <img src={microsoft} alt="microsoft logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />

      <MobileNav />
    </>
  );
};

export default HomePage;
