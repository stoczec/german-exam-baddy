"use client";

import * as React from "react";

import { useMediaQuery } from "usehooks-ts";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, usePathname } from "@/i18n/navigation";
import { getCurrentBreadcrumbs } from "@/utils";

const ITEMS_TO_DISPLAY = 3;

export function BreadcrumbResponsive() {
  const pathname = usePathname();
  const currentBreadcrumbs = getCurrentBreadcrumbs(pathname);
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (currentBreadcrumbs.length === 0) {
    return null;
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {currentBreadcrumbs.length > ITEMS_TO_DISPLAY ? (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href={currentBreadcrumbs[0].url}>
                {currentBreadcrumbs[0].title}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />

            <BreadcrumbItem>
              {isDesktop ? (
                <DropdownMenu open={open} onOpenChange={setOpen}>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    <BreadcrumbEllipsis className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {currentBreadcrumbs.slice(1, -ITEMS_TO_DISPLAY + 1).map((item, index) => (
                      <DropdownMenuItem key={index}>
                        <Link href={item.url}>{item.title}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Drawer open={open} onOpenChange={setOpen}>
                  <DrawerTrigger>
                    <BreadcrumbEllipsis className="h-4 w-4" />
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Навигация</DrawerTitle>
                    </DrawerHeader>
                    <div className="grid gap-2 px-4">
                      {currentBreadcrumbs.slice(1, -ITEMS_TO_DISPLAY + 1).map((item, index) => (
                        <Link key={index} href={item.url} className="py-2 text-sm">
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </DrawerContent>
                </Drawer>
              )}
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        ) : null}

        {currentBreadcrumbs.slice(-ITEMS_TO_DISPLAY).map((item, index, array) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {index < array.length - 1 ? (
                <BreadcrumbLink asChild>
                  <Link href={item.url}>{item.title}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.title}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < array.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
