import Image from 'next/image';
import Link from 'next/link';

import { Repository } from '../../interfaces';
import { LanguageColors, Tag } from './Tag';

interface ProjectProps {
  repository: Repository;
}

const Project: React.FC<ProjectProps> = ({ repository }) => (
  <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
    <div className="shrink-0">
      <Image
        className="h-36 w-36 hover:translate-y-1"
        src="/assets/images/github.svg"
        alt="github logo"
        loading="lazy"
        height={25}
        width={25}
      />
    </div>

    <div>
      <div className="flex flex-col items-center gap-y-2 md:flex-row">
        <Link
          href={repository.url}
          target="_blank"
          className="hover:text-cyan-400"
        >
          <div className="text-xl font-semibold">{repository.name}</div>
        </Link>

        <div className="ml-3 flex flex-wrap gap-2">
          {repository.languages.map((language) => (
            <Tag key={language.id} color={LanguageColors[language.name]}>
              {language.name}
            </Tag>
          ))}
        </div>
      </div>

      {repository.description && (
        <p className="mt-3 text-gray-400">{repository.description}</p>
      )}
    </div>
  </div>
);

export { Project };
