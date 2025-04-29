import {
  ChartNoAxesCombined,
  GraduationCap,
  MessageSquareQuote,
  Newspaper,
  PersonStanding,
  TvMinimalPlay,
} from "lucide-react";

interface IItems {
  id: number;
  title: string;
  url: string;
  icon?: React.ElementType;
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
  {
    id: 4,
    title: "Start",
    url: "/publicHome",
  },
];
export const publicHomeItems: IItems[] = [
  {
    id: 1,
    title: "Startseite",
    url: "/",
  },
  {
    id: 2,
    title: "Über uns",
    url: "/about",
  },
  {
    id: 3,
    title: "Kurse buchen",
    url: "/courses",
  },
  {
    id: 4,
    title: "Prüfungsvorbereitung",
    url: "/preparation",
  },
];
export const morePublicHomeItems: IItems[] = [
  {
    id: 5,
    title: "Online Kurse",
    url: "/courses",
    icon: GraduationCap,
  },
  {
    id: 6,
    title: "Feedback erhalten",
    url: "/feedback",
    icon: MessageSquareQuote,
  },
  {
    id: 7,
    title: "Fortschritt verfolgen",
    url: "/progress",
    icon: ChartNoAxesCombined,
  },
  {
    id: 8,
    title: "Blog lesen",
    url: "/blog",
    icon: Newspaper,
  },
  {
    id: 9,
    title: "Webinare ansehen",
    url: "/webinars",
    icon: TvMinimalPlay,
  },
  {
    id: 10,
    title: "Erfolgsgeschichten",
    url: "/success-stories",
    icon: PersonStanding,
  },
];
