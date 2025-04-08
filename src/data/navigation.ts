interface IItems {
  id: number;
  title: string;
  url: string;
}
export const items: IItems[] = [
  {
    id: 1,
    title: "Startseite",
    url: "/",
  },
  {
    id: 2,
    title: "Über das Projekt",
    url: "/about",
  },
  {
    id: 3,
    title: "Kontakte",
    url: "/contacts",
  },
];
