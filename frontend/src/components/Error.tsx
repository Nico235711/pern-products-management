import { PropsWithChildren } from "react";

export default function Error({ children }: PropsWithChildren) {

  return (
    <p className="text-red-600 text-center mb-5 text-lg font-bold">{children}</p>
  )
}
