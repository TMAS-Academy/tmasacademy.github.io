import { Link } from 'react-router-dom';
import CurveLab from '../components/CurveLab';
import JoinLink from '../components/JoinLink';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title">Free STEM education, written and run by students.</h1>
          <p className="lede">
            TMAS Academy is a student-led nonprofit that publishes free books and study guides for
            AP exams, competition math, and college-level science and mathematics.
          </p>
          <div className="button-row">
            <Link to="/books" className="btn btn-primary">
              Browse the books
            </Link>
            <JoinLink className="btn btn-ghost">Join the community</JoinLink>
          </div>
        </div>
        <CurveLab />
      </div>
    </section>
  );
}
