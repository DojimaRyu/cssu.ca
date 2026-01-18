/**
 * Event and Post data
 * Used in EventsPage component to display events and posts
 */

export type EventItem = {
  eventDirectory: string;
  mdxFolderPath?: string;
  frontMatter: {
    title: string;
    summary: string;
    summaryImage?: string;
  };
};

/**
 * Posts data for the /posts page
 */
export const POSTS_DATA: EventItem[] = [
  {
    eventDirectory: "faq",
    frontMatter: {
      title: "Frequently Asked Questions",
      summary: "Answering your most popular questions!",
      summaryImage: "faq.jpg",
    },
  },
  {
    eventDirectory: "resources",
    frontMatter: {
      title: "Resources",
      summary: "List of Resources for CS students",
      summaryImage: "resources.jpg",
    },
  },
  {
    eventDirectory: "first-years-guide-to-cs",
    frontMatter: {
      title: "First Years Guide to CS",
      summary: "Everything you need to know for your first year in CS!",
      summaryImage: "first-year-guide.jpg",
    },
  },
];

/**
 * Events data for the /events page
 * TODO: Replace with actual event data or implement dynamic loading from MD files
 */
export const EVENTS_DATA: EventItem[] = [
  {
    eventDirectory: "event1",
    mdxFolderPath: "/events/event1",
    frontMatter: {
      title: "Event One",
      summary: "Summary for event one.",
      summaryImage: "event1.jpg",
    },
  },
  {
    eventDirectory: "event2",
    mdxFolderPath: "/events/event2",
    frontMatter: {
      title: "Event Two",
      summary: "Summary for event two.",
      summaryImage: "event2.jpg",
    },
  },
  {
    eventDirectory: "event3",
    mdxFolderPath: "/events/event3",
    frontMatter: {
      title: "Event Three",
      summary: "Summary for event three.",
      summaryImage: "event3.jpg",
    },
  },
];
