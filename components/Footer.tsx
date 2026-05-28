import Image from "next/image";
import Link from "next/link";
import { navigation, siteConfig } from "@/data/site";

const legalLinks = [
  { label: "Metodologia", href: "/metodologia" },
  { label: "Divulgação", href: "/divulgacao" },
  { label: "Privacidade", href: "/privacidade" },
  { label: "Contato", href: "/contato" }
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt={`${siteConfig.name} logo`}
              width={40}
              height={40}
              className="h-10 w-10 rounded-2xl"
            />
            <p className="text-xl font-black">{siteConfig.name}</p>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
            Conteúdo editorial para afiliados brasileiros que comparam programas de brokers,
            forex, trading e fintech. Não oferecemos consultoria financeira.
          </p>
        </div>
        <div>
          <p className="font-bold">Navegação</p>
          <div className="mt-4 grid gap-3 text-sm font-semibold text-white/70">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:translate-x-1 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold">Confiança</p>
          <div className="mt-4 grid gap-3 text-sm font-semibold text-white/70">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:translate-x-1 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
