import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { usePageTitle } from '../hooks/usePageTitle';

const values = [
  {
    title: 'Access comes first',
    text: 'If a student has to pay to learn, we haven’t done our job. Everything we publish is free.',
  },
  {
    title: 'Clarity over polish',
    text: 'We explain things the way we wish someone had explained them to us: plainly, with examples.',
  },
  {
    title: 'Accuracy matters',
    text: 'Every book is reviewed, and we fix mistakes quickly when readers point them out.',
  },
  {
    title: 'Students teach students',
    text: 'The people closest to the material are often the best at explaining it to someone new.',
  },
];

export default function About() {
  usePageTitle('About');
  return (
    <>
      <PageHeader title="About TMAS Academy">
        We’re a student-led nonprofit making high-quality STEM education freely accessible to everyone.
      </PageHeader>

      <section className="section section-tight" aria-labelledby="mission-h">
        <div className="container prose-grid">
          <h2 id="mission-h">Our mission</h2>
          <div className="prose">
            <p>
              Our mission is simple: anyone who wants to learn STEM should be able to, no matter
              where they live or what they can afford. We write and publish free books and study
              guides that cover the subjects students most often struggle to find good material for.
            </p>
            <p>
              Our collection includes AP study guides, books for competitive mathematics, and
              college-level texts in subjects such as multivariable calculus and differential
              equations. Each one is meant to be picked up and used without a teacher or a paid
              course.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-raised" aria-labelledby="story-h">
        <div className="container prose-grid">
          <h2 id="story-h">Who we are</h2>
          <div className="prose">
            <p>
              TMAS Academy is run entirely by students. We write the books, review each other’s
              work, build this website, and answer questions from readers. Because we are still
              learning ourselves, we know where learners get stuck, and we write to those places.
            </p>
            <p>
              As a nonprofit, we exist to serve students, not to make money. That is why our books
              will always be free.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="values-h">
        <div className="container">
          <h2 id="values-h">What we stand for</h2>
          <dl className="values">
            {values.map((v) => (
              <div key={v.title}>
                <dt>{v.title}</dt>
                <dd>{v.text}</dd>
              </div>
            ))}
          </dl>
          <div className="button-row">
            <Link to="/books" className="btn btn-primary">
              Browse the books
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
