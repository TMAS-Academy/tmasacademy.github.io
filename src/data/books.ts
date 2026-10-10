export type CategoryId = 'ap-stem' | 'competitive-math' | 'college-stem';
export type Level = 'Introductory' | 'Intermediate' | 'Advanced';

export interface Category {
  id: CategoryId;
  label: string;
  description: string;
  /** CSS class that sets the --accent colour for this category. */
  accentClass: string;
  subjects: string[];
}

export interface Book {
  id: string;
  title: string;
  category: CategoryId;
  subject: string;
  level: Level;
  /** One sentence, shown on cards. */
  summary: string;
  /** A short paragraph, shown on the book page. */
  description: string;
  /** Main topics covered. */
  topics: string[];
  /**
   * Link to the free PDF (or hosted copy).
   * Leave this out and the book is shown as "Coming soon".
   * Example: downloadUrl: 'https://example.org/ap-chemistry.pdf'
   */
  downloadUrl?: string;
}

export const categories: Category[] = [
  {
    id: 'ap-stem',
    label: 'AP STEM',
    description:
      'Study guides built around the AP exams. Each one explains the concepts first, then shows how they appear in exam questions.',
    accentClass: 'cat-ap',
    subjects: ['Chemistry', 'Biology', 'Physics', 'Calculus', 'Statistics'],
  },
  {
    id: 'competitive-math',
    label: 'Competitive Mathematics',
    description:
      'Books for students who want mathematics beyond the standard classroom: problem solving, proof, and the ideas behind math competitions.',
    accentClass: 'cat-math',
    subjects: ['Problem solving', 'Number theory', 'Combinatorics', 'Algebra', 'Geometry'],
  },
  {
    id: 'college-stem',
    label: 'College-Level STEM',
    description:
      'Advanced books for students ready for university-level courses, written to be read on your own without a lecture to lean on.',
    accentClass: 'cat-college',
    subjects: ['Multivariable calculus', 'Differential equations', 'Linear algebra', 'Proofs'],
  },
];

