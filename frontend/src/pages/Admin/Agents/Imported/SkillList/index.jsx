import { CaretRight } from "@phosphor-icons/react";
import { isMobile } from "react-device-detect";
import { sentenceCase } from "text-case";

export default function ImportedSkillList({
  skills = [],
  selectedSkill = null,
  handleClick = null,
}) {
  if (skills.length === 0)
    return (
      <div className="text-white/60 text-center text-xs flex flex-col gap-y-2">
        <p>No imported skills found</p>
        <p>
          Learn about agent skills in the{" "}
          <a
            href="https://docs.HiveLink.com/agent/custom/developer-guide"
            target="_blank"
            className="text-white/80 hover:underline"
          >
            HiveLink Agent Docs
          </a>
          .
        </p>
      </div>
    );

  return (
    <div
      className={`bg-white/5 text-white rounded-xl ${
        isMobile ? "w-full" : "min-w-[360px] w-fit"
      }`}
    >
      {skills.map((config, index) => (
        <div
          key={config.hubId}
          className={`py-3 px-4 flex items-center justify-between ${
            index === 0 ? "rounded-t-xl" : ""
          } ${
            index === Object.keys(skills).length - 1
              ? "rounded-b-xl"
              : "border-b border-white/10"
          } cursor-pointer transition-all duration-300  hover:bg-white/5 ${
            selectedSkill === config.hubId ? "bg-white/10" : ""
          }`}
          onClick={() => handleClick?.({ ...config, imported: true })}
        >
          <div className="text-sm font-light">{sentenceCase(config.name)}</div>
          <div className="flex items-center gap-x-2">
            <div className="text-sm text-white/60 font-medium">
              {config.active ? "On" : "Off"}
            </div>
            <CaretRight size={14} weight="bold" className="text-white/80" />
          </div>
        </div>
      ))}
    </div>
  );
}
