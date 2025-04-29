"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { morePublicHomeItems, publicHomeItems } from "@/data";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function Navbar() {
  const isScrolled = useScrollPosition(50);
  const navigationLinkClasses = cn(
    "2xl:text-base xl:text-sm lg:text-xs",
    isScrolled
      ? "bg-transparent hover:bg-accent hover:text-foreground focus:bg-accent focus:text-foreground data-[state=open]:hover:bg-accent data-[state=open]:text-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent"
      : "bg-transparent hover:bg-white/10 hover:text-background focus:bg-white/10 focus:text-background data-[state=open]:hover:bg-white/10 data-[state=open]:text-background data-[state=open]:focus:bg-white/10 data-[state=open]:bg-white/10"
  );

  return (
    <header
      className={cn(
        "w-full px-3 py-1 md:px-5 xl:px-6  flex items-center justify-between fixed top-0 left-0 z-30 transition-colors duration-300",
        isScrolled ? "bg-background text-foreground" : "bg-transparent text-white"
      )}
    >
      {/* Logo */}
      <Link href="/publicHome" className="text-2xl font-bold">
        <img
          src={isScrolled ? "/Logo_black.svg" : "/Logo_white.svg"}
          alt="logo"
          className="w-30 sm:w-40 xl:w-50 lg:w-32"
        ></img>
      </Link>

      {/* Nav */}
      <nav className="hidden lg:flex gap-6 text-sm font-medium ">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4 items-center">
            {publicHomeItems.map(({ id, title, url }) => (
              <NavigationMenuItem key={id}>
                <NavigationMenuLink asChild>
                  <Link href={url} className={navigationLinkClasses}>
                    {title}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

            {/* Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className={navigationLinkClasses}>
                Mehr erfahren
              </NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[600px] overflow-hidden bg-background">
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {morePublicHomeItems.map(({ id, title, url, icon }) => (
                    <ListItem key={id} title={title} href={url} icon={icon}>
                      {title}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      {/* buttons */}
      <div className="flex gap-2 ml-auto mr-3 sm:mr-10 lg:ml-0 lg:mr-0 ">
        <Button
          variant="default"
          size="sm"
          className={cn(
            "hidden sm:flex text-xs md:text-sm ",
            isScrolled
              ? "text-foreground bg-black/10 transition-colors duration-300 hover:bg-black/20 focus:bg-white/20"
              : "text-white bg-white/10 transition-colors duration-300 hover:bg-white/20 focus:bg-white/20"
          )}
        >
          Anmelden
        </Button>
        <Button
          size="sm"
          className="text-xs md:text-sm bg-gradient-to-r from-[#4F46E5] to-[#B73027] bg-[length:200%_200%] bg-right-bottom transition-all duration-500 hover:bg-left-top"
        >
          Kostenlos starten
        </Button>
      </div>

      {/* Mobile menu */}
      <div className="lg:hidden flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-12 w-12">
              <Menu style={{ width: "30px", height: "30px" }} strokeWidth={1} />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-6">
            <div className="sr-only">
              <DialogTitle>Меню</DialogTitle>
            </div>
            <nav className="flex flex-col gap-4 mt-4">
              {publicHomeItems.map(({ id, title, url }) => (
                <Link
                  href="url"
                  key={id}
                  className="px-3 py-1 rounded-md bg-transparent hover:bg-accent hover:text-foreground"
                >
                  {title}
                </Link>
              ))}
              <Button
                variant="default"
                size="sm"
                className="text-foreground bg-black/10 transition-colors duration-300 hover:bg-black/20"
              >
                Anmelden
              </Button>
              <Button
                size="sm"
                className="md:text-sm bg-gradient-to-r from-[#4F46E5] to-[#B73027] bg-[length:200%_200%] bg-right-bottom transition-all duration-500 hover:bg-left-top"
              >
                Kostenlos starten
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  href: string;
  icon?: React.ElementType;
  children?: React.ReactNode;
}

const ListItem = ({ className, title, href, icon: Icon, children, ...props }: ListItemProps) => (
  <li>
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className={cn(
          "flex items-start gap-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        {Icon && <Icon className="h-5 w-5 mt-1 text-muted-foreground" />}
        <div className="">
          <div className="text-sm font-medium leading-none">{title}</div>
        </div>
      </Link>
    </NavigationMenuLink>
  </li>
);
