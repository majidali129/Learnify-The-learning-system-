import InstructorsList from "@/features/Instructors/components/InstructorsList";
import CourseList from "../../components/CourseList";
import CategoryToolList from "./CategoryToolList";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Search from "@/components/Search";
import GlobalPagination from "@/components/GlobalPagination";

const CourseCategory = () => {
  return (
    <>
      <section className="pt-4 bg-white-1">
        <div className="tw-container">
          <div className="flex-col flex-center tw-space-y">
            <h2 className="text-center">
              Best selling courses in web development
            </h2>
           <CourseList />
          </div>
          <div className="flex flex-col tw-space-y py-7">
            <CategoryToolList />
            <div className=" max-md:space-y-2 md:flex md:items-start gap-x-7">
              <span className="text-nowrap">Pupular Keywords:</span>
              <ul className="flex items-center flex-wrap justify-start gap-y-2.5 gap-x-2 *:py-1 *:px-2.5 *:bg-secondary-100">
                <span>HTML</span>
                <span>Web Development</span>
                <span>Responsive Developments</span>
                <span className="!bg-brand-500 text-white-1">Developments</span>
                <span>Programing</span>
                <span>Website</span>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="tw-container">
          {/* Top Instructor Section */}
          <section>
            <div className="flex-col flex-center tw-space-y">
              <h2>Top instructors in Web Development</h2>
              <InstructorsList />
            </div>
          </section>
        </div>
      </section>
      <section className="bg-white-1">
        <div className="tw-container">
          <div className="flex flex-col user-actions max-md:space-y-2 md:flex-row md:items-center md:justify-between ">
            <div className="flex-between">
              {/* <div className="h-10 border border-slate-300 filters">Filter</div> */}
              <Search
                placeholder="Search course..."
                name="findCourse"
                type="text"
              />
            </div>
            <div className="flex-between">
              <span className="text-nowrap">Sort By:</span>{" "}
              <Select>
                <SelectTrigger className=" !outline-none select-none !ring-0 h-10 border border-slate-300 rounded-sm">
                  <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="rating">Rating</SelectItem>
                    <SelectItem value="instructor">Instructor</SelectItem>
                    <SelectItem value="price">Price</SelectItem>
                    <SelectItem value="trending">Trending</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="py-10">
            <CourseList />
          </div>
        </div>
        <div className="pb-10">
        <GlobalPagination />
        </div>
      </section>
    </>
  );
};

export default CourseCategory;
