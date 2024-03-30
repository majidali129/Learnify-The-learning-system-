import NextPrevButton from "@/components/NextPrevButton";
import {categoryTools} from '@/data/index'

const CategoryToolList = () => {
  return (
    <section className="space-y-4">
      <div className="flex-between">
        <h3>Pupular Tools</h3>
        <NextPrevButton />
      </div>
      <div className="grid grid-cols-2 px-0.5 gap-x-5 gap-y-5 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
        {
          categoryTools.map((tool, ind) => (
        <div key={tool.name} className={`flex-col !gap-1 py-2.5 max-w-[200px] w-full min-h-[80px] border ${ind===5? 'box-shadow border-0': 'border-slate-300'}   flex-center`}>
          <h5 className={`${ind===5&& 'text-brand-500'}`}>{tool.name}</h5>
          <span className="text !mt-0">{tool.count}</span>
        </div>
          ))
        }
      </div>
    </section>
  );
};

export default CategoryToolList;
