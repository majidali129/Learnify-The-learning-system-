import { GoSearch } from "react-icons/go"
import { Input } from "./ui/input"

const Search = ({placeholder, type, name}: {placeholder:string, type: string, name:string}) => {
  return (
    <div className="flex w-full lg:max-w-5xl lg:w-[400px] items-center bg-transparent border border-slate-300 px-2.5">
    <span>
      <GoSearch />
    </span>
    <Input type={type} name={name} placeholder={placeholder} className="h-10" />
  </div>
  )
}

export default Search