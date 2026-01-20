import Image from "next-image-export-optimizer";
import HorizontalLogoBlack from "@/../public/horizontal_logo_black.webp";

type EventBannerProps = {
  title: string;
  image?: string;
  width?: number;
  height?: number;
};

export default function EventBanner({
  title,
  image,
  width,
  height,
}: EventBannerProps) {
  // Event banners are in cards that are below the fold, so use lazy loading
  if (image && width && height) {
    return (
      <Image
        src={image}
        className="block mx-auto w-auto h-full object-contain"
        alt={title}
        width={width}
        height={height}
        loading="lazy"
        basePath={process.env.__NEXT_ROUTER_BASEPATH}
      />
    );
  } else {
    return (
      <Image
        src={HorizontalLogoBlack}
        className="block mx-auto w-auto h-full object-contain"
        alt="CSSU placeholder logo"
        width={3990}
        height={1110}
        loading="lazy"
        basePath={process.env.__NEXT_ROUTER_BASEPATH}
      />
    );
  }
}
