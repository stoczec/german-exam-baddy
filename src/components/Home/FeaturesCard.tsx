import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

interface FeaturesCardProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonTitle: string;
}

export default function FeaturesCard({
  imageUrl,
  title,
  description,
  buttonTitle,
}: FeaturesCardProps) {
  return (
    <div className="overflow-hidden flex flex-col max-w-xs sm:max-w-lg">
      <img src={imageUrl} alt={title} className="max-w-lg object-cover rounded-4xl" />
      <div className="pt-6 flex flex-col flex-grow">
        <h2 className="text-lg sm:text-xl xl:text-2xl text-center mb-2">{title}</h2>
        <p className="text-sm sm:text-base text-center text-muted-foreground flex-grow">
          {description}
        </p>
        <Button variant="ghost" className="mt-4 group text-foreground">
          {buttonTitle}
          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-3" />
        </Button>
      </div>
    </div>
  );
}
