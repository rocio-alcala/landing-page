import { cn } from "../assets/helpers";

interface ErrorsTypeProps {
  message: undefined | string;
  className?: string;
}

export default function Errors({ message, className }: ErrorsTypeProps) {
  return (
    <>
      {message ? (
        <p className={cn("text-start text-xs text-[#c2983e]", className)}>
          {message}
        </p>
      ) : null}
    </>
  );
}
