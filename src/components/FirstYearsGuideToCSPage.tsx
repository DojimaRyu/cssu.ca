"use client";

import React, { useEffect, useMemo, useState } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const GITHUB_RAW_BASE = "https://raw.githubusercontent.com/cssu/firstyearguide/main/";

type HastNode = {
  type?: string;
  tagName?: string;
  properties?: { src?: string };
  children?: HastNode[];
};

/** Rewrites relative image URLs to point at the GitHub raw content */
function rehypeRewriteImageUrls() {
  return (tree: { children?: HastNode[] }) => {
    const visit = (node: HastNode) => {
      if (node.type === "element" && node.tagName === "img" && node.properties?.src) {
        const src = String(node.properties.src);
        if (!src.startsWith("http://") && !src.startsWith("https://")) {
          node.properties.src = src.startsWith("/")
            ? GITHUB_RAW_BASE + src.slice(1)
            : GITHUB_RAW_BASE + src;
        }
      }
      for (const child of node.children ?? []) {
        visit(child);
      }
    };
    for (const node of tree.children ?? []) {
      visit(node);
    }
  };
}

export default function FirstYearsGuideToCSPage() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/cssu/firstyearguide/main/FYG.md")
      .then((res) => res.text())
      .then((text) => {
        const withoutFrontmatter = text.replace(/^---[\s\S]*?---\s*/, "").trim();
        setMarkdown(withoutFrontmatter);
      })
      .catch(() => setMarkdown(""));
  }, []);

  const rehypePlugins = useMemo(
    () => [rehypeRaw, rehypeRewriteImageUrls],
    []
  );

  return (
    <section className="block py-12 px-6 lg:py-24 lg:px-6 fadeIn">
      <div className="section-container">
        <div className="mb-8">
          <h1 className="title is-2 section-title">First Year&apos;s Guide to CS</h1>
          <div className="h-[3px] rounded-[50px] bg-black w-[60px] mb-4" />
          <a
            href="https://github.com/cssu/firstyearguide/blob/main/FYG.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0969da] hover:underline text-sm"
          >
            View on GitHub
          </a>
        </div>

        <article
          className="
            prose prose-slate prose-lg max-w-4xl
            prose-headings:font-semibold prose-headings:text-[#1f2328]
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-[#d0d7de]
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-[#1f2328] prose-p:leading-7
            prose-a:text-[#0969da] prose-a:no-underline [&_a:hover]:underline
            prose-blockquote:border-l-[#0969da] prose-blockquote:bg-[#f6f8fa] prose-blockquote:py-0.5 prose-blockquote:not-italic
            prose-strong:text-[#1f2328] prose-strong:font-semibold
            prose-ul:my-4 prose-ol:my-4
            prose-li:my-1
            prose-hr:border-[#d0d7de] prose-hr:my-8
            prose-code:bg-[#afb8c133] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-[#f6f8fa] prose-pre:border prose-pre:border-[#d0d7de]
            [&_img]:rounded-lg [&_img]:border [&_img]:border-[#d0d7de]
          "
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={rehypePlugins}
          >
            {markdown}
          </ReactMarkdown>
        </article>
      </div>
    </section>
  );
}
