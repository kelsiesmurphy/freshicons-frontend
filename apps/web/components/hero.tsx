import { BackgroundGradientAnimation } from "@workspace/ui/components/aceternity-ui/background-gradient-animation";

export default function Hero() {
  return (
    <section className="py-8">
      <div className="container">
        <BackgroundGradientAnimation>
          <div className="absolute z-50 text-background inset-0 flex items-center justify-center text-center px-4 pointer-events-none ">
            <div className="space-y-6">
              <p className="font-bold text-3xl md:text-4xl lg:text-7xl">
                Design assets,
                <br />
                curated for you.
              </p>
              <p className="text-xl">
                Premium icons, high-quality assets, and creative resources — all
                in one place.
                <br />
                Perfectly curated for developers and designers.
              </p>
            </div>
          </div>
        </BackgroundGradientAnimation>
      </div>
    </section>
  );
}
