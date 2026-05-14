import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { ProgramCard } from "@/components/ProgramCard";
import { SectionHeader } from "@/components/SectionHeader";
import { brandReviewSeoContent, programs, siteConfig, type BrandReviewSeoContent } from "@/data/site";

const priorityReviewSlugs = [
  "pocket-option-affiliate-program",
  "quotex-affiliate-program",
  "iq-option-affiliate-program",
  "olymp-trade-affiliate-program",
  "deriv-affiliate-program"
];

const sortedPrograms = [
  ...priorityReviewSlugs
    .map((slug) => programs.find((program) => program.slug === slug))
    .filter((program): program is (typeof programs)[number] => Boolean(program)),
  ...programs.filter((program) => !priorityReviewSlugs.includes(program.slug))
];

const priorityKeywordLinks = priorityReviewSlugs
  .map((slug) => ({ slug, content: brandReviewSeoContent[slug] }))
  .filter((item): item is { slug: string; content: BrandReviewSeoContent } => Boolean(item.content));

export const metadata: Metadata = {
  title: "Análises de programas de afiliados para trading e brokers",
  description:
    "Análises PT-BR de programas de afiliados como Pocket Option, Quotex, IQ Option, Olymp Trade, Deriv, Exness, XM e AvaTrade.",
  alternates: {
    canonical: "/reviews"
  },
  openGraph: {
    title: "Análises de programas de afiliados para trading e brokers",
    description:
      "Análises PT-BR de programas de afiliados como Pocket Option, Quotex, IQ Option, Olymp Trade, Deriv, Exness, XM e AvaTrade.",
    url: `${siteConfig.domain}/reviews`
  }
};

export default function ReviewsIndexPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Análises de programas de afiliados para trading e brokers",
          url: `${siteConfig.domain}/reviews`,
          mainEntity: {
            "@type": "ItemList",
            itemListElement: sortedPrograms.map((program, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: program.name,
              url: `${siteConfig.domain}/reviews/${program.slug}`
            }))
          }
        }}
      />
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="surface-card-strong rounded-[2rem] p-7 md:p-10">
          <SectionHeader
            eyebrow="Análises"
            title="Análises de programas de afiliados para trading e brokers"
            description="Reviews em português para buscas de marca: comissão, CPA, RevShare, pagamentos, fontes de tráfego, riscos e alternativas."
            titleAs="h1"
          />
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_0.7fr]">
          <div className="surface-card rounded-[2rem] p-7">
            <h2 className="text-2xl font-black tracking-tight text-ink">
              Comece pelas páginas com maior intenção comercial
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              Estas análises foram priorizadas para consultas como programa de afiliados Pocket Option,
              programa de afiliados Quotex, IQ Option afiliados, Kingfin parceiros e Deriv afiliados.
              O objetivo é responder rápido o que paga, como funciona, quais regras validar e quando
              comparar com alternativas.
            </p>
          </div>
          <div className="surface-card rounded-[2rem] p-7">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-brand">
              Money queries PT-BR
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {priorityKeywordLinks.map(({ slug, content }) => (
                <Link
                  key={content.primaryKeyword}
                  href={`/reviews/${slug}`}
                  className="rounded-full bg-cream px-3 py-1 text-xs font-black text-muted transition hover:bg-brand hover:text-white"
                >
                  {content.primaryKeyword}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedPrograms.map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </div>
      </section>
    </>
  );
}
