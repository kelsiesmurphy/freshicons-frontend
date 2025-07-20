import { Bento } from "@/components/bento";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Newsletter } from "@/components/newsletter";

export default function Page() {
  return (
    <div className="flex flex-col min-h-svh">
      <Navigation />
      <Hero />
      <Bento />
      <Newsletter />
      <Footer />
    </div>
  );
}
