import { Button } from "@/components/ui/button";
import {
  TwitterLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  DiscordLogoIcon,
} from "@radix-ui/react-icons";
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
          href="https://raw.githubusercontent.com/rudrodip/rudrodip/main/resume.pdf"
          target="_blank"
        >
          Resume
        </a>
      </Button>
      <a href={portfolioConfig.links.x} target="_blank" className="social-link">
        <TwitterLogoIcon />
      </a>
      <a
        href={portfolioConfig.links.github}
        target="_blank"
        className="social-link"
      >
        <GitHubLogoIcon />
      </a>
      <a
        href={portfolioConfig.links.discord}
        target="_blank"
        className="social-link"
      >
        <DiscordLogoIcon />
      </a>
      <a
        href={portfolioConfig.links.linkedin}
        target="_blank"
        className="social-link"
      >
        <LinkedInLogoIcon />
      </a>
    </div>
  );
};
