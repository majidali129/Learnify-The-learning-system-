import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const Header = () => {
  return (
    <header className="py-1.5 text-white-2 bg-dark-400 flex-between lg:px-6">
      <ul className="!gap-5 flex-between hover:*:text-brand-500 *:transition">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Courses</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Become an Instructor</a>
        </li>
      </ul>
      <div className="flex-between">
        <Select>
          <SelectTrigger className="!outline-none select-none !ring-0 border !border-dark-100 rounded">
            <SelectValue placeholder="Select currency" />
          </SelectTrigger>
          <SelectContent >
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
          <SelectContent >
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
