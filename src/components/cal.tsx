"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useTheme } from "next-themes";

export function ScheduleCallPopup() {
  const { theme } = useTheme();
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "meeting" });
      cal("ui", {
        theme: theme === "dark" ? "dark" : "light",
        cssVarsPerTheme: { dark: { "--brand-color": "#000000" }, light: { "--brand-color": "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [theme]);
  return (
    <Button
      data-cal-namespace="meeting"
      data-cal-link="rds-agi/meeting"
      data-cal-config='{"layout":"month_view"}'
      className="shadow-none hover:bg-background hover:text-primary border-[0.3px] border-transparent hover:border-b-4 hover:border-primary/30 active:border-b transition-all"
    >
      Schedule a call
    </Button>
  );
}

export function ScheduleCallFloat() {
  const { theme } = useTheme();
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "meeting" });
      cal("ui", {
        theme: theme === "dark" ? "dark" : "light",
        cssVarsPerTheme: { dark: { "--brand-color": "#000000" }, light: { "--brand-color": "#ffffff" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [theme]);
  return (
    <Button
      data-cal-namespace="meeting"
      data-cal-link="rds-agi/meeting"
      data-cal-config='{"layout":"month_view"}'
      className="group/cal fixed z-50 bottom-5 right-5 w-12 h-12 rounded-full hover:px-4 hover:w-auto p-2 duration-300 transition-all ease-out"
    >
      <div className="flex items-center gap-2">
        <p className="group-hover/cal:block hidden duration-300 transition-all ease-out">Book a call</p>
        <Calendar strokeWidth={1} />
      </div>
    </Button>
  );
}
