"use client";

import React, { useEffect, useState } from "react";

// in particular, these are the new packages we require for the FYG GitHub content
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw"; // <-- important (lol??)

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "First Year's Guide to CS",
  description: "A Guide for First Year CS Students!",
};

export default function FirstYearsGuideToCS() {
  const [markdown, setMarkdown] = useState("");

  // fetch content directly from the GitHub .md file
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/cssu/firstyearguide/main/FYG.md")
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  // by default, we want to display the guide; if we can't, simply attach the GitHub link for reference
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <p className="text-xl mb-4">First Year CS Guide</p>
      <a
        href="https://github.com/cssu/firstyearguide/blob/main/FYG.md"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800 mb-6"
      >
        View on GitHub
      </a>

      <div className="prose prose-lg max-w-3xl w-full">
        {markdown ? (
          <ReactMarkdown // <-- to directly add linked content (images)
            remarkPlugins={[remarkGfm]} // <-- bring in our .md content into HTML
            rehypePlugins={[rehypeRaw]} // <-- enable raw HTML
          >
            {markdown}
          </ReactMarkdown>
        ) : (
          <p className="text-xl text-gray-500">Loading guide...</p>
        )}
      </div>
    </div>
  );
}
