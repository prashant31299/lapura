"use client";

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-near-black overflow-hidden" style={{ height: "40px" }}>
      <div className="flex items-center h-full animate-marquee whitespace-nowrap">
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            className="font-dm-mono text-xs text-white tracking-label uppercase mx-8"
          >
            SCIENCE-BACKED FORMULATIONS &nbsp;·&nbsp; COSMETOLOGIST-DEVELOPED &nbsp;·&nbsp; FREE FROM PARABENS &nbsp;·&nbsp; VEGAN &amp; CRUELTY-FREE &nbsp;·&nbsp; GMP CERTIFIED &nbsp;·&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
}
