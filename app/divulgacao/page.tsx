import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Divulgação comercial",
  description: "Política de divulgação comercial e relações de afiliados do AfiliadosPro Brasil.",
  alternates: {
    canonical: "/divulgacao"
  },
  openGraph: {
    title: "Divulgação comercial",
    description: "Política de divulgação comercial e relações de afiliados do AfiliadosPro Brasil.",
    url: `${siteConfig.domain}/divulgacao`
  }
};

export default function DisclosurePage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16">
      <div className="surface-card-strong rounded-[2rem] p-7 md:p-10">
        <p className="inline-flex rounded-full border border-brand/15 bg-brand/5 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-brand">Divulgação</p>
        <h1 className="mt-5 text-balance text-5xl font-black tracking-tight text-ink">Transparência comercial</h1>
        <p className="mt-6 text-lg leading-8 text-muted">
          Algumas páginas podem conter links comerciais, banners ou referências patrocinadas. Isso
          não remove a necessidade de metodologia editorial clara, atualização de dados e divulgação comercial.
        </p>
        <p className="mt-4 text-lg leading-8 text-muted">
          As informações são educacionais. Sempre confirme termos, comissões, disponibilidade por
          país e regras de promoção diretamente com cada programa.
        </p>
        <p className="mt-4 text-lg leading-8 text-muted">
          Links para programas, brokers, exchanges e fornecedores comerciais são tratados como
          externos e marcados com atributos nofollow/sponsored quando aparecem no site.
        </p>
      </div>
    </section>
  );
}
