import Image from "next/image";
import { cn } from "@/lib/utils";
import { Image as ImageType } from "velite";

type PictureProps = {
  image: ImageType;
  imageDark?: ImageType;
  quality?: number;
  width?: number;
  height?: number;
  alt: string;
  className?: string;
};

export default function Picture({ image, imageDark, quality, width, height, alt, className }: PictureProps) {
  return (
    <>
      <Image
        src={image.src}
        alt={alt}
        width={width || image.width}
        height={height || image.height}
        className={cn(imageDark && "block dark:hidden", className)}
        priority
        blurDataURL={image.blurDataURL}
        placeholder="blur"
        quality={quality || 100}
      />
      {imageDark && <Image
        src={imageDark.src}
        alt={alt}
        width={width || imageDark.width}
        height={height || imageDark.height}
        className={cn("hidden dark:block", className)}
        priority
        blurDataURL={imageDark.blurDataURL}
        placeholder="blur"
        quality={quality || 100}
      />}
    </>
  );
}