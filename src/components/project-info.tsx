import React from "react";
import GlobeIcon from "./icons/globe-icon.svg";
import DiscordIcon from "./icons/discord-icon.svg";
import GitHubIcon from "./icons/github-icon.svg";
import LinkButton from "./link-button";

const linkConfig = {
  website: { text: "Website", Icon: GlobeIcon },
  discord: { text: "Discord", Icon: DiscordIcon },
  "discord-bot-invite": { text: "Invite", Icon: DiscordIcon },
  github: { text: "GitHub", Icon: GitHubIcon },
};

export default function ProjectInfo({
  name,
  icon,
  Icon,
  links = [],
  description = "",
  iconCircle = false,
}: {
  name: string;
  icon?: string;
  Icon?: React.ComponentType<{ className?: string; height?: number; width?: number }>;
  links: { url: string; type: keyof typeof linkConfig; disabled?: boolean; primary?: boolean; hidden?: boolean }[];
  description?: string;
  iconCircle?: boolean;
}) {
  const iconClass = `${iconCircle ? "rounded-full" : "rounded-lg"} h-14 w-14 shrink-0 border border-border bg-placeholder object-cover`;

  return (
    <article className="window">
      <div className="flex items-start gap-4 p-4">
        {Icon ? (
          <>
            <Icon className={iconClass} height={56} width={56} />
            <img loading="lazy" className="hidden" src={icon} alt={`${name} icon`} width={56} height={56} />
          </>
        ) : (
          <img loading="lazy" className={iconClass} src={icon} alt={`${name} icon`} width={56} height={56} />
        )}

        <div className="min-w-0 flex-1">
          <h4 className="font-bold leading-6">{name}</h4>
          <p className="mt-0.5 text-sm leading-relaxed text-text-secondary text-pretty">{description}</p>

          <ul className="mt-3 flex list-none flex-wrap gap-2">
            {links.map((link, i) => {
              if (!linkConfig[link.type]) return null;
              const { text, Icon: BtnIcon } = linkConfig[link.type];
              return (
                <LinkButton
                  key={link.url + i}
                  url={link.url}
                  text={link.disabled ? link.disabled.toString() : text}
                  Icon={BtnIcon}
                  newTab={!link.disabled}
                  disabled={link.disabled}
                  primary
                  small
                  hidden={link.hidden}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </article>
  );
}
