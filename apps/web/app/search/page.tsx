import { CardGallery } from "@/components/card-gallery";
import React from "react";
import { Asset } from "@workspace/shared/types";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const q = (await searchParams)?.q?.toString() || "";

  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

  const res = await fetch(
    q
      ? `${baseUrl}/api/assets/search?q=${encodeURIComponent(q)}`
      : `${baseUrl}/api/assets/search`,
    { cache: "no-store" }
  );

  const results: Asset[] = await res.json();

  return (
    <section className="container px-4">
      <form action="/search" method="get" className="mb-4">
        <input
          name="q"
          defaultValue={q}
          type="search"
          placeholder="Search assets"
          className="border p-2 w-full"
        />
        <button type="submit" className="mt-2 btn">
          Search
        </button>
      </form>

      {results.length === 0 && q && <p>No results found</p>}

      <ul>
        {results.map((asset) => (
          <li key={asset.id}>
            <strong>{asset.name}</strong> — {asset.description}
          </li>
        ))}
      </ul>
      <CardGallery assets={results} />
    </section>
  );
}
