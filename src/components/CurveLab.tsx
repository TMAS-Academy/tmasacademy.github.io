import { useEffect, useId, useState } from 'react';

const BOX = 320;
const MID = BOX / 2;
const RADIUS = MID - 18;
const STEPS = 480;

/** Builds an SVG path for x = sin(a·t + phase), y = sin(b·t). */
function buildPath(a: number, b: number, phase: number) {
  let d = '';
  for (let i = 0; i <= STEPS; i++) {
    const t = (i / STEPS) * Math.PI * 2;
    const x = MID + RADIUS * Math.sin(a * t + phase);
    const y = MID + RADIUS * Math.sin(b * t);
    d += `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return d;
}

/**
 * A small live demo for the homepage: two sine waves combine into one curve
 * (a Lissajous figure). Visitors can change each frequency or pause the motion.
 */
export default function CurveLab() {
  const id = useId();
  const [a, setA] = useState(3);
  const [b, setB] = useState(2);
  const [phase, setPhase] = useState(Math.PI / 4);
  const [playing, setPlaying] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    if (!playing) return;
    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      setPhase((p) => (p + (now - last) * 0.0006) % (Math.PI * 2));
      last = now;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [playing]);

  return (
    <figure className="curve-lab">
      <svg
        viewBox={`0 0 ${BOX} ${BOX}`}
        role="img"
        aria-label={`A curve drawn from two sine waves with frequencies ${a} and ${b}`}
      >
        <line x1={MID} y1="8" x2={MID} y2={BOX - 8} className="curve-axis" />
        <line x1="8" y1={MID} x2={BOX - 8} y2={MID} className="curve-axis" />
        <path d={buildPath(a, b, phase - 0.6)} className="curve-trail" />
        <path d={buildPath(a, b, phase)} className="curve-main" />
      </svg>

      <figcaption>
        <p className="curve-equation" aria-hidden="true">
          x = sin({a}t + φ) &nbsp; y = sin({b}t)
        </p>
        <div className="curve-controls">
          <label htmlFor={`${id}-a`}>
            Horizontal frequency <output>{a}</output>
          </label>
          <input
            id={`${id}-a`}
            type="range"
            min={1}
            max={7}
            step={1}
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
          />
          <label htmlFor={`${id}-b`}>
            Vertical frequency <output>{b}</output>
          </label>
          <input
            id={`${id}-b`}
            type="range"
            min={1}
            max={7}
            step={1}
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
          />
        </div>
        <button type="button" className="btn btn-small btn-ghost" onClick={() => setPlaying((p) => !p)}>
          {playing ? 'Pause motion' : 'Play motion'}
        </button>
      </figcaption>
    </figure>
  );
}
