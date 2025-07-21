import type { ComponentProps } from "react";

import "@luukbrauckmann/styles/components/button.css";

type Props = ComponentProps<"button">;

export default function Button({ ...props }: Props) {
  return <button {...props} />;
}
