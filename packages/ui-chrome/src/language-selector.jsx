"use client";
import { useState,useEffect } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Globe from "./assets/globe.inline.svg";
// import ChevronGrabberVertical from "./assets/chevron-grabber-vertical.inline.svg";
import AngleDown from "./assets/angle-down.inline.svg";
import AngleUp from "./assets/angle-up.inline.svg";
import { languages } from "@workspace/i18n/config";
import { usePathname } from "@workspace/i18n/routing";
import { useLocale } from "next-intl";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(classNames(inputs));
}

const LanguageSelector = ({ className = "" }) => {
  const currentLocale = useLocale();
  const asPath = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(open,"open");
  },[open])

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <button
          className={cn(
            "p-0 border-0 inline-flex items-center",
            "text-[#848895] text-[14px] light:text-[#7f8391]",
            "hover:text-white light:hover:text-gray-900",
            "transition-colors duration-200",
            className,
          )}
          type="button"
        >
          <Globe height="20" />
          <span className="align-middle font-normal mx-1 uppercase text-[14px] leading-[16px]">
            {currentLocale}
          </span>
          {!open? <AngleDown
                    aria-hidden="true"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    />:<AngleUp  
                    aria-hidden="true"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    />}
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        align="end"
        side="bottom"
        sideOffset={8}
        className="max-h-[50vh] overflow-y-auto bg-[#111214] text-[#848895] p-[12px] rounded !border border-white/10 shadow-lg light:bg-white light:text-[#121212] light:border-black/10"
      >
        {Object.keys(languages).map((language) => (
          <DropdownMenu.Item asChild key={language}>
            <a
              href={"/" + language + asPath}
              className="block px-2 py-1.5 rounded !no-underline text-base !text-[#848895] hover:!text-white hover:bg-[#151118] focus:bg-[#151118] outline-none light:!text-[#121212] light:hover:bg-neutral-100"
            >
              {languages[language]}
            </a>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export { LanguageSelector };
