import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CourseCategory from "./features/Courses/pages/category/CourseCategory";
import AppLayout from "./components/AppLayout";
import Courses from "./features/Courses/pages/courses/Courses";
import SingleCourse from "./features/Courses/pages/single-course/SingleCourse";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/category" element={<CourseCategory />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course-details" element={<SingleCourse />} />
        </Route>
      </Routes>
    </>
  );
}
