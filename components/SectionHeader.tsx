type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  titleAs?: "h1" | "h2";
};

export function SectionHeader({ eyebrow, title, description, titleAs = "h2" }: SectionHeaderProps) {
  const TitleTag = titleAs;

  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="inline-flex rounded-full border border-brand/15 bg-brand/5 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-brand">
          {eyebrow}
        </p>
      ) : null}
      <TitleTag className="mt-4 text-balance text-3xl font-black tracking-tight text-ink md:text-5xl">
        {title}
      </TitleTag>
      {description ? <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{description}</p> : null}
    </div>
  );
}
