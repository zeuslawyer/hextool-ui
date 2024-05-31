import AbiDecodeComponent from "@/components/Abi.Decode";

import Link from "next/link";

const linkClassName = "text-blue-500 underline";

export default function Home() {
  const routes = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "Convert Wei/Ether Units",
      path: "/units",
    },
    {
      text: "String From Hex",
      path: "/string-from-hex",
    },
  ];

  const renderRoutingLinks = () => {
    return routes.map(route => {
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
