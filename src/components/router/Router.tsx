import { useEffect, useMemo, useState } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";
import { LocationContext } from "./locationContext";
import { NotFound404 } from "./404";
import { RouteContext } from "./routeContext";

export type RouterProps = {
  routes: Array<RouteProps>;
  notFound?: JSX.Element;
  layout?: JSX.Element;
};
export function Router({ routes, notFound, layout }: RouterProps) {
  const [url, setUrl] = useState(new URL(location.href));
  useEffect(() => {
    window.addEventListener("hashchange", onNavigate);
    return () => window.removeEventListener("hashchange", onNavigate);
  }, []);

  const onNavigate = (event: HashChangeEvent) => {
    setUrl(new URL(event.newURL));
  };

  const currentRoute = useMemo(() => {
    const route = routes.filter((route) => route.path === url.pathname);

    if (route.length === 0) return notFound ?? <NotFound404 />;

    return route[0].element;
  }, [url]);

  return (
    <LocationContext.Provider value={url}>
      <RouteContext.Provider value={currentRoute}>
        {layout ?? currentRoute}
      </RouteContext.Provider>
    </LocationContext.Provider>
  );
}

type RouteProps = {
  path: string;
  element: JSX.Element;
};
Router.Route = function ({ element, path }: RouteProps) {
  return { element, path };
};
