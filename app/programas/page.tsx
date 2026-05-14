import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeader } from "@/components/SectionHeader";
import { rankings, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Programas de afiliados para brokers, forex e trading",
  description:
    "Rankings e comparativos de programas de afiliados para brokers, forex, trading, cripto e fintech.",
  alternates: {
    canonical: "/programas"
  },
  openGraph: {
    title: "Programas de afiliados para brokers, forex e trading",
    description:
      "Rankings e comparativos de programas de afiliados para brokers, forex, trading, cripto e fintech.",
    url: `${siteConfig.domain}/programas`
  }
};

export default function ProgramsIndexPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Programas de afiliados",
          url: `${siteConfig.domain}/programas`,
          mainEntity: {
            "@type": "ItemList",
            itemListElement: rankings.map((ranking, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: ranking.title,
              url: `${siteConfig.domain}/programas/${ranking.slug}`
            }))
          }
        }}
      />
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="surface-card-strong rounded-[2rem] p-7 md:p-10">
          <SectionHeader
            eyebrow="Programas de afiliados"
            title="Comparativos para escolher uma oferta com menos risco"
            description="Escolha uma categoria para ver comissões, modelos de pagamento, pontos fortes, riscos e alternativas."
            titleAs="h1"
          />
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {rankings.map((ranking) => (
            <Link
              key={ranking.slug}
              href={`/programas/${ranking.slug}`}
              className="surface-card group rounded-[1.75rem] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <p className="text-xs font-black uppercase tracking-[0.16em] text-brand">
                {ranking.keyword}
              </p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-ink group-hover:text-brand">{ranking.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{ranking.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
