import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FiMenu } from "react-icons/fi";
import MenuList from "./MenuList";
import Logo from "./Logo";
const Header = () => {
  return (
    <header className="px-4 py-3 select-none md:py-2 text-white-2 bg-dark-400 flex-between lg:px-6">
        <MenuList className="max-md:hidden" />
        <span className="md:hidden *:w-7 *:h-7 *:text-[#fff] *:shadow-none">
          <FiMenu />
        </span>
      <Logo className="md:hidden" />
      <div className="max-md:hidden flex-between">
        <Select>
          <SelectTrigger className="!outline-none select-none !ring-0 border !border-dark-100 rounded">
            <SelectValue placeholder="Select currency" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {/* <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem> */}
              <SelectItem value="pkr">PKR</SelectItem>
              <SelectItem value="inr">INR</SelectItem>
              <SelectItem value="usd">USD</SelectItem>
              <SelectItem value="eur">EUR</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className=" !outline-none select-none !ring-0 border border-dark-100 rounded">
            <SelectValue placeholder="Select Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {/* <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem> */}
              <SelectItem value="pkr">English</SelectItem>
              <SelectItem value="inr">Urdu</SelectItem>
              <SelectItem value="usd">Hindi</SelectItem>
              <SelectItem value="eur">Spanish</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </header>
  );
};

export default Header;
