import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  start: string;
  end: string;
  description?: string;
  location: string;
}

const formatDate = (date: string | undefined | null) => {
  if (!date) return '';
  const parts = date.split(' ');
  if (parts.length === 2) {
    // If date includes month and year
    return `${parts[0].substring(0, 3)} ${parts[1]}`;
  }
  // If it's just "Present" or any other format, return as is
  return date;
};

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  start,
  end,
  description,
  location,
}: ResumeCardProps) => {
  return (
    <Link href={href || "#"} className="block cursor-pointer">
      <Card className="flex p-4">
        <div className="flex-none mr-4">
          <Avatar className="border size-12 bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow">
          <CardHeader className="p-0 mb-2">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1 ml-2">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon className="size-4 ml-1 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right whitespace-nowrap">
                {formatDate(start)} - {formatDate(end)}
              </div>
            </div>
            {subtitle && (
              <div className="font-sans text-xs mt-1">
                {subtitle} • {location}
              </div>
            )}
          </CardHeader>
          <CardContent className="p-0 text-xs sm:text-sm">
            {description}
          </CardContent>
        </div>
      </Card>
    </Link>
  );
};
