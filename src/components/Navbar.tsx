import {ROUTES, RouteListItem} from "@/app/routeList";
import Link from "next/link";

const Navbar: NextPageWithLayout = () => {
  const linkClassName = "text-white underline";
  const renderRoutingLinks = () => {
    return ROUTES.map((route: RouteListItem) => {
      return (
        <div key={route.path}>
          <Link href={route.path} className={linkClassName}>
            {route.text}
          </Link>
        </div>
      );
    });
  };

  return (
    <nav className="bg-indigo-600 text-white p-4">
      <div className=" md:flex">
        <ul>{renderRoutingLinks()}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
