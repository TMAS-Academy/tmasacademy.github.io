export default function Mission() {
  return (
    <section className="section" aria-labelledby="mission-title">
      <div className="container mission">
        <div>
          <h2 id="mission-title">Good teaching shouldn’t depend on what you can pay for.</h2>
          <p>
            Strong STEM resources are often locked behind tutoring fees, textbook prices, and
            expensive courses. We think that gap is unfair, and that students are well placed to
            close it: we remember what confused us, and what finally made it click.
          </p>
        </div>
        <dl className="principles">
          <div>
            <dt>Free</dt>
            <dd>Every book is free to read, download, and share. There are no accounts or paywalls.</dd>
          </div>
          <div>
            <dt>Student-led</dt>
            <dd>Our books are written and reviewed by students who have studied the material themselves.</dd>
          </div>
          <div>
            <dt>Built for self-study</dt>
            <dd>Clear explanations, worked examples, and practice problems, so you can learn at your own pace.</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
