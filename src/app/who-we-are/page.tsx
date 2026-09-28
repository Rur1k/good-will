import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Goodwill | Who we are",
};

export default function WhoWeArePage() {
  return <ComingSoon title="Who we are" />;
}
