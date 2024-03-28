import logo from "@/assets/images/logo-light.png";

const Logo = ({className}: {className?: string}) => {
    return (
      <a className={`flex items-center gap-2.5 link no-underline text-lg ${className}`}>
      <img src={logo} alt="E-Learn_syster_logo" className="max-sm:w-28"/>
    </a>
    )
  }

  export default Logo