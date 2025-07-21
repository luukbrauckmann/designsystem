import type { ComponentProps } from "react";
import { clsx } from "clsx"

import "@luukbrauckmann/styles/components/icon.css";

type Props = {
  name: string;
  title?: string;
} & ComponentProps<"svg">;

export default function Button({ name, title, className, ...props }: Props) {
  return (
    <svg
      className={clsx(["icon", `icon--${name}`, className])}
      aria-hidden={!title}
      {...props}
    >
      {title && <title>{title}</title>}
      <use href={`#${name}`}></use>
    </svg>
  );
}
