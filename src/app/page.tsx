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
        <Label htmlFor="checkbox">Checkbox</Label>
      </div>
      <Separator />
      <div>
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Compact</Label>
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
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
