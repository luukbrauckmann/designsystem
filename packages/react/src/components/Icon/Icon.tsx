import { forwardRef, type ComponentPropsWithRef } from "react";
import { clsx } from "clsx"

import "@luukbrauckmann/styles/components/icon.css";
import { Button } from "../Button/Button";

type Props = {
  name: string;
  title?: string;
} & ComponentPropsWithRef<"svg">;

export const Icon = forwardRef<SVGSVGElement, Props>(({ name, title, className, ...props }, ref) => {
  return (
    <>
      <Button as="button">Lol</Button>
      <svg
        ref={ref}
        className={clsx(["icon", `icon--${name}`, className])}
        aria-hidden={!title}
        {...props}
      >
        {title && <title>{title}</title>}
        <use href={`#${name}`}></use>
      </svg>
    </>
  );
});
