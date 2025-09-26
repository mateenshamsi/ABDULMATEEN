"use client";

import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import axios from "axios";

interface Repo {
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

interface GitHubProfileProps {
  username: string;
}

export default function GitHubProfile({ username }: GitHubProfileProps) {
 
 
 

  return (
    <div className="flex flex-col items-center gap-8 mx-auto mt-8 w-full max-w-[900px] p-4">
      {/* Streak Badge */}
      <div className="w-full max-w-sm">
        <img
          src={`https://streak-stats.demolab.com/?user=${username}&theme=default&hide_border=true`}
          alt={`${username} GitHub streak`}
          className="w-full h-auto"
        />
      </div>

      {/* Contribution Heatmap (default green) */}
      <div className="w-full overflow-x-auto">
        <GitHubCalendar
          username={username}
          blockSize={14}
          blockMargin={4}
          fontSize={14}
          showWeekdayLabels
        />
      </div>

  
     
    </div>
  );
}
