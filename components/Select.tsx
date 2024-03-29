import { GradientBackground } from "@/lib/types";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { LanguageName } from "@uiw/codemirror-extensions-langs";
import clsx from "clsx";
import React, { Fragment } from "react";

interface SelectProps<T> {
  type: "language" | "theme";
  initialValue: T;
  onChange: (_: T) => void;
  options: T[];
}

function ThemeBubble({ color }: { color: string }) {
  return (
    <span
      className={clsx("block h-4 w-4 rounded-full bg-gradient-to-br", color)}
    ></span>
  );
}

export default function Select<T extends GradientBackground | LanguageName>({
  type,
  initialValue,
  onChange,
  options,
}: SelectProps<T>) {
  return (
    <Listbox value={initialValue} onChange={onChange}>
      <div className="relative">
        <Listbox.Button
          className={clsx(
            "flex select-none items-center justify-between gap-3 rounded-lg p-2 text-sm",
            "border-[1px] border-white bg-black",
            "transition-colors duration-200 ease-in-out",
            "hover:cursor-pointer hover:bg-white/20 focus:outline-none"
          )}
        >
          {type === "language" ? (
            <span>{initialValue as LanguageName}</span>
          ) : (
            <ThemeBubble color={(initialValue as GradientBackground).class} />
          )}
          <span className="pointer-events-none">
            <ChevronDownIcon className="h-3 w-3" aria-hidden={true} />
          </span>
          <Transition
            as={Fragment}
            enter="transition-all transform ease-in-out duration-200"
            enterFrom="opacity-0 scale-50"
            enterTo="opacity-100"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0 scale-90"
          >
            <Listbox.Options
              className={clsx(
                "absolute z-10 max-h-80 -translate-x-1/4 space-y-1 overflow-auto rounded-xl p-2",
                "border-[1px] border-white/20 bg-black",
                "focus:outline-none"
              )}
            >
              {options.map((option, index) => (
                <Listbox.Option
                  value={option}
                  key={`${type}-${index}`}
                  className={clsx(
                    "flex items-center gap-3 rounded-lg p-2 text-sm",
                    "cursor-pointer select-none",
                    "transition-colors duration-200 ease-in-out"
                  )}
                >
                  {type === "language" ? (
                    <span className="block truncate pr-9">
                      {option as LanguageName}
                    </span>
                  ) : (
                    <>
                      <ThemeBubble
                        color={(option as GradientBackground).class}
                      />
                      <span className="block truncate">
                        {(option as GradientBackground).name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </Listbox.Button>
      </div>
    </Listbox>
  );
}
