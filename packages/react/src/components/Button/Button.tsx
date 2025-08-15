import { forwardRef, type ComponentPropsWithRef } from "react";
import { clsx } from "clsx";
import { Icon } from "../Icon/Icon";

import "@luukbrauckmann/styles/components/button.css";

type Props<T extends "button"> = {
  as?: "button";
  variant?: "primary" | "secondary" | "transparent" | "link";
  icon?: 'newspaper' | 'briefcase' | 'nl' | 'en' | 'xmark' | 'bars' | 'house' | 'user-secret' | 'square-arrow-up-right' | 'code-pull-request' | 'code-commit' | 'check' | 'envelope' | 'github' | 'arrow-right';
  iconOnly?: boolean;
  round?: boolean;
} & ComponentPropsWithRef<T>;

export const Button = forwardRef<HTMLButtonElement, Props<"button">>(
  (
    {
      as: Component = "button",
      variant,
      icon,
      iconOnly,
      round,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={clsx(
          "button",
          `button--${variant}`,
          { "button--icon-only": iconOnly },
          { "button--round": round },
          className
        )}
        {...props}
      >
        {icon && <Icon name={icon} />}
        <span className={clsx("button__label", { "sr-only": iconOnly })}>
          {children}
        </span>
      </Component>
    );
  }
);
