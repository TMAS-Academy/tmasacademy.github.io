import type { ReactNode } from 'react';

interface Props {
  title: string;
  children?: ReactNode;
}

/** Title block used at the top of every inner page. */
export default function PageHeader({ title, children }: Props) {
  return (
    <header className="page-header">
      <div className="container">
        <h1>{title}</h1>
        {children && <p className="lede">{children}</p>}
      </div>
    </header>
  );
}
