import { createContext, JSX } from "preact";

export const RouteContext = createContext<JSX.Element | undefined>(undefined);
