"use client";

import React from "react";
import Banner from "@/Common/Banner";
import TimelineJourney from "@/components/Journey /TimelineJourney";
import { dummyTimelineSteps } from "@/components/Journey /data/dummyTimeline";

export default function HomePage() {
  return (
    <div className="font-sans">
      <Banner />
      <div className="mt-24">
        <TimelineJourney steps={dummyTimelineSteps} />
      </div>
    </div>
  );
}


