"use client";

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw"; // <-- important
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "First Year's Guide to CS",
  description: "A Guide for First Year CS Students!",
};

export default function FirstYearsGuideToCS() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/cssu/firstyearguide/main/FYG.md")
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

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
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
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
