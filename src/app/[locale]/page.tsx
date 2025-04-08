"use client";

import { LanguageSelect, ModeToggle, NavMenu } from "@/components";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useStore } from "@/store";
import { SelectTrigger } from "@radix-ui/react-select";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

export default function Home() {
  const { isLoading, setIsLoading } = useStore();
  const t = useTranslations("buttons");

  useEffect(() => {
    setIsLoading(false);
    return () => {
      setIsLoading(true);
    };
  }, [setIsLoading]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <div>
        <NavMenu />
      </div>
      <div>{!isLoading ? <LanguageSelect /> : <Skeleton className="w-[180px] h-[36px]" />}</div>
      <div>
        <ModeToggle />
      </div>
      <div className="flex gap-2">
        <Button>{t("add")}</Button>
        <Button>{t("help")}</Button>
      </div>
      <Separator />
      <div className="flex gap-2">
        {!isLoading ? (
          <Avatar id="avatar">
            <AvatarImage
              src="https://imgs.search.brave.com/8ylarQ0Xf9DIrDR0ypzj4DPdPWmPmoUhgkhi4SwM8gw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE3/OTk4MjY0L3ZlY3Rv/ci9tYWxlLXVzZXIt/aWNvbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NFJNaHFJ/WGNKTWNGa1JKUHE2/SzhoN296dVVvWmhQ/d0tuaUVrZTZLWWFf/az0"
              alt="avatar"
            />
          </Avatar>
        ) : (
          <Skeleton className="w-[32px] h-[32px] rounded-full" />
        )}
        <Label htmlFor="avatar">Avatar</Label>
      </div>
      <Separator />

      <div className="flex gap-2">
        <Checkbox id="checkbox" />
        <Label htmlFor="checkbox" className=" cursor-pointer">
          Checkbox
        </Label>
      </div>
      <Separator />
      <div>
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" className=" cursor-pointer" />
            <Label htmlFor="r1" className=" cursor-pointer">
              Default
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" className=" cursor-pointer" />
            <Label htmlFor="r2" className=" cursor-pointer">
              Comfortable
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" className=" cursor-pointer" />
            <Label htmlFor="r3" className=" cursor-pointer">
              Compact
            </Label>
          </div>
        </RadioGroup>
      </div>
      <Separator />
      <div>
        <Select>
          <SelectTrigger className="w-[180px] border">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple" className="cursor-pointer">
                Pineapple
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
