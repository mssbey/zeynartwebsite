export function SectionHeading({
  label,
  title,
  children,
}: {
  label: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span />
          {label}
        </p>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}
