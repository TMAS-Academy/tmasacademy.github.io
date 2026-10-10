import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { site } from '../data/site';

interface Props {
  className?: string;
  children: ReactNode;
}

/**
 * Link for "join the community" buttons. Goes to the community space when
 * site.communityUrl is set, and to the Contact page otherwise.
 */
export default function JoinLink({ className, children }: Props) {
  if (site.communityUrl) {
    return (
      <a href={site.communityUrl} className={className} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link to="/contact?topic=join" className={className}>
      {children}
    </Link>
  );
}
