import { CardGallery } from "@/components/card-gallery";
import React from "react";
import { Asset } from "@workspace/shared/types";
import { Input } from "@workspace/ui/components/input";
import { Button } from "@workspace/ui/components/button";
import { Newsletter } from "@/components/newsletter";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  const q = params.q?.toString() || "";
  const type = params.type?.toString() || "";
  const featured = params.featured?.toString() || "";
  const sort = params.sort?.toString() || "";

  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const url = new URL(`${baseUrl}/api/assets/search`);
  if (q) url.searchParams.set("q", q);
  if (type) url.searchParams.set("type", type);
  if (featured) url.searchParams.set("featured", featured);
  if (sort) url.searchParams.set("sort", sort);

  const res = await fetch(url.toString(), { cache: "no-store" });
  const results: Asset[] = await res.json();

  return (
    <section className="container px-4">
      <form
        action="/search"
        method="get"
        className="mb-4 flex gap-4 items-center"
      >
        <Input
          name="q"
          defaultValue={q}
          type="search"
          placeholder="Search assets"
        />
        <Button type="submit">Search</Button>
      </form>

      {results.length === 0 && <p>No results found</p>}

      <CardGallery assets={results} />
      <Newsletter />
    </section>
  );
}
