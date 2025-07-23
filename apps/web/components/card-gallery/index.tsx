import { Asset } from "@workspace/shared/types";
import { CardGalleryHoverEffect } from "@workspace/ui/components/aceternity-ui/card-gallery-hover-effect";

export function CardGallery({ assets }: { assets: Asset[] }) {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <CardGalleryHoverEffect items={assets} />
    </div>
  );
}
