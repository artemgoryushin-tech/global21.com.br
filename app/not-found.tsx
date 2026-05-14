import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-24 text-center">
      <div className="surface-card-strong rounded-[2rem] p-8 md:p-12">
        <p className="inline-flex rounded-full border border-brand/15 bg-brand/5 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-brand">404</p>
        <h1 className="mt-5 text-balance text-5xl font-black tracking-tight text-ink">Página não encontrada</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted">
          O conteúdo pode ter sido movido ou ainda não publicado.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-ink"
        >
          Voltar para a home
        </Link>
      </div>
    </section>
  );
}
