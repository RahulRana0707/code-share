import { Choice } from "@/lib/types";
import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import React from "react";

interface ChoicesProps {
  choices: Choice[];
  initialValue: Choice;
  onChange: (choice: Choice) => void;
}

const Choices = ({ choices, initialValue, onChange }: ChoicesProps) => {
  return (
    <RadioGroup value={initialValue} onChange={onChange}>
      <div className="flex gap-3 py-[7px] text-sm">
        {choices.map((choice) => (
          <RadioGroup.Option
            key={choice.label}
            value={choice}
            className={clsx("cursor-pointer select-none rounded-md")}
          >
            <span
              className={clsx(
                "rounded-md py-1 px-2",
                "transition-colors duration-100 ease-in-out"
              )}
            >
              {choice.label}
            </span>
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

export default Choices;
