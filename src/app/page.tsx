import AbiDecodeComponent from "@/components/Abi.Decode";
import {ROUTES, RouteListItem} from "./routeList";

import Link from "next/link";

const linkClassName = "text-blue-500 underline";

export default function Home() {
  const renderRoutingLinks = () => {
    return ROUTES.map((route: RouteListItem) => {
      return (
        <li key={route.path}>
          <Link href={route.path} className={linkClassName}>
            {route.text}
          </Link>
        </li>
      );
    });
  };
  return (
    <>
      <ul>{renderRoutingLinks()}</ul>
      <AbiDecodeComponent />
    </>
  );
}
