import EventCard from "./EventCard";
import { EVENTS_DATA, POSTS_DATA, type EventItem } from "@/data/events";
import { EVENT_CARDS_PER_ROW } from "@/config/constants";

type EventsPageProps = {
  pageType: string;
  pageTitle: string;
};

/**
 * Gets the appropriate event/post data based on page type
 */
function getAllFrontMatter(pageType: string): EventItem[] {
  return pageType === "posts" ? POSTS_DATA : EVENTS_DATA;
}

// Groups an array into subarrays of a given size.
function groupBy<T>(arr: T[], groupSize: number): T[][] {
  const groups: T[][] = [];
  for (let i = 0; i < arr.length; i += groupSize) {
    groups.push(arr.slice(i, i + groupSize));
  }
  return groups;
}

// Converts folder path and image name to image paths.
function mapToImage(mdxFolderPath: string, summaryImage: string) {
  const nextImagePath = `${mdxFolderPath}/${summaryImage}`;
  const absoluteImagePath = nextImagePath;
  return { nextImagePath, absoluteImagePath };
}

export default function EventsPage({ pageType, pageTitle }: EventsPageProps) {
  const frontMatters = getAllFrontMatter(pageType);
  const groupedFrontMatters = groupBy(frontMatters, EVENT_CARDS_PER_ROW);

  return (
    <section className="block py-12 px-6 lg:py-36 lg:px-6 fadeIn">
      <div className="section-container">
        <h1 className="title section-title">{pageTitle}</h1>
        <div className="subtitle text-xl text-[#999]"></div>
        <div className="h-[3px] rounded-[50px] bg-black w-[60px]"></div>
        <div className="block py-12 px-6">
          {groupedFrontMatters.map((group, index) => (
            <div
              key={index}
              className="ml-[-0.75rem] mr-[-0.75rem] mt-[-0.75rem] last:mb-[-0.75rem] md:flex"
            >
              {group.map((event, innerIndex) => {
                // When not using mdxFolderPath (i.e. for posts) image might be optional
                const { nextImagePath } =
                  event.mdxFolderPath && event.frontMatter.summaryImage
                    ? mapToImage(
                        event.mdxFolderPath,
                        event.frontMatter.summaryImage
                      )
                    : { nextImagePath: undefined };
                return (
                  <EventCard
                    key={`${index}${innerIndex}${event.frontMatter.title}`}
                    contentType={pageType}
                    title={event.frontMatter.title}
                    summary={event.frontMatter.summary}
                    contentSubdirectory={event.eventDirectory}
                    image={nextImagePath}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
