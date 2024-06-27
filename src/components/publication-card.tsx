import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface PublicationProps {
  title: string;
  publisher: string;
  url: string;
}

export function PublicationCard({
  title,
  publisher,
  url,
}: PublicationProps) {
  return (
    <li className="relative ml-10 py-4">
      <div className="flex flex-1 flex-col justify-start gap-1">
        <h2 className="font-semibold leading-none">{title}</h2>
        <p className="text-sm text-muted-foreground">{publisher}</p>
      </div>
      <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
        <Link href={url} target="_blank" rel="noopener noreferrer">
          <Badge className="flex gap-2">
            View Publication
          </Badge>
        </Link>
      </div>
    </li>
  );
}