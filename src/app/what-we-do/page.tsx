import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Goodwill | What we do",
};

export default function WhatWeDoPage() {
  return <ComingSoon title="What we do" />;
}
