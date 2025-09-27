import React from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import Link from "next/link";

type WorkCardProps = {
  companyLogo: string;
  altText: string;
  title: string;
  subtitle: string;
  href: string;
  period: string;
};

function WorkCard({
  companyLogo,
  altText,
  title,
  subtitle,
  href,
  period,
}: WorkCardProps) {
  return (
    <Link href={href} target="_blank" className="no-underline">
      <Card className="flex items-center gap-4 p-4 border hover:shadow-md transition-shadow">
        {/* Logo */}
        <Avatar className="w-16 h-16 shrink-0">
          <AvatarImage src={companyLogo} alt={altText} />
          <AvatarFallback className="text-sm font-semibold">
            {altText?.charAt(0) ?? "?"}
          </AvatarFallback>
        </Avatar>

        {/* Content */}
        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-start">
            <h1 className="text-lg font-bold">{title}</h1>
            <span className="text-xs sm:text-sm text-muted-foreground font-medium">
              {period}
            </span>
          </div>
          <h2 className="text-sm text-muted-foreground">{subtitle}</h2>
        </div>
      </Card>
    </Link>
  );
}

export default WorkCard;
