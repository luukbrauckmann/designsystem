import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLButtonElement>;

export default function Button({ ...props }: Props) {
  return <button {...props} />;
}
