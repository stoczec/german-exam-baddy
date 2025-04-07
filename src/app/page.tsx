import { ModeToggle } from "@/components";
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
import { SelectTrigger } from "@radix-ui/react-select";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <div>
        <ModeToggle />
      </div>
      <div>
        <Button>Button</Button>
      </div>
      <Separator />
      <div className="flex gap-2">
        <Avatar id="avatar">
          <AvatarImage
            src="https://imgs.search.brave.com/8ylarQ0Xf9DIrDR0ypzj4DPdPWmPmoUhgkhi4SwM8gw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE3/OTk4MjY0L3ZlY3Rv/ci9tYWxlLXVzZXIt/aWNvbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NFJNaHFJ/WGNKTWNGa1JKUHE2/SzhoN296dVVvWmhQ/d0tuaUVrZTZLWWFf/az0"
            alt="avatar"
          />
        </Avatar>
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
          <SelectTrigger className="w-[180px] border cursor-pointer">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple" className="cursor-pointer">
                Apple
              </SelectItem>
              <SelectItem value="banana" className="cursor-pointer">
                Banana
              </SelectItem>
              <SelectItem value="blueberry" className="cursor-pointer">
                Blueberry
              </SelectItem>
              <SelectItem value="grapes" className="cursor-pointer">
                Grapes
              </SelectItem>
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
