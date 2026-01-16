"use client";

import React from "react";
import GitHubCalendar from "react-github-calendar";
import { BlurFade } from "../ui/blur-fade";
const BLUR_FADE_DELAY = 0.04;



export default function Projects() {
 
 
 

  return (
    <div className="flex flex-col items-center justify-center max-w-[945px] mx-auto gap-6 md:gap-12 p-6 md:p-12">
      <div className="w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-black mb-6 md:mb-8 text-foreground text-left">
           Projects
          </h1>
        </BlurFade>
      </div>
     
    </div>
  );
}
