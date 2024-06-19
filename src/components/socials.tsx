import { Button } from "@/components/ui/button";
import { IconMap } from "./icon-map";
import { portfolioConfig } from "@/config/portfolio.config";

export const Socials = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        size="sm"
        className="shadow-none hover:bg-background hover:text-primary border border-transparent hover:border hover:border-b-4 hover:border-primary/30 active:border-b transition-all"
      >
        <a href="https://cal.com/rds_agi" target="_blank">
          Schedule a call
        </a>
      </Button>
      <Button
        size="sm"
        variant="outline"
        className="active:border-b active:scale-[0.97] hover:border-b-4 hover:border-primary/30 hover:bg-background shadow-none transition-all duration-100"
      >
        <a
          href={portfolioConfig.resume}
          target="_blank"
        >
          Resume
        </a>
      </Button>
      {Object.keys(portfolioConfig.links).map((key: string, index: number) => {
        const link = portfolioConfig.links[key as keyof typeof portfolioConfig.links];
        return (
          <a key={key} href={link} target="_blank" className="social-link">
            {IconMap[key as keyof typeof IconMap]}
            <span className="sr-only">
              {`${key} - ${link}`}
            </span>
          </a>
        );
      })}
    </div>
  );
};
