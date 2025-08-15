import { forwardRef, type ComponentPropsWithRef } from "react";
import { clsx } from "clsx";

import "@luukbrauckmann/styles/components/icon.css";

export type Props = {
  name: 'newspaper' | 'briefcase' | 'nl' | 'en' | 'xmark' | 'bars' | 'house' | 'user-secret' | 'square-arrow-up-right' | 'code-pull-request' | 'code-commit' | 'check' | 'envelope' | 'github' | 'arrow-right';
  title?: string;
} & ComponentPropsWithRef<"svg">;

export const Icon = forwardRef<SVGSVGElement, Props>(
  ({ name, title, className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        className={clsx(["icon", `icon--${name}`, className])}
        aria-hidden={!title}
        {...props}
      >
        {title && <title>{title}</title>}
        <use href={`#${name}`}></use>
      </svg>
    );
  }
);
