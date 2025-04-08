"use client";

import * as React from "react";
import { NavigationMenu, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { items } from "@/data";

export function NavMenu() {
  return (
    <NavigationMenu>
      {items.map((item) => (
        <NavigationMenuLink href={item.url} key={item.id}>
          {item.title}
        </NavigationMenuLink>
      ))}
    </NavigationMenu>
  );
}
