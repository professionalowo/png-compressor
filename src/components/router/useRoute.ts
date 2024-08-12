import { useContext } from "preact/hooks";
import { RouteContext } from "./routeContext";

export const useRoute = () => {
  const context = useContext(RouteContext);
  if (!context) throw new Error("useRoute must be used inside a Router");
  return context;
};
