import type { ReactNode } from 'react';

type IExperienceProps = {
  name: string;
  from: string;
  to: string;
  category: ReactNode;
};

const Experience = (props: IExperienceProps) => (
  <div className="flex flex-col items-center gap-y-2 md:flex-row bg-slate-800 p-3 rounded-md">
    <div className="text-xl font-semibold">{props.name} &nbsp;</div>
    <span className="text-sm">
      ({props.from} - {props.to})
    </span>

    <div className="ml-3 flex flex-wrap gap-2">{props.category}</div>
  </div>
);

export { Experience };
