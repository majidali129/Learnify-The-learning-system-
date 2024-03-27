import { Button } from "@/components/ui/button";
import { GoSearch } from "react-icons/go";

import logo from "@/assets/images/logo.png";
import { Input } from "./ui/input";

const Navbar = () => {
  return (
    <nav className="py-1.5 flex-between bg-white-1 lg:px-6 border-b border-slate-300">
    <div className="flex-between">
      <figure>
        <img src={logo} className="lg:w-36 md:w-24" alt="Learnify Logo" />
      </figure>
      <div className="flex max-w-4xl lg:w-[300px] items-center bg-transparent border rounded-sm border-slate-300 focus-within:ring-1 focus-within:ring-brand-500 transition-all duration-100 focus-within:ring-offset-2 px-1.5">
        <span><GoSearch /></span>
        <Input type="email" placeholder="What do you want to learn" />
      </div>
    </div>
    <div className="actions">
      <div></div>
      <div className="flex-between !gap-3 *:font-semibold">
        <Button variant="secondary" className="px-5">
          Create Account
        </Button>
        <Button>Sign In</Button>
      </div>
    </div>
  </nav>
  )};

export default Navbar