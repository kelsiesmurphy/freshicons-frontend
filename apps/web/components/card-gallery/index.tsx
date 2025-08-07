import { Asset } from "@workspace/shared/types";
import { CardGalleryHoverEffect } from "@workspace/ui/components/aceternity-ui/card-gallery-hover-effect";

type AssetList = Asset[] | { error: string };

export function CardGallery({ assets }: { assets: AssetList }) {
  if (Array.isArray(assets)) {
    if (assets.length === 0) {
      return (
        <div className="max-w-5xl mx-auto px-8 h-96 flex flex-col justify-center text-center py-10">
          <p className="text-lg text-muted-foreground">
            No assets found. Please check back later or explore other
            categories.
          </p>
        </div>
      );
    }

    return (
      <div className="max-w-5xl mx-auto px-8">
        <CardGalleryHoverEffect items={assets} />
      </div>
    );
  } else {
    return (
      <div className="max-w-5xl mx-auto px-8 h-96 flex flex-col justify-center text-center py-10">
        <p className="text-lg text-muted-foreground">
          Error found: {assets.error}
        </p>
      </div>
    );
  }
}
