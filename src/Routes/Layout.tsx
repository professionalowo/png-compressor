import { NavBar } from "../components/NavBar";
import { Outlet } from "../components/router/Outlet";

export function Layout() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center align-middle items-center">
      <NavBar />
      <div className="flex flex-col justify-center align-middle items-center h-full w-full">
        <div className="w-fit h-fit">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
