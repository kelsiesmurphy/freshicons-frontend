import { Bento } from "@/components/bento";
import Hero from "@/components/hero";
import { Navigation } from "@/components/navigation";

export default function Page() {
  return (
    <div className="flex flex-col min-h-svh">
      <Navigation />
      <Hero />
      <Bento />
    </div>
  );
}
