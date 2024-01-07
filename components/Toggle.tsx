import { Switch } from "@headlessui/react";
import clsx from "clsx";

interface ToggleProps {
  initialValue: boolean;
  onChange: (_: boolean) => void;
}

export default function Toggle({ initialValue, onChange }: ToggleProps) {
  return (
    <div className="flex h-[34px] items-center">
      <Switch
        checked={initialValue}
        onChange={onChange}
        className={clsx(
          "flex h-5 w-9 cursor-pointer rounded-full p-2",
          "transition-colors duration-200 ease-in-out",
          "focus:outline-none"
        )}
      >
        <span
          className={clsx(
            "pointer-events-none h-full w-3 translate-y-0 rounded-full",
            "bg-white",
            "transform transition-transform duration-200 ease-in-out will-change-transform"
          )}
        ></span>
      </Switch>
    </div>
  );
}
