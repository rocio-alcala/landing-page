import { ComponentPropsWithoutRef, forwardRef } from "react";

import { cn } from "../assets/helpers";
import Errors from "./Errors";

interface InputTextSpecificProps {
  id: string | number;
  description?: string;
  errors?: string;
  label?: string;
}

const InputText = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input"> & InputTextSpecificProps
>(({ label, errors, required, description, className, ...props }, ref) => {
  return (
    <div className={cn("w-full flex-col text-base", className)}>
      <label>
        {label && (
          <legend className=" py-1 text-start font-semibold leading-6 text-[#FFFFFF]">
            {label}
            {required && <span className="text-[#c2983e]">*</span>}
          </legend>
        )}
        <input
          className={cn(
            "h-11 w-full border-b-2 p-3 bg-transparent text-[#FFFFFF] placeholder:text-gray-200 focus:border-b-[#c2983e] focus:outline-none",
            errors && "focus:border-b-[#c2983e]"
          )}
          ref={ref}
          type="text"
          aria-label={label}
          {...props}
        />
      </label>
      <Errors message={errors} />
      {description && (
        <div className="text-xs leading-6 tracking-wide text-[#FFFFFF]">
          {description}
        </div>
      )}
    </div>
  );
});

export default InputText;
