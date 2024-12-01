import { HeroVideoDialog } from "@/components/animations/hero-video";

export function VideoDialog() {
  return (
    <div className="relative">
      <HeroVideoDialog
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=CSN5uOO3EpI"
        thumbnailSrc="/hero-image.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
