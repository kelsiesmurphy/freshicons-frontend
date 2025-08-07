import PurchaseButton from "@/components/purchase-button";
import { Asset } from "@workspace/shared/types";
import Image from "next/image";

export default async function IconPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const url = new URL(`${baseUrl}/api/assets/${slug}`);

  

  const res = await fetch(url.toString(), { cache: "no-store" });
  const asset: Asset = await res.json();

  return (
    <div>
      <p>Icon: {asset.name}</p>
      <Image
        src={asset.preview_url}
        alt={asset.name}
        width={100}
        height={100}
      />
      <p>Description: {asset.description}</p>
      <PurchaseButton />
    </div>
  );
}
