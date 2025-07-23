import { forwardRef } from "react";
import { Polymorphic, usePolymorphic } from "@leafygreen-ui/polymorphic";
import { clsx } from "clsx";
import { Icon } from "../Icon/Icon";

import "@luukbrauckmann/styles/components/button.css";

type Props = {
  as?: "button" | "a";
  variant?: "primary" | "secondary" | "transparent" | "link";
  icon?: string;
  iconOnly?: boolean;
  round?: boolean;
};

export const Button = forwardRef(Polymorphic<Props>(
  (
    {
      as,
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
    const { Component } = usePolymorphic(as);

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
));
