function WhatWeOffer() {
  const offerings = [
    {
      title: 'Free Study Guides',
      description:
        'Comprehensive STEM books designed to make high-quality educational material freely accessible.',
    },
    {
      title: 'Competitive Mathematics',
      description:
        'Resources for students interested in mathematics beyond the standard classroom curriculum.',
    },
    {
      title: 'Student Community',
      description:
        'A community where students can connect, discuss STEM, and learn together.',
    },
  ];

  return (
    <section className="what-we-offer">
      <div className="section-content">
        <p className="section-eyebrow">What We Offer</p>

        <h2>Resources built for curious students.</h2>

        <div className="offerings-grid">
          {offerings.map((offering) => (
            <article className="offering-card" key={offering.title}>
              <h3>{offering.title}</h3>
              <p>{offering.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;