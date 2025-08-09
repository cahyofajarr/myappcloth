import * as React from "react";

export interface CardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  href?: string;
}

export default function Card({ title, description, children, href }: CardProps) {
  const content = (
    <div className="rounded-2xl border p-5 shadow-sm bg-white/80">
      <h3 className="text-lg font-semibold">{title}</h3>
      {description && <p className="mt-1 text-sm opacity-80">{description}</p>}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
  return href ? <a href={href} className="block">{content}</a> : content;
}
