import { BackgroundGradientAnimation } from "@workspace/ui/components/aceternity-ui/background-gradient-animation";
import { SearchInput } from "./search-input";

export default function Hero() {
  return (
    <section className="md:py-8 sm:px-4">
      <div className="container relative">
        <BackgroundGradientAnimation />

        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="font-bold whitespace-pre-line text-[42px] md:text-6xl lg:text-7xl text-background">
                Icons and Design Assets, 
                <br />
                Freshly picked
              </p>
              <p className="text-lg whitespace-pre-line md:text-xl text-background">
                Premium icons, high-quality assets, and creative resources — all
                in one place.
                <br />
                Perfectly curated for developers and designers.
              </p>
            </div>
            <SearchInput />
          </div>
        </div>
      </div>
    </section>
  );
}
