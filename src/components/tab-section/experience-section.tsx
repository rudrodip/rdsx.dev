import { experiencesConfig } from "@/config/experience.config";
import type { Experience as ExperienceType } from "@/types";

export default function ExperienceSection() {
  return (
    <div className="w-full max-w-xl space-y-10 mt-10">
      {experiencesConfig.map((exp, i) => {
        return (
          <Experience key={i} experience={exp} />
        )
      })}
    </div>
  );
}

export const Experience = ({ experience }: { experience: ExperienceType }) => {
  return (
    <div>
      <div className="flex justify-between">
        <p className="font-semibold">
          <a
            href={experience.company.url}
            target="_blank"
            className="hover:underline"
          >
            {experience.company.name}
          </a>
          <span className="text-xs px-2 py-1 ml-2 bg-secondary rounded">
            {experience.location.name}
          </span>
        </p>
        <p className="text-muted-foreground text-xs">{experience.start} - {experience.end}</p>
      </div>
      <p>{experience.title}</p>
      <ul className="list-disc pl-5 text-sm text-muted-foreground">
        {experience.description.map((exp, i) => {
          return (
            <li key={i}>{exp}</li>
          )
        })}
      </ul>
    </div>
  );
};
