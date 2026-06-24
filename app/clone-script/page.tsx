import type { Metadata } from "next";
import Link from "next/link";
import { BeBrokerCTA } from "@/components/BeBrokerCTA";
import { BrandLogo } from "@/components/BrandLogo";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeader } from "@/components/SectionHeader";
import { cloneScriptPages, siteConfig } from "@/data/site";

const pageTitle = "Clone scripts para plataformas de trading, brokers e cripto";
const pageDescription =
  "Compare clone scripts para trading, brokers forex, opções digitais e cripto, com alternativa white label, módulos de lançamento, compliance e operação com marca própria.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/clone-script"
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteConfig.domain}/clone-script`
  }
};

export default function CloneScriptIndexPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: pageTitle,
          description: pageDescription,
          url: `${siteConfig.domain}/clone-script`,
          mainEntity: {
            "@type": "ItemList",
            itemListElement: cloneScriptPages.map((page, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: page.title,
              url: `${siteConfig.domain}/clone-script/${page.slug}`
            }))
          }
        }}
      />
      <section className="mx-auto grid max-w-7xl items-start gap-8 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_0.42fr]">
        <div>
          <div className="surface-card-strong rounded-[2rem] p-7 md:p-10">
            <SectionHeader
              eyebrow="Clone script e white label"
              title="Clone scripts para plataformas de trading, brokers e cripto"
              description="Use buscas por Binomo clone script, Quotex clone script, Binance clone script e termos parecidos para estruturar uma plataforma original: traderoom, CRM, pagamentos, KYC/AML, afiliados, reporting e compliance."
              titleAs="h1"
            />
            <div className="mt-7 rounded-3xl bg-cream/80 p-5">
              <p className="text-sm font-bold leading-7 text-muted">
                O termo clone script aparece em buscas comerciais, mas a abordagem segura é white label:
                não copiar logotipo, layout, domínio, materiais ou propriedade intelectual de Binomo,
                Pocket Option, Quotex, IQ Option, Binance, Exness ou qualquer outra marca.
              </p>
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {[
                ["Opções digitais", "Traderoom, conta demo/real, CRM, pagamentos, afiliados e mensagens de risco."],
                ["Broker forex", "Gabinete do trader, IB, KYC, pagamentos, relatórios e governança de parceiros."],
                ["Cripto", "Wallet, ledger, segurança, KYC/AML, referral, monitoramento e suporte operacional."]
              ].map(([title, copy]) => (
                <div key={title} className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-sm font-black text-ink">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {cloneScriptPages.map((page) => (
              <Link
                key={page.slug}
                href={`/clone-script/${page.slug}`}
                className="surface-card group rounded-[1.75rem] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <BrandLogo slug={page.brandSlug} name={page.brandName} size="sm" />
                  <div className="min-w-0">
                    <p className="text-xs font-black uppercase leading-5 tracking-[0.08em] text-brand">
                      {page.keyword}
                    </p>
                    <h2 className="mt-2 text-balance text-2xl font-black tracking-tight text-ink group-hover:text-brand">
                      {page.brandName} clone script
                    </h2>
                  </div>
                </div>
                <p className="mt-5 text-sm font-bold leading-7 text-muted">{page.description}</p>
                <div className="mt-5 grid gap-3">
                  <div className="rounded-2xl bg-cream/80 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.08em] text-muted">Modelo</p>
                    <p className="mt-2 text-sm font-black leading-6 text-ink">{page.productModel}</p>
                  </div>
                  <div className="rounded-2xl bg-white p-4">
                    <p className="text-xs font-black uppercase tracking-[0.08em] text-muted">Uso correto</p>
                    <p className="mt-2 text-sm font-bold leading-6 text-muted">
                      Marca, cores, domínio e operação próprios via white label.
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:sticky lg:top-24">
          <BeBrokerCTA compact />
        </div>
      </section>
    </>
  );
}
