import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Sobre o AfiliadosPro Brasil, um hub editorial sobre marketing de afiliados para brokers, trading e fintech.",
  alternates: {
    canonical: "/sobre"
  },
  openGraph: {
    title: "Sobre",
    description:
      "Sobre o AfiliadosPro Brasil, um hub editorial sobre marketing de afiliados para brokers, trading e fintech.",
    url: `${siteConfig.domain}/sobre`
  }
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16">
      <div className="surface-card-strong rounded-[2rem] p-7 md:p-10">
        <p className="inline-flex rounded-full border border-brand/15 bg-brand/5 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-brand">Sobre</p>
        <h1 className="mt-5 text-balance text-5xl font-black tracking-tight text-ink">Um hub para afiliados financeiros</h1>
        <p className="mt-6 text-lg leading-8 text-muted">
          AfiliadosPro Brasil publica rankings, análises e guias para quem trabalha com tráfego
          financeiro, brokers, forex, trading e fintech. O objetivo é ajudar o leitor a comparar
          programas com mais contexto e menos promessas exageradas.
        </p>
        <p className="mt-4 text-lg leading-8 text-muted">
          O site também cobre soluções white label porque afiliados experientes podem evoluir de
          promover ofertas de terceiros para construir uma marca própria.
        </p>
      </div>
    </section>
  );
}
