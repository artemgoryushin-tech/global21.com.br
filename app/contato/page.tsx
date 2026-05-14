import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com AfiliadosPro Brasil.",
  alternates: {
    canonical: "/contato"
  },
  openGraph: {
    title: "Contato",
    description: "Entre em contato com AfiliadosPro Brasil.",
    url: `${siteConfig.domain}/contato`
  }
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16">
      <div className="surface-card-strong rounded-[2rem] p-7 md:p-10">
        <p className="inline-flex rounded-full border border-brand/15 bg-brand/5 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-brand">Contato</p>
        <h1 className="mt-5 text-balance text-5xl font-black tracking-tight text-ink">Fale com a equipe</h1>
        <p className="mt-6 text-lg leading-8 text-muted">
          Para parcerias, correções editoriais ou oportunidades comerciais, envie uma mensagem
          com contexto sobre o programa, página ou proposta.
        </p>
        <a
          href="mailto:contato@afiliadosprobr.com"
          className="mt-7 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
        >
          contato@afiliadosprobr.com
        </a>
      </div>
    </section>
  );
}
