import { useReducer } from "react"

const useForceUpdate = () => {
    const [_, update] = useReducer(x => x + 1, 0)
    return update
}

export default useForceUpdate