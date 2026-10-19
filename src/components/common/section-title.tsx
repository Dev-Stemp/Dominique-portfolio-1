interface SectionTitleProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  label,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-16">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
        {label}
      </p>

      <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}