import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BeBrokerCTA } from "@/components/BeBrokerCTA";
import { BrandLogo } from "@/components/BrandLogo";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { cloneScriptPages, editorialProfile, siteConfig } from "@/data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return cloneScriptPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = cloneScriptPages.find((item) => item.slug === slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `/clone-script/${page.slug}`
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${siteConfig.domain}/clone-script/${page.slug}`
    }
  };
}

export default async function CloneScriptPage({ params }: PageProps) {
  const { slug } = await params;
  const page = cloneScriptPages.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  const pageUrl = `${siteConfig.domain}/clone-script/${page.slug}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          "@id": `${pageUrl}#article`,
          headline: page.title,
          description: page.description,
          url: pageUrl,
          datePublished: editorialProfile.lastUpdated,
          dateModified: editorialProfile.lastUpdated,
          inLanguage: "pt-BR",
          mainEntityOfPage: pageUrl,
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
          mainEntity: page.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer
            }
          }))
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: siteConfig.domain },
            { "@type": "ListItem", position: 2, name: "Clone Script", item: `${siteConfig.domain}/clone-script` },
            { "@type": "ListItem", position: 3, name: page.title, item: pageUrl }
          ]
        }}
      />
      <article className="mx-auto max-w-7xl px-5 py-16">
        <header className="surface-card-strong grid items-center gap-8 rounded-[2rem] p-7 md:p-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div>
            <p className="inline-flex rounded-full border border-brand/15 bg-brand/5 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-brand">
              {page.keyword}
            </p>
            <h1 className="mt-5 max-w-5xl text-balance text-5xl font-black tracking-tight text-ink">
              {page.title}
            </h1>
            <p className="mt-6 max-w-4xl text-xl leading-9 text-muted">{page.description}</p>
          </div>
          <div className="visual-card rounded-[2rem] p-6">
            <div className="flex items-center gap-4">
              <BrandLogo slug={page.brandSlug} name={page.brandName} size="md" />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.08em] text-muted">Referência de busca</p>
                <p className="mt-2 text-2xl font-black tracking-tight text-ink">{page.brandName}</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-ink p-5 text-white">
              <p className="text-xs font-black uppercase tracking-[0.08em] text-white/60">Proposta segura</p>
              <p className="mt-3 text-base font-black leading-7">
                White label com marca, cores, domínio e operação próprios.
              </p>
            </div>
          </div>
        </header>

        <div className="mt-10">
          <BeBrokerCTA compact horizontal />
        </div>

        <section className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="surface-card rounded-[1.75rem] p-6">
            <p className="text-xs font-black uppercase tracking-[0.08em] text-brand">Modelo</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-ink">{page.productModel}</h2>
          </div>
          <div className="surface-card rounded-[1.75rem] p-6">
            <p className="text-xs font-black uppercase tracking-[0.08em] text-brand">Melhor para</p>
            <p className="mt-3 text-sm font-bold leading-7 text-muted">{page.bestFor}</p>
          </div>
          <div className="surface-card rounded-[1.75rem] p-6">
            <p className="text-xs font-black uppercase tracking-[0.08em] text-brand">Não é</p>
            <p className="mt-3 text-sm font-bold leading-7 text-muted">
              Cópia de marca, layout, logotipo, domínio ou propriedade intelectual de terceiros.
            </p>
          </div>
        </section>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_0.42fr]">
          <div>
            <div className="grid gap-6">
              {page.sections.map((section) => (
                <section key={section.title} className="surface-card rounded-[2rem] p-7">
                  <h2 className="text-balance text-3xl font-black tracking-tight text-ink">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-muted">{section.body}</p>
                </section>
              ))}
            </div>

            <section className="surface-card mt-8 rounded-[2rem] p-7">
              <h2 className="text-balance text-3xl font-black tracking-tight text-ink">
                O que pode ser personalizado
              </h2>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {page.customization.map((item) => (
                  <div key={item} className="rounded-2xl bg-cream/80 p-4 text-sm font-bold leading-7 text-ink">
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-8 rounded-[2rem] bg-ink p-7 text-white shadow-soft">
              <h2 className="text-balance text-3xl font-black tracking-tight">
                Limites legais e de marca
              </h2>
              <div className="mt-6 grid gap-3">
                {page.legalBoundaries.map((item) => (
                  <div key={item} className="rounded-2xl bg-white/10 p-4 text-sm font-bold leading-7 text-white/80">
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="surface-card mt-8 rounded-[2rem] p-7">
              <h2 className="text-balance text-3xl font-black tracking-tight text-ink">
                Próximas leituras
              </h2>
              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {page.relatedLinks.map((item) => (
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

            <div className="mt-8">
              <Faq items={page.faq} />
            </div>
          </div>
          <div className="lg:sticky lg:top-24">
            <BeBrokerCTA compact formId="lead-form" />
          </div>
        </div>
      </article>
    </>
  );
}
