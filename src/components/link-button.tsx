import React from "react";

interface LinkButtonProps {
  url: string;
  text: string;
  Icon: React.ComponentType<{ className?: string; height?: number; width?: number }>;
  newTab?: boolean;
  noMobile?: boolean;
  disabled?: string | boolean;
  small?: boolean;
  primary?: boolean;
  obfuscate?: string | boolean;
  itemProp?: string;
  hidden?: boolean;
}

export default function LinkButton({
  url = "",
  text,
  Icon,
  newTab = false,
  disabled = false,
  small = false,
  primary = false,
  obfuscate = false,
  itemProp,
  hidden = false,
}: LinkButtonProps) {
  function encodeObfuscated(str: string): string {
    return btoa(unescape(encodeURIComponent(str))).split("").reverse().join("");
  }

  const baseClass = primary ? "btn" : "btn-icon";
  const sizeClass = primary
    ? small
      ? "h-8 px-3 text-xs"
      : "h-9 px-3.5 text-sm"
    : small
      ? "h-8 w-8 max-w-8 p-0"
      : "h-9 w-full p-0 sm:w-9 sm:max-w-9";

  return (
    <li className={hidden ? "hidden" : undefined}>
      <a
        href={obfuscate ? (typeof obfuscate === "string" ? obfuscate : "#") : url || "#"}
        target={newTab ? "_blank" : "_self"}
        rel="noopener noreferrer"
        itemProp={itemProp}
        title={disabled ? (typeof disabled === "string" ? disabled : text) : text}
        className={
          baseClass +
          " " +
          sizeClass +
          " " +
          (disabled ? "cursor-default opacity-30 hover:bg-button hover:border-border" : "")
        }
        aria-disabled={!!disabled}
        tabIndex={disabled ? -1 : 0}
        data-obfuscated={obfuscate ? encodeObfuscated(url) : undefined}
      >
        <Icon className="h-4 w-4 shrink-0" height={16} width={16} />
        {primary ? <span>{text}</span> : <span className="sr-only">{text}</span>}
      </a>
    </li>
  );
}
