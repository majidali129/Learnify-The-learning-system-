import { Button } from "@/components/ui/button";
import { GoSearch } from "react-icons/go";

import logo from "@/assets/images/logo-dark.png";
import { Input } from "./ui/input";

const Navbar = () => {
  return (
    <nav className="px-4 py-2.5 border-b max-md:hidden flex-between bg-white-1 lg:px-6 border-slate-300">
    <div className="flex-between">
      <figure>
        <img src={logo} className="lg:w-36 md:w-24" alt="Learnify Logo" />
      </figure>
      <div className="flex max-w-5xl lg:w-[400px] items-center bg-transparent border rounded-full border-slate-300 px-3">
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