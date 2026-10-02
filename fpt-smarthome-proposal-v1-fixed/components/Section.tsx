export function Section({ eyebrow, title, children, id }: { eyebrow?: string; title: string; children: React.ReactNode; id?: string }) {
  return <section id={id} className="section"><div className="section-head">{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2></div>{children}</section>;
}
