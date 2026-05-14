const criteria = [
  "Modelo de comissão e previsibilidade de pagamento",
  "Reputação da marca e transparência dos termos",
  "Qualidade do rastreamento, painel e materiais promocionais",
  "Geos aceitos, métodos de pagamento e restrições de tráfego",
  "Risco regulatório e clareza de compliance"
];

export function MethodologyBlock() {
  return (
    <section className="surface-card rounded-[2rem] p-7 md:p-10">
      <p className="inline-flex rounded-full border border-brand/15 bg-brand/5 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-brand">
        Metodologia editorial
      </p>
      <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-ink">
        Como avaliamos programas de afiliados
      </h2>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {criteria.map((criterion, index) => (
          <div key={criterion} className="flex gap-3 rounded-2xl bg-cream/80 p-4 text-sm font-bold text-ink">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-xs font-black text-brand">
              {index + 1}
            </span>
            {criterion}
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm leading-7 text-muted">
        As análises são informativas e devem ser validadas com os termos oficiais de cada programa.
        Produtos financeiros e trading envolvem risco, e nenhuma página promete ganhos garantidos.
      </p>
    </section>
  );
}
