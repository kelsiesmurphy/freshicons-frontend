import { Bento } from "@/components/bento";
import Hero from "@/components/hero";
import { Newsletter } from "@/components/newsletter";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ canceled?: string }>;
}) {
  const { canceled } = await searchParams;

  if (canceled) {
    console.log(
      "Order canceled -- continue to shop around and checkout when you're ready."
    );
  }
  return (
    <>
      <Hero />
      <Bento />
      <Newsletter />
    </>
  );
}
