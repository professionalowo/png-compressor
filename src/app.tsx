import { Router } from "./components/router/Router";
import { AboutScreen } from "./Routes/AboutScreen";
import { CompressScreen } from "./Routes/CompressScreen";
import { Layout } from "./Routes/Layout";

export function App() {
  return (
    <Router
      layout={<Layout />}
      routes={[
        Router.Route({ path: "/", element: <CompressScreen /> }),
        Router.Route({ path: "/about", element: <AboutScreen /> }),
      ]}
      notFound={<p>Not found</p>}
    />
  );
}
