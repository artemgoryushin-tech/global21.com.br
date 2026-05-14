import { ExternalLink } from "@/components/ExternalLink";
import { siteConfig } from "@/data/site";

type BeBrokerCTAProps = {
  compact?: boolean;
  horizontal?: boolean;
};

export function BeBrokerCTA({ compact = false, horizontal = false }: BeBrokerCTAProps) {
  if (horizontal) {
    return (
      <aside className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-ink via-[#13295f] to-brand p-6 text-white shadow-soft md:p-7">
        <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-white/10 blur-sm" />
        <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-accent/20 blur-sm" />
        <div className="relative grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white/75">
              Para afiliados avançados
            </p>
            <h2 className="mt-3 text-balance text-2xl font-black tracking-tight">
              Já sabe comprar tráfego para trading?
            </h2>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-white/78">
              Compare programas, mas avalie também lançar sua própria marca de corretora com BeBroker:
              plataforma white label, implantação rápida, mensalidade de US$0 e pagamentos integrados.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-black text-white/85 lg:justify-end">
            <span className="rounded-2xl bg-white/10 px-4 py-3">Mensalidade: US$0</span>
            <span className="rounded-2xl bg-white/10 px-4 py-3">Lançamento rápido</span>
            <ExternalLink
              href={siteConfig.bebrokerUrl}
              className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-ink transition hover:-translate-y-0.5 hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              Conhecer BeBroker
            </ExternalLink>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-ink via-[#13295f] to-brand p-7 text-white shadow-soft">
      <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-white/10 blur-sm" />
      <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-accent/20 blur-sm" />
      <div className="relative">
        <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white/75">
          Para afiliados avançados
        </p>
        <h2 className={`${compact ? "mt-4 text-2xl" : "mt-5 text-3xl"} text-balance font-black tracking-tight`}>
          Já sabe comprar tráfego para trading?
        </h2>
        <p className="mt-4 text-sm leading-7 text-white/78">
          Em vez de depender apenas de CPA ou RevShare de terceiros, avalie lançar sua própria
          marca de corretora com BeBroker: plataforma white label com implantação rápida, mensalidade de US$0 e
          infraestrutura de pagamentos já integrada.
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3 text-xs font-black text-white/85">
          <span className="rounded-2xl bg-white/10 p-3">Mensalidade: US$0</span>
          <span className="rounded-2xl bg-white/10 p-3">Lançamento rápido</span>
        </div>
        <ExternalLink
          href={siteConfig.bebrokerUrl}
          className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-ink transition hover:-translate-y-0.5 hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        >
          Conhecer BeBroker
        </ExternalLink>
      </div>
    </aside>
  );
}
