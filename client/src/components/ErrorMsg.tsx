import { PropsWithChildren } from "react"

export const ErrorMsg = ({ children }: PropsWithChildren) => {

  return (
    <p className="text-red-800 text-lg text-center">{children}</p>
  )
}
