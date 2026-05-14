import { ExternalLink } from "@/components/ExternalLink";

type Source = {
  label: string;
  url: string;
};

export function SourceList({ sources }: { sources: Source[] }) {
  return (
    <section className="surface-card rounded-[2rem] p-7">
      <p className="inline-flex rounded-full border border-brand/15 bg-brand/5 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-brand">
        Fontes e links oficiais
      </p>
      <p className="mt-3 text-sm leading-7 text-muted">
        Links externos são marcados como nofollow/sponsored. Confirme sempre os termos oficiais
        antes de enviar tráfego.
      </p>
      <div className="mt-5 grid gap-3">
        {sources.map((source) => (
          <ExternalLink
            key={source.url}
            href={source.url}
            className="rounded-2xl bg-cream/80 p-4 text-sm font-black text-ink transition hover:bg-brand hover:text-white"
          >
            {source.label}
          </ExternalLink>
        ))}
      </div>
    </section>
  );
}
