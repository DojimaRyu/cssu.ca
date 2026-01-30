import FirstYearsGuideToCS from "@/components/FirstYearsGuideToCSPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "First Year's Guide to CS",
  description: "A Guide for First Year CS Students!",
};

export default function FirstYearsGuideToCSRoute() {
  return <FirstYearsGuideToCS />;
}
