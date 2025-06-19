import Image from "next/image";

interface FeaturesCardProps {
  imageUrl: string;
  alt: string;
  title: string;
  description: string;
}

export default function OnboardingStepsCard({
  imageUrl,
  alt,
  title,
  description,
}: FeaturesCardProps) {
  return (
    <div className="flex flex-col items-center text-center px-4">
      <Image src={imageUrl} alt={alt} width={70} height={70} className="mb-4 lg:mb-6" />
      <h3 className="text-xl sm:text-2xl xl:text-3xl mb-4 lg:mb-6 max-w-[200px] sm:max-w-[240px] xl:max-w-[300px]">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-muted-foreground max-w-[450px]">{description}</p>
    </div>
  );
}
