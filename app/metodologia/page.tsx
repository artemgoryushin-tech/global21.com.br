import type { Metadata } from "next";
import { MethodologyBlock } from "@/components/MethodologyBlock";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Metodologia editorial",
  description:
    "Como AfiliadosPro Brasil avalia programas de afiliados para brokers, forex, trading e fintech.",
  alternates: {
    canonical: "/metodologia"
  },
  openGraph: {
    title: "Metodologia editorial",
    description:
      "Como AfiliadosPro Brasil avalia programas de afiliados para brokers, forex, trading e fintech.",
    url: `${siteConfig.domain}/metodologia`
  }
};

export default function MethodologyPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16">
      <div className="surface-card-strong mb-8 rounded-[2rem] p-7 md:p-10">
        <p className="inline-flex rounded-full border border-brand/15 bg-brand/5 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-brand">
          Metodologia
        </p>
        <h1 className="mt-5 text-balance text-5xl font-black tracking-tight text-ink">
          Como avaliamos programas de afiliados
        </h1>
      </div>
      <MethodologyBlock />
    </section>
  );
}