export const books: Book[] = [
  // ---------- AP STEM ----------
  {
    id: 'ap-chemistry',
    title: 'AP Chemistry',
    category: 'ap-stem',
    subject: 'Chemistry',
    level: 'Intermediate',
    summary: 'From atomic structure to electrochemistry, with worked examples for every unit.',
    description:
      'A complete study guide for the AP Chemistry course. Each chapter builds the concept from the ground up, walks through calculations step by step, and finishes with practice problems in the style of the exam.',
    topics: [
      'Atomic structure and periodicity',
      'Bonding and intermolecular forces',
      'Reactions and stoichiometry',
      'Kinetics and thermodynamics',
      'Equilibrium',
      'Acids, bases, and electrochemistry',
    ],
  },
  {
    id: 'ap-biology',
    title: 'AP Biology',
    category: 'ap-stem',
    subject: 'Biology',
    level: 'Intermediate',
    summary: 'The big ideas of AP Biology, from cells and genetics to evolution and ecology.',
    description:
      'A study guide that connects the AP Biology units into one story, so you can reason through unfamiliar questions instead of memorizing isolated facts.',
    topics: [
      'Chemistry of life',
      'Cell structure and energetics',
      'Heredity and gene expression',
      'Natural selection',
      'Ecology',
    ],
  },
  {
    id: 'ap-physics-1',
    title: 'AP Physics 1',
    category: 'ap-stem',
    subject: 'Physics',
    level: 'Introductory',
    summary: 'Mechanics, waves, and circuits explained from first principles.',
    description:
      'An algebra-based introduction to mechanics that focuses on building physical intuition before reaching for formulas.',
    topics: [
      'Kinematics',
      'Forces and Newton’s laws',
      'Work, energy, and power',
      'Momentum',
      'Rotation',
      'Oscillations and waves',
    ],
  },
  {
    id: 'ap-physics-2',
    title: 'AP Physics 2',
    category: 'ap-stem',
    subject: 'Physics',
    level: 'Intermediate',
    summary: 'Fluids, thermodynamics, electromagnetism, optics, and modern physics.',
    description:
      'The second half of algebra-based physics, covering the topics that most often catch students off guard on exam day.',
    topics: [
      'Fluids',
      'Thermodynamics',
      'Electrostatics and circuits',
      'Magnetism and induction',
      'Geometric and wave optics',
      'Quantum and nuclear physics',
    ],
  },
  {
    id: 'ap-physics-c',
    title: 'AP Physics C',
    category: 'ap-stem',
    subject: 'Physics',
    level: 'Advanced',
    summary: 'Calculus-based mechanics and electricity and magnetism.',
    description:
      'A calculus-based treatment of mechanics and electricity and magnetism for students taking AP Physics C alongside calculus.',
    topics: [
      'Calculus-based kinematics and dynamics',
      'Work, energy, and momentum',
      'Rotation and oscillation',
      'Electric fields and potential',
      'Capacitors, circuits, and magnetism',
      'Faraday’s law',
    ],
  },
  {
    id: 'ap-calculus',
    title: 'AP Calculus AB & BC',
    category: 'ap-stem',
    subject: 'Calculus',
    level: 'Intermediate',
    summary: 'Limits, derivatives, integrals, and series, with BC topics clearly marked.',
    description:
      'A single guide that covers both AP Calculus courses. Topics that only appear in BC are labeled, so AB students can skip ahead without losing the thread.',
    topics: [
      'Limits and continuity',
      'Differentiation',
      'Applications of derivatives',
      'Integration and the Fundamental Theorem',
      'Differential equations',
      'Parametric, polar, and series (BC)',
    ],
  },
  {
    id: 'ap-statistics',
    title: 'AP Statistics',
    category: 'ap-stem',
    subject: 'Statistics',
    level: 'Introductory',
    summary: 'Data, probability, and inference, with a focus on explaining your reasoning.',
    description:
      'A study guide that teaches the ideas of statistical thinking along with how to write clear, complete answers on free-response questions.',
    topics: [
      'Exploring data',
      'Sampling and experiments',
      'Probability and random variables',
      'Sampling distributions',
      'Inference for proportions and means',
      'Chi-square and regression',
    ],
  },

  // ---------- Competitive Mathematics ----------
  {
    id: 'problem-solving-foundations',
    title: 'Foundations of Problem Solving',
    category: 'competitive-math',
    subject: 'Problem solving',
    level: 'Introductory',
    summary: 'The habits and strategies that turn a hard problem into a solvable one.',
    description:
      'A first book for competition math. It teaches how to start when you are stuck: try small cases, look for patterns, work backwards, and check your answer.',
    topics: [
      'Reading a problem carefully',
      'Small cases and patterns',
      'Working backwards',
      'Invariants and symmetry',
      'Writing a clear solution',
    ],
  },
  {
    id: 'number-theory',
    title: 'Number Theory',
    category: 'competitive-math',
    subject: 'Number theory',
    level: 'Intermediate',
    summary: 'Divisibility, modular arithmetic, and Diophantine equations through problems.',
    description:
      'An introduction to number theory built around competition problems, with each technique introduced by the problem that motivates it.',
    topics: [
      'Divisibility and primes',
      'GCD and the Euclidean algorithm',
      'Modular arithmetic',
      'Linear congruences',
      'Diophantine equations',
    ],
  },
  {
    id: 'combinatorics-probability',
    title: 'Combinatorics and Probability',
    category: 'competitive-math',
    subject: 'Combinatorics',
    level: 'Intermediate',
    summary: 'Counting, arrangements, and probability, from first principles to clever bijections.',
    description:
      'A guide to counting and probability that emphasizes understanding why a method works, so you can adapt it to problems you have never seen.',
    topics: [
      'Counting principles',
      'Permutations and combinations',
      'Inclusion-exclusion',
      'Recursion and generating ideas',
      'Expected value',
    ],
  },
  {
    id: 'algebra-inequalities',
    title: 'Algebra and Inequalities',
    category: 'competitive-math',
    subject: 'Algebra',
    level: 'Intermediate',
    summary: 'Polynomials, functional equations, and the classic inequalities.',
    description:
      'Algebraic techniques used in competitions, including Vieta’s formulas, polynomial manipulation, and inequalities such as AM-GM and Cauchy-Schwarz.',
    topics: [
      'Factoring and substitution',
      'Polynomials and Vieta’s formulas',
      'Sequences and series',
      'Functional equations',
      'AM-GM and Cauchy-Schwarz',
    ],
  },
  {
    id: 'geometry',
    title: 'Geometry',
    category: 'competitive-math',
    subject: 'Geometry',
    level: 'Intermediate',
    summary: 'Triangles, circles, and coordinates, with the tools for hard geometry problems.',
    description:
      'A tour of Euclidean geometry for competitions, from angle chasing and similar triangles to power of a point and coordinate methods.',
    topics: [
      'Angle chasing',
      'Similar triangles and area',
      'Circles and power of a point',
      'Trigonometry in geometry',
      'Coordinate and vector methods',
    ],
  },

  // ---------- College-Level STEM ----------
  {
    id: 'multivariable-calculus',
    title: 'Multivariable Calculus',
    category: 'college-stem',
    subject: 'Multivariable calculus',
    level: 'Advanced',
    summary: 'Calculus in several variables, from partial derivatives to Stokes’ theorem.',
    description:
      'A student-written text covering the standard university course, with an emphasis on geometric intuition and many worked examples.',
    topics: [
      'Vectors and curves in space',
      'Partial derivatives and gradients',
      'Optimization and Lagrange multipliers',
      'Multiple integrals',
      'Line and surface integrals',
      'Green’s, Stokes’, and divergence theorems',
    ],
  },
  {
    id: 'diffeq-linear-algebra',
    title: 'Differential Equations and Linear Algebra',
    category: 'college-stem',
    subject: 'Differential equations',
    level: 'Advanced',
    summary: 'Two courses taught together, so each one makes the other clearer.',
    description:
      'Differential equations and linear algebra are closely linked, and this book teaches them side by side: eigenvalues explain the behavior of systems, and systems motivate the linear algebra.',
    topics: [
      'First-order equations',
      'Vector spaces and linear maps',
      'Eigenvalues and eigenvectors',
      'Second-order linear equations',
      'Systems of differential equations',
      'Laplace transforms',
    ],
  },
  {
    id: 'introduction-to-proofs',
    title: 'Introduction to Proofs',
    category: 'college-stem',
    subject: 'Proofs',
    level: 'Intermediate',
    summary: 'How to read, write, and trust a mathematical proof.',
    description:
      'The bridge between computational math and proof-based courses, covering logic, sets, functions, induction, and the habits of careful mathematical writing.',
    topics: [
      'Logic and quantifiers',
      'Sets and functions',
      'Direct proof and contradiction',
      'Induction',
      'Relations and cardinality',
    ],
  },
];

/** Books shown on the homepage. */
export const featuredBookIds = [
  'ap-chemistry',
  'ap-physics-1',
  'number-theory',
  'multivariable-calculus',
];

export const levels: Level[] = ['Introductory', 'Intermediate', 'Advanced'];

export const getBook = (id: string) => books.find((b) => b.id === id);
export const getCategory = (id: CategoryId) => categories.find((c) => c.id === id)!;
export const isAvailable = (book: Book) => Boolean(book.downloadUrl);
