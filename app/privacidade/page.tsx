import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: "Política de privacidade do AfiliadosPro Brasil.",
  alternates: {
    canonical: "/privacidade"
  },
  openGraph: {
    title: "Política de privacidade",
    description: "Política de privacidade do AfiliadosPro Brasil.",
    url: `${siteConfig.domain}/privacidade`
  }
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16">
      <div className="surface-card-strong rounded-[2rem] p-7 md:p-10">
        <p className="inline-flex rounded-full border border-brand/15 bg-brand/5 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-brand">Privacidade</p>
        <h1 className="mt-5 text-balance text-5xl font-black tracking-tight text-ink">Política de privacidade</h1>
        <p className="mt-6 text-lg leading-8 text-muted">
          Esta página resume a política de privacidade para visitantes do site. Antes de produção,
          revise com jurídico os detalhes de cookies, analytics, formulários, retenção de dados e bases legais
          aplicáveis no Brasil.
        </p>
      </div>
    </section>
  );
}
