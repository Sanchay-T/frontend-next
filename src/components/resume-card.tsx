import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle: string;
  href?: string;
  badges?: string[];
  type?: string[];
  start: string;
  end: string;
  description?: string; // Make description optional
  location: string;
}

const formatDate = (date: string | undefined | null) => {
  if (!date) return '';
  const parts = date.split(' ');
  if (parts.length === 2) {
    return `${parts[0].substring(0, 3)} ${parts[1]}`;
  }
  return date;
};

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  type,
  start,
  end,
  description,
  location,
}: ResumeCardProps) => {
  const isLeadershipRole = type?.includes('Leadership');

  const CardWrapper = ({ children }: { children: React.ReactNode }) => 
    href ? (
      <Link href={href} className="block cursor-pointer">
        {children}
      </Link>
    ) : (
      <>{children}</>
    );

  return (
    <CardWrapper>
      <Card className={`flex p-4 ${isLeadershipRole ? 'border-yellow-500 border-2' : ''}`}>
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
                {isLeadershipRole && (
                  <Badge
                    variant="outline"
                    className="ml-2 text-xs bg-yellow-100 text-yellow-800 border-yellow-300"
                  >
                    Leadership Role
                  </Badge>
                )}
                {badges && badges.length > 0 && (
                  <span className="inline-flex gap-x-1 ml-2">
                    {badges.map((badge, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="align-middle text-xs"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                {href && <ChevronRightIcon className="size-4 ml-1 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />}
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right whitespace-nowrap">
                {formatDate(start)} - {formatDate(end)}
              </div>
            </div>
            <div className="font-sans text-xs mt-1">
              {subtitle} • {location}
            </div>
          </CardHeader>
          <CardContent className="p-0 text-xs sm:text-sm">
            {description}
          </CardContent>
        </div>
      </Card>
    </CardWrapper>
  );
};