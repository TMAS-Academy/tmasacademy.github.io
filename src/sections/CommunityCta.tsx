import { Link } from 'react-router-dom';
import JoinLink from '../components/JoinLink';

export default function CommunityCta() {
  return (
    <section className="section" aria-labelledby="cta-title">
      <div className="container cta-band">
        <div>
          <h2 id="cta-title">Study alongside other students.</h2>
          <p>
            Ask questions, find study partners, and help us improve the books. Everyone is welcome,
            whatever level you’re at.
          </p>
        </div>
        <div className="button-row">
          <JoinLink className="btn btn-primary">Join the community</JoinLink>
          <Link to="/community" className="btn btn-ghost">
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
