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
import courseImg6 from "@/assets/images/best-courses/6.png";

import Card from "@/components/Card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const SUGGESTIONS: string[] = [
  "user interface",
  "user experience",
  "web design",
  "interface",
  "app",
];
const Courses = () => {
  const [filterActive, setFilterActive] = useState<boolean>(true);
  return (
    <section className="bg-white-1">
      <div className="tw-container">
        <div className="flex flex-col user-actions max-md:space-y-2 md:flex-row md:items-center md:justify-between ">
          <div className="flex-between">
            <Button
              variant="outline"
              onClick={() => setFilterActive(!filterActive)}
              className="px-10 border h-[42px] border-slate-300 hidden md:flex items-center justify-center"
            >
              Filter
            </Button>
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
        <div className="py-2.5 flex-between">
          <div className="flex-between">
            <span>Suggestions: </span>
            <div className="flex flex-row items-center gap-2">
              {SUGGESTIONS.map((sug) => (
                <span key={sug} className=" text-secondary-500">
                  {sug}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div>
              <span className="font-semibold">{"2,323,123"} </span>
              <span className="text">results find for “ui/ux design”</span>
            </div>
          </div>
        </div>
        <div className={`grid grid-cols-12 py-6 gap-x-4`}>
          <aside
            className={`border col-span-3 border-slate-300 ${
              filterActive ? "block" : "hidden"
            }`}
          ></aside>
          <div
            className={`grid w-full ${
              filterActive ? "col-span-9" : "col-span-12"
            } sm:grid-cols-2 lg:grid-cols-3 xl:${
              filterActive ? "grid-cols-3" : "grid-cols-4"
            } sm:gap-x-4 gap-y-4 md:gap-y-5  lg:gap-x-7 xl:gap-x-5 lg:gap-y-7 *:rounded-sm`}
          >
            <Link to={`#`}>
              <Card
                students={100023}
                image={courseImg6}
                rating={4.2}
                category="Development"
                price={321}
                title="Front End Development "
              />
            </Link>
          </div>
        </div>
        <div className="pb-10">
          <GlobalPagination />
        </div>
      </div>
    </section>
  );
};

export default Courses;
