import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeader } from "@/components/SectionHeader";
import { guides, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Guias de afiliado marketing para trading",
  description:
    "Guias sobre CPA, RevShare, tráfego, compliance e estratégia para afiliados de brokers e trading.",
  alternates: {
    canonical: "/guias"
  },
  openGraph: {
    title: "Guias de afiliado marketing para trading",
    description:
      "Guias sobre CPA, RevShare, tráfego, compliance e estratégia para afiliados de brokers e trading.",
    url: `${siteConfig.domain}/guias`
  }
};

export default function GuidesIndexPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Guias para afiliados financeiros",
          url: `${siteConfig.domain}/guias`,
          mainEntity: {
            "@type": "ItemList",
            itemListElement: guides.map((guide, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: guide.title,
              url: `${siteConfig.domain}/guias/${guide.slug}`
            }))
          }
        }}
      />
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="surface-card-strong rounded-[2rem] p-7 md:p-10">
          <SectionHeader
            eyebrow="Guias"
            title="Guias práticos para afiliados financeiros"
            description="Aprenda a avaliar ofertas, estruturar funis, gerar tráfego e reduzir riscos no nicho financeiro."
            titleAs="h1"
          />
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guias/${guide.slug}`}
              className="surface-card group rounded-[1.75rem] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <p className="text-xs font-black uppercase tracking-[0.16em] text-accent">
                {guide.keyword}
              </p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-ink group-hover:text-brand">{guide.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
