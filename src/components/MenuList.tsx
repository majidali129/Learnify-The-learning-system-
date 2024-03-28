
const MenuList = ({className}: {className?: string}) => {
  return (
    <ul className={`!gap-3 lg:!gap-5 flex-between hover:*:text-brand-500 *:transition ${className}`}>
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
  )
}

export default MenuList