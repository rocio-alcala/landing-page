import { ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../assets/helpers";
import Errors from "./Errors";

interface InputTextAreaSpecificProps {
  id: string | number;
  description?: string;
  errors?: string;
  label?: string;
  required?: boolean;
}

const InputTextArea = forwardRef<
  HTMLTextAreaElement,
  ComponentPropsWithoutRef<"textarea"> & InputTextAreaSpecificProps
>(({ label, errors, required, description, className, ...props }, ref) => {
  return (
    <div className={cn("w-full flex-col text-base", className)}>
      <label>
        {label && (
          <legend className=" py-1 text-start font-semibold leading-6 text-[#FFF5D6]">
            {label}
            {required && <span className="text-[#c2983e]">*</span>}
          </legend>
        )}
        <textarea
          className={cn(
            "min-h-52 w-full bg-transparent border-b-2 focus:ring-transparent text-[#FFFFFF] placeholder:text-gray-200 focus:border-b-[#c2983e] focus:outline-none",
            errors && "focus:border-[#c2983e]"
          )}
          ref={ref}
          aria-label={label}
          {...props}
        />
      </label>
      <Errors message={errors} />
      {description && (
        <div className="text-xs  leading-6 tracking-wide text-gray-400">
          {description}
        </div>
      )}
    </div>
  );
});

export default InputTextArea;
