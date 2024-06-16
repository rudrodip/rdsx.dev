import Image from "next/image";
import { cn } from "@/lib/utils";
import { Image as ImageType } from "velite";

type PictureProps = {
  image: ImageType;
  imageDark?: ImageType;
  alt: string;
  className?: string;
};

export default function Picture({ image, imageDark, alt, className }: PictureProps) {
  return (
    <>
      <Image
        src={image.src}
        alt={alt}
        width={image.width}
        height={image.height}
        className={cn(imageDark && "block dark:hidden", className)}
        blurDataURL={image.blurDataURL}
        placeholder="blur"
      />
      {imageDark && <Image
        src={imageDark.src}
        alt={alt}
        width={imageDark.width}
        height={imageDark.height}
        className={cn("hidden dark:block", className)}
        blurDataURL={imageDark.blurDataURL}
        placeholder="blur"
      />}
    </>
  );
}