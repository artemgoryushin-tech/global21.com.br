import Image from "next/image";
import Link from "next/link";
import { navigation, siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-black tracking-tight text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
        >
          <Image
            src="/logo.png"
            alt={`${siteConfig.name} logo`}
            width={40}
            height={40}
            className="h-10 w-10 rounded-2xl shadow-soft"
            priority
          />
          <span>{siteConfig.name}</span>
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-line bg-white/80 p-1 text-sm font-bold text-muted shadow-sm lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 transition hover:bg-cream hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <details className="group relative lg:hidden">
          <summary className="list-none rounded-full border border-line bg-white px-4 py-2 text-sm font-black text-ink shadow-sm transition hover:border-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand">
            Menu
          </summary>
          <div className="absolute right-0 top-12 z-50 w-64 rounded-3xl border border-line bg-white p-3 shadow-soft">
            <nav className="grid gap-1 text-sm font-black text-ink">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 transition hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </details>
        <Link
          href="/white-label/solucao-white-label-para-broker#lead-form"
          className="hidden rounded-full bg-ink px-4 py-2.5 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand sm:inline-flex"
        >
          Ir para o próximo nível
        </Link>
      </div>
    </header>
  );
}
