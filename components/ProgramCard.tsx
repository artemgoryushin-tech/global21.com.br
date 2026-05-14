import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { ExternalLink } from "@/components/ExternalLink";
import { brandReviewSeoContent, type Program } from "@/data/site";

export function ProgramCard({ program, rank }: { program: Program; rank?: number }) {
  const brandSeo = brandReviewSeoContent[program.slug];
  const reviewKeyword = brandSeo?.primaryKeyword ?? program.keywords[0];

  return (
    <article className="@container surface-card group flex min-w-0 h-full flex-col rounded-[1.75rem] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="grid grid-cols-1 gap-4 @md:grid-cols-[1fr_auto] @md:items-start">
        <div className="flex min-w-0 items-start gap-3">
          <BrandLogo slug={program.slug} name={program.name} size="sm" />
          <div className="min-w-0">
            <p className="inline-flex rounded-full bg-brand/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-brand">
              {rank ? `#${rank}` : program.category}
            </p>
            <h3 className="mt-4 text-balance text-2xl font-black leading-snug tracking-tight text-ink">
              {program.name}
            </h3>
            <p className="mt-2 text-xs font-black uppercase tracking-[0.14em] text-accent">{reviewKeyword}</p>
          </div>
        </div>
        <span className="rounded-2xl bg-cream px-3 py-2 text-left text-xs font-black leading-5 text-ink @md:max-w-[12rem] @md:justify-self-end">
          {program.payoutModel}
        </span>
      </div>
      <p className="mt-4 text-sm leading-7 text-muted">{program.verdict}</p>
      <dl className="mt-6 grid gap-3 text-sm">
        <div className="rounded-2xl bg-cream/80 p-4">
          <dt className="text-xs font-black uppercase tracking-[0.14em] text-ink">Comissão</dt>
          <dd className="text-muted">{program.commission}</dd>
        </div>
        <div className="rounded-2xl bg-cream/80 p-4">
          <dt className="text-xs font-black uppercase tracking-[0.14em] text-ink">Melhor para</dt>
          <dd className="text-muted">{program.bestFor}</dd>
        </div>
        <div className="rounded-2xl bg-cream/80 p-4">
          <dt className="text-xs font-black uppercase tracking-[0.14em] text-ink">Pagamento</dt>
          <dd className="text-muted">{program.payoutFrequency}</dd>
        </div>
      </dl>
      <div className="mt-auto flex flex-wrap items-center gap-3 pt-6 text-sm font-black">
        <Link
          href={`/reviews/${program.slug}`}
          className="rounded-full bg-brand px-4 py-2.5 text-white transition group-hover:bg-ink"
        >
          Ler análise completa
        </Link>
        <ExternalLink
          href={program.officialUrl}
          className="rounded-full border border-line bg-white px-4 py-2.5 text-muted transition hover:border-ink hover:text-ink"
        >
          Site oficial
        </ExternalLink>
      </div>
    </article>
  );
}
