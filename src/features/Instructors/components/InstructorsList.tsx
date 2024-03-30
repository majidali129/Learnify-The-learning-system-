import InstructorCard from "@/components/InstructorCard"
import { INSTRUCTORS } from "@/constants"

const InstructorsList = () => {
  return (
    <div className="grid w-full sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-4 gap-y-4 md:gap-y-5  lg:gap-x-7 xl:gap-x-5 lg:gap-y-5 *:rounded-sm">
              {INSTRUCTORS.slice(6).map((ins) => (
                <InstructorCard
                  key={ins.id}
                  name={ins.name}
                  field={ins.field}
                  students={ins.noOfStudents}
                  rating={ins.rating}
                />
              ))}
            </div>

  )
}

export default InstructorsList