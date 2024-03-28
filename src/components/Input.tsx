import { ComponentProps } from "react";

export interface InputProfixProps extends ComponentProps<"div"> {}

export function Prefix(props: InputProfixProps) {
  return <div {...props} />;
}
export interface InputControlProps extends ComponentProps<"input"> {}

export function Control(props: InputControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      {...props}
    />
  );
}
export type InputRootProps = ComponentProps<"div">;

export function Root(props: InputRootProps) {
  return (
    <div
      className=" mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-5 py-2 shadow-sm"
      {...props}
    />
  );
}
