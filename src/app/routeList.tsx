export type RouteListItem = {
  text: string;
  path: string;
};
export const ROUTES: RouteListItem[] = [
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
  {
    text: "Decode Error",
    path: "/decode-error",
  },
];
