import { BlurFade } from "../ui/blur-fade";
import { Link as LinkIcon, PlayCircle } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Card,CardHeader,CardContent,CardDescription,CardFooter,CardTitle
 } from "../ui/card"
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  links: { type: string; href: string; icon: React.ReactNode }[];
  image?: string;
  video?: string | null;
  href?: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  links,
  image,
  video,
  href,
 
}: ProjectCardProps) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    // <BlurFade delay={BLUR_FADE_DELAY * index}>
      <Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
        <Dialog>
          <DialogTrigger asChild>
            <div className="relative w-full h-48 flex-shrink-0">
              {image && !showVideo && (
                <Image
                  src={image}
                  alt={title}
                  layout="fill"
                  objectFit="cover"
                  className="object-top"
                />
              )}
              {video && showVideo && (
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              )}
              {video && !showVideo && (
                <button
                  className="absolute inset-0 flex items-center justify-center bg-black/50 text-white transition-opacity duration-300 opacity-0 hover:opacity-100"
                  onClick={() => setShowVideo(true)}
                >
                  <PlayCircle className="h-16 w-16" />
                </button>
              )}
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
              {links.map((link) => (
                <Button key={link.href} asChild>
                  <Link href={link.href} target="_blank">
                    {link.type}
                  </Link>
                </Button>
              ))}
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <CardHeader>
          <CardTitle className="text-lg line-clamp-1">
            {href ? (
              <Link href={href} target="_blank" className="hover:underline">
                {title}
              </Link>
            ) : (
              title
            )}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-auto flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          {links.map((link) => (
            <Button key={link.href} asChild size="sm" variant="ghost">
              <Link href={link.href} target="_blank">
                <span className="sr-only">Link to {link.type}</span>
                {link.icon}
              </Link>
            </Button>
          ))}
        </CardFooter>
      </Card>
    // </BlurFade>
  );
};
export default ProjectCard