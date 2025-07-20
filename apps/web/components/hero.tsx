import { BackgroundGradientAnimation } from "@workspace/ui/components/aceternity-ui/background-gradient-animation";
import { SearchInput } from "./search-input";

export default function Hero() {
  return (
    <section className="md:py-8 sm:px-4 relative">
      <div className="container relative">
        <BackgroundGradientAnimation />

        <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-4">
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="font-bold text-[42px] md:text-6xl lg:text-7xl text-background">
                Design assets,
                <br />
                curated for you.
              </p>
              <p className="text-lg md:text-xl text-background">
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
