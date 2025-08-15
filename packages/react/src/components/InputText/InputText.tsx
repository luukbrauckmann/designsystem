import { forwardRef, type ComponentPropsWithRef } from "react";
import { clsx } from "clsx";

import "@luukbrauckmann/styles/components/input-text.css";

export type Props = {
  state?: 'error' | 'warn' | 'success';
} & Omit<ComponentPropsWithRef<"input">, 'type'>;

export const InputText = forwardRef<HTMLInputElement, Props>(
  ({ state, className, ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        type="text"
        placeholder="HEj"
        className={clsx(
          "input-text",
          state && `input-text--${state}`,
          className
        )}
      />
    );
  }
);
