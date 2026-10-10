import { useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { usePageTitle } from '../hooks/usePageTitle';
import { site } from '../data/site';

const topics = [
  { id: 'question', label: 'A general question' },
  { id: 'join', label: 'Joining the community' },
  { id: 'contribute', label: 'Writing, reviewing, or volunteering' },
  { id: 'error', label: 'Reporting a mistake in a book' },
  { id: 'partner', label: 'Partnering with TMAS Academy' },
];

const ways = [
  {
    title: 'Write or review',
    text: 'Help write a chapter, check solutions, or proofread a book before release.',
  },
  {
    title: 'Mentor and answer questions',
    text: 'Help other students in the community work through problems.',
  },
  {
    title: 'Design and build',
    text: 'Help with illustrations, layout, or this website’s code.',
  },
  {
    title: 'Spread the word',
    text: 'Share the books with a teacher, a school club, or a friend who’s studying.',
  },
];

export default function Contact() {
  usePageTitle('Contact');
  const [params] = useSearchParams();
  const initialTopic = topics.some((t) => t.id === params.get('topic')) ? params.get('topic')! : 'question';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState(initialTopic);
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const topicLabel = topics.find((t) => t.id === topic)?.label ?? 'Message';
    const subject = encodeURIComponent(`${topicLabel} (from ${name})`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <PageHeader title="Contact">
        Questions, corrections, or ideas? We’d like to hear from you.
      </PageHeader>

      <section className="section section-tight" aria-label="Contact form">
        <div className="container contact-grid">
          <form className="form" onSubmit={onSubmit}>
            <h2>Send us a message</h2>

            <div className="field">
              <label htmlFor="c-name">Your name</label>
              <input
                id="c-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="field">
              <label htmlFor="c-email">Your email</label>
              <input
                id="c-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="field">
              <label htmlFor="c-topic">What is this about?</label>
              <select id="c-topic" value={topic} onChange={(e) => setTopic(e.target.value)}>
                {topics.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="c-message">Message</label>
              <textarea
                id="c-message"
                name="message"
                rows={6}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Send message
            </button>

            <p className="form-note" role="status">
              {sent
                ? `Your email app should open with the message ready to send. If it doesn’t, write to ${site.email}.`
                : 'This opens your email app with the message filled in.'}
            </p>
          </form>

          <div className="contact-side">
            <div>
              <h2>Email</h2>
              <p>
                <a className="text-link" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
            </div>
            <div>
              <h2>Ways to get involved</h2>
              <dl className="values values-stack">
                {ways.map((w) => (
                  <div key={w.title}>
                    <dt>{w.title}</dt>
                    <dd>{w.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
