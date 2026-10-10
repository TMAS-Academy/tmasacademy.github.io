import PageHeader from '../components/PageHeader';
import JoinLink from '../components/JoinLink';
import { usePageTitle } from '../hooks/usePageTitle';

const activities = [
  {
    title: 'Ask and answer questions',
    text: 'Stuck on a problem? Post it. Understood something well? Explain it to someone else, which is the best way to learn it further.',
  },
  {
    title: 'Find study partners',
    text: 'Meet students working on the same subject or exam, and keep each other on track.',
  },
  {
    title: 'Shape the books',
    text: 'Report errors, suggest topics, and help review chapters before they are published.',
  },
  {
    title: 'Join the team',
    text: 'Write, edit, design, or build. Everything we publish is made by students like you.',
  },
];

const steps = [
  {
    title: 'Join the community',
    text: 'Use the button below. It’s free and takes less than a minute.',
  },
  {
    title: 'Introduce yourself',
    text: 'Tell us which subjects or exams you’re working on so others can find you.',
  },
  {
    title: 'Pick a subject and dive in',
    text: 'Ask a question, answer one, or start a study group. Every contribution helps.',
  },
];

export default function Community() {
  usePageTitle('Community');
  return (
    <>
      <PageHeader title="Community">
        The TMAS Academy community is where students learn together. Everyone is welcome, from
        first-time learners to students taking college-level courses.
      </PageHeader>

      <section className="section section-tight" aria-labelledby="do-h">
        <div className="container">
          <h2 id="do-h">What you can do here</h2>
          <dl className="values">
            {activities.map((a) => (
              <div key={a.title}>
                <dt>{a.title}</dt>
                <dd>{a.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section section-raised" aria-labelledby="join-h">
        <div className="container prose-grid">
          <h2 id="join-h">How to join</h2>
          <div>
            <ol className="steps">
              {steps.map((s) => (
                <li key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
            <div className="button-row">
              <JoinLink className="btn btn-primary">Join the community</JoinLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="guidelines-h">
        <div className="container prose-grid">
          <h2 id="guidelines-h">Community guidelines</h2>
          <ul className="topic-list">
            <li>Be kind. Everyone here is learning.</li>
            <li>No question is too basic, and no answer should make anyone feel small.</li>
            <li>Explain your reasoning, not just the final answer.</li>
            <li>Give credit when you share someone else’s work.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
