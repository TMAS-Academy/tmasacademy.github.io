import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { usePageTitle } from '../hooks/usePageTitle';

export default function NotFound({ message = 'That page doesn’t exist.' }: { message?: string }) {
  usePageTitle('Page not found');
  return (
    <>
      <PageHeader title="Page not found">{message}</PageHeader>
      <section className="section section-tight">
        <div className="container button-row">
          <Link to="/" className="btn btn-primary">
            Go to the homepage
          </Link>
          <Link to="/books" className="btn btn-ghost">
            Browse the books
          </Link>
        </div>
      </section>
    </>
  );
}
