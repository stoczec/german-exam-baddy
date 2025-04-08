import { items } from "@/data";

export function getCurrentBreadcrumbs(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs = [];

  let accumulatedPath = "";
  for (const segment of segments) {
    accumulatedPath += `/${segment}`;
    const matchedItem = items.find((item) => item.url === accumulatedPath);
    if (matchedItem) {
      breadcrumbs.push(matchedItem);
    }
  }

  if (pathname !== "/") {
    breadcrumbs.unshift(items.find((item) => item.url === "/")!);
  }

  return breadcrumbs;
}
