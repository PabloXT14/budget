import { createContext, useContext } from "react"

type InputContextType = {
  isFocused: boolean
  onFocus: () => void
  onBlur: () => void
}

const InputContext = createContext<InputContextType | null>(null)

const useInputContext = () => {
  const context = useContext(InputContext)

  if (!context) {
    throw new Error(
      "useInputContext must be used within an InputProvider/InputContainer"
    )
  }

  return context
}

export { InputContext, useInputContext }
