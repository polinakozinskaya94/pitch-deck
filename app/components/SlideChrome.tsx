interface SlideHeaderProps {
  section: string;
  page: string;
  theme: "light" | "dark";
}

export function SlideHeader({ section, page, theme }: SlideHeaderProps) {
  const isLight = theme === "light";
  return (
    <div
      className="font-primary absolute left-0 right-0 z-20 flex items-center"
      style={{ top: 48, paddingLeft: 80, paddingRight: 120 }}
    >
      <span
        className="text-[14px] font-bold tracking-[2px]"
        style={{ color: isLight ? "#1A1A1A" : "rgba(255,255,255,0.8)" }}
      >
        {section}
      </span>
      <span
        className="ml-[24px] text-[14px] font-normal tracking-[1px]"
        style={{ color: isLight ? "#999999" : "rgba(255,255,255,0.53)" }}
      >
        {page}
      </span>
      <span
        className="ml-auto text-[14px] font-medium"
        style={{ color: isLight ? "#7245ed" : "rgba(255,255,255,0.6)" }}
      >
        ©2026
      </span>
    </div>
  );
}

interface SlideFooterProps {
  page: string;
  theme: "light" | "dark";
}

export function SlideFooter({ page, theme }: SlideFooterProps) {
  const isLight = theme === "light";
  return (
    <p
      className="font-primary absolute z-20 text-[13px] font-normal tracking-[1px]"
      style={{ left: 80, bottom: 40, color: isLight ? "#999999" : "rgba(255,255,255,0.53)" }}
    >
      {page}
    </p>
  );
}
