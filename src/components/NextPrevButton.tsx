import { MoveLeft, MoveRight } from "lucide-react";

const NextPrevButton = () => {
  return (
    <div className="flex-between !gap-x-2.5 *:w-10 *:px-1 *:outline *:outline-1 *:outline-slate-300">
      <button>
        <MoveLeft className={`text-slate-300 float-end`} />
      </button>
      <button>
        <MoveRight className={`disabled:!cursor-not-allowed text-brand-500`} />
      </button>
    </div>
  );
};

export default NextPrevButton;
