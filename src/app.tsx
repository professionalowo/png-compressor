import { CompressForm } from "./components/CompressForm";
import { Router } from "./components/router/Router";

export function App() {
  return <Root />;
}

const Root = () => (
  <Router
    routes={[
      Router.Route({ path: "/", element: <CompressForm /> }),
      Router.Route({ path: "/about", element: <p>About</p> }),
    ]}
    notFound={<p>Not found</p>}
  />
);
