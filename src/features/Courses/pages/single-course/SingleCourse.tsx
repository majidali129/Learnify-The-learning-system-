import ReusableBreadCrumb from "@/components/ReusableBreadCrumb";
import {
  Check,
  CirclePlay,
  Clock3,
  FolderOpen,
  Globe,
  MoveRight,
  OctagonAlert,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
interface CourseType {
  coursePoint: string;
  targetAudience: string;
  requirements: string;
}

const learningPoints: Pick<CourseType, "coursePoint">[] = [
  {
    coursePoint:
      "Master the Python programming language by building 100 unique projects over 100 days.",
  },
  {
    coursePoint:
      "Learn automation, game development, app development, web development, data science, and machine learning using Python.",
  },
  { coursePoint: "Program in Python professionally." },
  {
    coursePoint:
      "Learn popular Python libraries and frameworks including Selenium, Beautiful Soup, Requests, Flask, Pandas, NumPy, Scikit Learn, Plotly, and Matplotlib.",
  },
  {
    coursePoint:
      "Create a portfolio of 100 Python projects to apply for developer jobs.",
  },
  { coursePoint: "Build fully-fledged websites and web apps with Python." },
  { coursePoint: "Use Python for data science and machine learning." },
  { coursePoint: "Build games like Blackjack, Pong, and Snake using Python." },
  { coursePoint: "Build GUIs and desktop applications with Python." },
];

// Array of target audience
const courseFor: Pick<CourseType, "targetAudience">[] = [
  {
    targetAudience:
      "Beginner programmers looking to learn Python from scratch.",
  },
  {
    targetAudience:
      "Students interested in mastering Python programming language.",
  },
  {
    targetAudience:
      "Professionals seeking to enhance their Python skills for career advancement.",
  },
  {
    targetAudience:
      "Individuals interested in building a portfolio of Python projects.",
  },
  {
    targetAudience:
      "Anyone passionate about learning programming and building real-world projects.",
  },
];

// Array of course requirements
const courseRequirements: Pick<CourseType, "requirements">[] = [
  { requirements: "Basic understanding of programming concepts." },
  { requirements: "Access to a computer with internet connection." },
  {
    requirements:
      "Basic knowledge of Python programming language is helpful but not required.",
  },
  { requirements: "Willingness to learn and practice consistently." },
  {
    requirements:
      "No prior experience with Python or programming is necessary.",
  },
];

const SingleCourse = () => {
  return (
    <>
      <section className="bg-dark-300">
        <div className="tw-container">
          <div className="grid grid-cols-12 *:py-1.5">
            <div className="col-span-9 space-y-2.5">
              <ReusableBreadCrumb />
              <article className="py-2 space-y-3.5 text-white-1">
                <h3 className="text-inherit">
                  Complete Website Responsive Design: from Figma to Webflow to
                  Website Design
                </h3>
                <h5 className="text-white-2 leading-5 opacity-90 w-[90%]">
                  A practical programming course for office workers, academics,
                  and administrators who want to improve their productivity.
                </h5>
                <div>
                  <div className="flex items-center gap-1.5">
                    <div className="text-xl flex-between !gap-1 text-warning-500">
                      <span className="py-[1px] px-2.5 text-sm  tracking-wide text-dark-400 font-semibold bg-warning-200 ">
                        Bestseller
                      </span>
                      <span className="font-semibold">{4.6}</span>
                      <div className="flex items-center gap-1 *:w-4 *:h-4 *:fill-warning-500 *:stroke-warning-500">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                      </div>
                    </div>
                    <div className="flex-between">
                      <span className="font-semibold">{"1,227,211"}</span>
                      <div className="">students</div>
                    </div>
                  </div>
                </div>
                <div className="text-[1rem] font-normal">
                  <span>Created by</span>
                  <Link
                    to="#"
                    className="px-1 italic font-semibold underline decoration-brand-300 text-brand-400"
                  >
                    Majid Ali
                  </Link>
                </div>
                <div className="flex items-center gap-2 text-[.8rem]">
                  <div className="flex-between !gap-1.5">
                    <span>
                      <OctagonAlert className="fill-white-1 text-dark-300" />
                    </span>
                    <p>Last Updated {"3/2024"}</p>
                  </div>
                  <div className="flex-between !gap-1.5">
                    <span>
                      <Globe className="rounded-full fill-white-1 text-dark-300" />
                    </span>
                    <p>English</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="tw-container">
          <div className="grid grid-cols-12">
            <div className="col-span-9 space-y-2">
              <article className="p-5 space-y-4 text-white-1 bg-secondary-100 rounded-[2px]">
                <h3>What you'll learn</h3>
                <ul className="grid md:grid-cols-2 gap-x-7 *:leading-5 gap-y-1.5 *:text-[.9rem] *:text-dark-500">
                  {learningPoints.map((ele, ind) => (
                    <li key={ind} className="flex items-start gap-1.5">
                      <span>
                        <Check className="h-[20px] text-brand-900" />
                      </span>
                      <p>{ele.coursePoint}</p>
                    </li>
                  ))}
                </ul>
              </article>
              <article className="py-5 space-y-4 text-white-1">
                <h3>Who this course is for:</h3>
                <ul className="grid md:grid-cols-2 gap-x-7 *:leading-5 gap-y-1.5 *:text-[.9rem] *:text-dark-500">
                  {courseFor.map((ele, ind) => (
                    <li key={ind} className="flex items-start gap-1.5">
                      <span>
                        <MoveRight className="h-[20px] text-brand-800" />
                      </span>
                      <p>{ele.targetAudience}</p>
                    </li>
                  ))}
                </ul>
              </article>
              <article className="py-5 space-y-4 text-white-1">
                <h3>Course requirements</h3>
                <ul className="grid ps-2 gap-x-7 *:leading-5 gap-y-1.5 *:text-[.9rem] *:text-dark-500">
                  {courseRequirements.map((ele, ind) => (
                    <li key={ind} className="flex items-start gap-2">
                      <div>
                        <span className="rounded-full mb-[1px] bg-dark-300 inline-block w-[6px] h-[6px]"></span>
                      </div>
                      <p>{ele.requirements}</p>
                    </li>
                  ))}
                </ul>
              </article>
              <article className="py-5 space-y-4 ">
                <div className="flex-between">
                  <h3>Curriculum</h3>
                  <div className="my-4 text-sm font-medium text-gray-500 flex-between">
                    <div className="flex-between !gap-1">
                      <FolderOpen className="w-4 h-4 stroke-brand-500" />
                      <span>
                        <span>{10}</span> Sections
                      </span>
                    </div>
                    <div className="flex-between !gap-1">
                    <CirclePlay  className="w-4 h-4 stroke-brand-500" />
                      <span>
                        <span>{202}</span> lectures
                      </span>
                    </div>
                    <div className="flex-between !gap-1">
                      <Clock3 className="w-4 h-4 stroke-brand-500" />
                      <span>19h 37m</span>
                    </div>

                  </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-normal">
                          Getting Started
                        </h4>
                        <div className="flex items-center space-x-2">
                          <ChevronUpIcon classname="w-5 h-5 text-gray-500" />
                          <span className="text-sm font-medium text-gray-500">
                            4 lectures
                          </span>
                          <span className="text-sm font-medium text-gray-500">
                            51m
                          </span>
                        </div>
                      </div>
                      <ul className="mt-2 space-y-2">
                        <li className="flex items-center justify-between">
                          <span>What's in Webflow?</span>
                          <span className="text-sm text-gray-500">07:31</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>Sign up in Webflow</span>
                          <span className="text-sm text-gray-500">07:31</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>Webflow Terms & Conditions</span>
                          <span className="text-sm text-gray-500">5.3 MB</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>Teaser of Webflow</span>
                          <span className="text-sm text-gray-500">07:31</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>Practice Project</span>
                          <span className="text-sm text-gray-500">5.3 MB</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-normal">
                          Secret of Good Design
                        </h4>
                        <div className="flex items-center space-x-2">
                          <ChevronDownIcon classname="w-5 h-5 text-gray-500" />
                          <span className="text-sm font-medium text-gray-500">
                            52 lectures
                          </span>
                          <span className="text-sm font-medium text-gray-500">
                            5h 49m
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-normal">
                          Practice Design Like an Artist
                        </h4>
                        <div className="flex items-center space-x-2">
                          <ChevronDownIcon classname="w-5 h-5 text-gray-500" />
                          <span className="text-sm font-medium text-gray-500">
                            43 lectures
                          </span>
                          <span className="text-sm font-medium text-gray-500">
                            53m
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-normal">
                          Web Development (webflow)
                        </h4>
                        <div className="flex items-center space-x-2">
                          <ChevronDownIcon classname="w-5 h-5 text-gray-500" />
                          <span className="text-sm font-medium text-gray-500">
                            137 lectures
                          </span>
                          <span className="text-sm font-medium text-gray-500">
                            10h 6m
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-normal">
                          Secrets of Making Money Freelancing
                        </h4>
                        <div className="flex items-center space-x-2">
                          <ChevronDownIcon classname="w-5 h-5 text-gray-500" />
                          <span className="text-sm font-medium text-gray-500">
                            21 lectures
                          </span>
                          <span className="text-sm font-medium text-gray-500">
                            38m
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-normal">Advanced</h4>
                        <div className="flex-between">
                          <ChevronDownIcon classname="w-5 h-5 text-gray-500" />
                          <span className="text" >
                            39 lectures
                          </span>
                          <span className="text">
                            91m
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleCourse;

function ChevronDownIcon({ classname }: { classname: string }) {
  return (
    <svg
      className={classname}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ChevronUpIcon({ classname }: { classname: string }) {
  return (
    <svg
      className={classname}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}
