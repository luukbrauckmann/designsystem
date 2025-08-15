import { forwardRef, type ComponentPropsWithRef } from "react";
import { clsx } from "clsx";

import "@luukbrauckmann/styles/components/input-radio.css";

export type Props = {} & ComponentPropsWithRef<"div">;

export const InputRadio = forwardRef<HTMLDivElement, Props>(
  ({ id, className, children, ...props }, ref) => {
    return (
      <div {...props} ref={ref} className={clsx("input-radio", className)}>
        <input id={id} type="radio" className="input-radio__input"/>
        <label htmlFor={id}>{children}</label>
      </div>
    );
  }
);
