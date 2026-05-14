import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { BeBrokerCTA } from "@/components/BeBrokerCTA";
import { FunnelVisual, MetricsVisual } from "@/components/Visuals";
import { editorialProfile, guideDeepDives, guideSeoEnhancements, guides, siteConfig } from "@/data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);

  if (!guide) {
    return {};
  }

  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical: `/guias/${guide.slug}`
    },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: `${siteConfig.domain}/guias/${guide.slug}`
    }
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);

  if (!guide) {
    notFound();
  }

  const pageUrl = `${siteConfig.domain}/guias/${guide.slug}`;
  const deepDive = guideDeepDives[guide.slug];
  const seoEnhancement = guideSeoEnhancements[guide.slug];
  const faqItems = [
    ...(seoEnhancement?.faq ?? []),
    {
      question: "Este conteúdo substitui os termos oficiais dos programas?",
      answer:
        "Não. Use os guias como referência editorial e sempre confirme regras, comissões e restrições diretamente com cada programa."
    },
    {
      question: "Por que white label (marca branca) aparece em um site de afiliados?",
      answer:
        "Porque afiliados experientes muitas vezes já possuem a parte mais difícil do negócio: aquisição de usuários. White label pode ser uma evolução natural."
    }
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          "@id": `${pageUrl}#article`,
          headline: guide.title,
          description: guide.description,
          url: pageUrl,
          image: `${siteConfig.domain}/illustrations/stock-market-monetization.jpg`,
          mainEntityOfPage: pageUrl,
          datePublished: editorialProfile.lastUpdated,
          dateModified: editorialProfile.lastUpdated,
          inLanguage: "pt-BR",
          isPartOf: {
            "@type": "WebSite",
            "@id": `${siteConfig.domain}#website`,
            name: siteConfig.name,
            url: siteConfig.domain
          },
          author: {
            "@type": "Organization",
            name: editorialProfile.author,
            url: `${siteConfig.domain}${editorialProfile.policyUrl}`
          },
          publisher: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.domain
          }
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer }
          }))
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: siteConfig.domain },
            { "@type": "ListItem", position: 2, name: "Guias", item: `${siteConfig.domain}/guias` },
            { "@type": "ListItem", position: 3, name: guide.title, item: `${siteConfig.domain}/guias/${guide.slug}` }
          ]
        }}
      />
      <article className="mx-auto max-w-5xl px-5 py-16">
        <p className="inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-accent">
          {guide.keyword}
        </p>
        <h1 className="mt-5 text-balance text-5xl font-black tracking-tight text-ink">{guide.title}</h1>
        <p className="mt-6 text-xl leading-9 text-muted">{guide.description}</p>
        <p className="mt-5 text-sm font-semibold leading-7 text-muted">
          Por {editorialProfile.author}. Atualizado em {editorialProfile.lastUpdated}.
        </p>

        {deepDive ? (
          <section className="surface-card-strong mt-10 rounded-[2rem] p-7 md:p-10">
            <p className="inline-flex rounded-full border border-brand/15 bg-brand/5 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-brand">
              Guia prático
            </p>
            <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-ink">
              Antes de aplicar
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted">{deepDive.intro}</p>
          </section>
        ) : null}

        <div className="mt-12 grid gap-6">
          {(seoEnhancement?.expandedSections ?? guide.sections.map((section) => ({ title: "Aprofunde a estratégia", body: section }))).map((section, index) => (
            <section key={`${section.title}-${index}`} className="surface-card rounded-[2rem] p-7">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-brand">
                Ponto {index + 1}
              </p>
              <h2 className="mt-3 text-balance text-3xl font-black tracking-tight text-ink">
                {section.title}
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">{section.body}</p>
            </section>
          ))}
        </div>

        {seoEnhancement ? (
          <section className="surface-card mt-12 rounded-[2rem] p-7">
            <h2 className="text-balance text-3xl font-black tracking-tight text-ink">
              Próximas leituras recomendadas
            </h2>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {seoEnhancement.internalLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl bg-cream/80 p-4 text-sm font-black text-ink transition hover:bg-brand hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <div className="mt-12">
          {guide.slug.includes("cpa") || guide.slug.includes("revshare") ? (
            deepDive ? (
              <MetricsVisual metrics={deepDive.metrics} />
            ) : null
          ) : (
            <FunnelVisual />
          )}
        </div>

        {deepDive ? (
          <section className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="surface-card rounded-[2rem] p-7">
              <h2 className="text-2xl font-black tracking-tight text-ink">Checklist</h2>
              <ul className="mt-5 grid gap-3 text-sm leading-7 text-muted">
                {deepDive.checklist.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="surface-card rounded-[2rem] p-7">
              <h2 className="text-2xl font-black tracking-tight text-ink">Erros comuns</h2>
              <ul className="mt-5 grid gap-3 text-sm leading-7 text-muted">
                {deepDive.mistakes.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="surface-card rounded-[2rem] p-7">
              <h2 className="text-2xl font-black tracking-tight text-ink">
                Métricas para acompanhar
              </h2>
              <ul className="mt-5 grid gap-3 text-sm leading-7 text-muted">
                {deepDive.metrics.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-[2rem] border border-line bg-ink p-7 text-white shadow-soft">
              <h2 className="text-2xl font-black tracking-tight">Plano de ação</h2>
              <ol className="mt-5 grid gap-3 text-sm leading-7 text-white/75">
                {deepDive.actionPlan.map((item, index) => (
                  <li key={item}>
                    {index + 1}. {item}
                  </li>
                ))}
              </ol>
            </div>
          </section>
        ) : null}

        <div className="mt-12">
          <BeBrokerCTA />
        </div>

        <div className="mt-12">
          <Faq
            items={faqItems}
          />
        </div>
      </article>
    </>
  );
}
