import { useTypedSelector } from "./userTypedSelector";


export const useAuth = () => useTypedSelector((state) => state.user)
