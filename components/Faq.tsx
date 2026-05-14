export type FaqItem = {
  question: string;
  answer: string;
};

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <section className="rounded-[2rem] border border-line bg-cream/80 p-7 md:p-10">
      <h2 className="text-balance text-3xl font-black tracking-tight text-ink">Perguntas frequentes</h2>
      <div className="mt-7 grid gap-4">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-line bg-white p-5 shadow-sm transition hover:border-brand/30"
          >
            <summary className="cursor-pointer list-none font-black text-ink">
              <span className="flex items-center justify-between gap-4">
                <span className="leading-6">{item.question}</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line bg-cream/80 text-lg leading-none text-brand transition group-open:rotate-45 group-hover:border-brand/30 group-hover:bg-brand group-hover:text-white">
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
