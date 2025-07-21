import { Button } from "@workspace/ui/components/button";

export default function SkipToContent() {
  return (
    <div className="absolute z-50 top-6 left-4">
      <Button variant="wordmark" asChild>
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only px-4 py-2 focus-visible:px-4 focus-visible:py-2"
        >
          Skip to Content
        </a>
      </Button>
    </div>
  );
}
