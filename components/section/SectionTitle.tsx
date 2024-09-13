import { HTMLProps } from "react";

export default function SectionTitle({
  children,
  className,
  ...rest
}: HTMLProps<HTMLHeadingElement>) {
  return (
    <h2
      className={`mx-auto px-4 text-center text-[2rem] sm:text-4xl md:text-5xl xl:text-5xl max-w-[486px] font-bold text-text-primary leading-normal ${className}`}
      {...rest}
    >
      {children}
    </h2>
  );
}
