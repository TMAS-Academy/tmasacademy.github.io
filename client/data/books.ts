export interface Book {
  id: string;
  title: string;
  author: string;
  authors?: string[];
  pageCount: string;
  problemCount: string;
  description: string;
  /** PDF filename in Supabase Storage bucket (e.g. ACE_AP_Biology.pdf) */
  pdfFile?: string;
}

export const books: Book[] = [
  {
    id: "amc-10-12-key",
    title: "AMC 10/12 Key Fundamentals and Strategies",
    author: "Ritvik Rustagi",
    pageCount: "25+",
    problemCount: "50+",
    description: "Quick reference guide with essential formulas, strategies, and tips for AMC competitions",
  },
  {
    id: "ace-amc-10-12",
    title: "ACE The AMC 10/12",
    author: "Ritvik Rustagi",
    pageCount: "350+",
    problemCount: "300+",
    description: "Competition math strategies, problem-solving techniques, and practice problems for AMC success",
    pdfFile: "ACE_The_AMC_10_and_12.pdf",
  },
  {
    id: "ace-ap-calculus-ab",
    title: "ACE AP Calculus AB",
    author: "Ritvik Rustagi",
    pageCount: "280+",
    problemCount: "150+",
    description: "Comprehensive coverage of AP Calculus AB topics with detailed explanations and practice problems",
    pdfFile: "ACE_AP_Calculus_AB.pdf",
  },
  {
    id: "ace-ap-calculus-bc",
    title: "ACE AP Calculus BC",
    author: "Ritvik Rustagi",
    pageCount: "300+",
    problemCount: "200+",
    description: "Master advanced calculus topics including series, parametric equations, and polar coordinates",
    pdfFile: "ACE_AP_Calculus_BC.pdf",
  },
  {
    id: "ace-ap-physics-1",
    title: "ACE AP Physics 1",
    author: "Ritvik Rustagi",
    pageCount: "270+",
    problemCount: "180+",
    description: "Fundamental physics concepts, problem-solving strategies, and exam preparation techniques",
    pdfFile: "ACE_AP_Physics_1.pdf",
  },
  {
    id: "ace-ap-physics-c",
    title: "ACE AP Physics C: Mechanics",
    author: "Ritvik Rustagi",
    pageCount: "300+",
    problemCount: "160+",
    description: "Calculus-based mechanics covering kinematics, dynamics, energy, and momentum",
    pdfFile: "ACE_AP_Physics_C_Mechanics.pdf",
  },
  {
    id: "ace-ap-chemistry",
    title: "ACE AP Chemistry",
    author: "Aditya Baisakh",
    pageCount: "400+",
    problemCount: "100+",
    description: "Thorough review of AP Chemistry topics, including practice problems and exam strategies",
    pdfFile: "ACE_AP_Chemistry.pdf",
  },
  {
    id: "ace-ap-csp",
    title: "ACE AP Computer Science Principles",
    author: "Ipsaan Sedhai, Aviva Iyerkhan",
    authors: ["Ipsaan Sedhai", "Aviva Iyerkhan"],
    pageCount: "100+",
    problemCount: "100+",
    description: "Best AP Computer Science Principles study guide with clear explanations and exam-focused practice",
    pdfFile: "ACE_AP_CSP.pdf",
  },
  {
    id: "ace-ap-statistics",
    title: "ACE AP Statistics Review Book",
    author: "Gulshan Bhalrhu, Caden Wang",
    authors: ["Gulshan Bhalrhu", "Caden Wang"],
    pageCount: "200+",
    problemCount: "100+",
    description: "Best AP Statistics study guide with comprehensive coverage of statistical concepts and exam preparation",
    pdfFile: "ACE_AP_Stats.pdf",
  },
  {
    id: "ace-ap-biology",
    title: "ACE AP Biology",
    author: "Aditya Baisakh, Amaan Shafi, Abby Trinh",
    authors: ["Aditya Baisakh", "Amaan Shafi", "Abby Trinh"],
    pageCount: "300+",
    problemCount: "100+",
    description: "Comprehensive coverage of AP Biology topics with detailed explanations and practice problems",
    pdfFile: "ACE_AP_Biology.pdf",
  },
  {
    id: "ace-ap-psychology",
    title: "ACE AP Psychology",
    author: "Sricharan Pullela, Shivek Saraf",
    authors: ["Sricharan Pullela", "Shivek Saraf"],
    pageCount: "300+",
    problemCount: "100+",
    description: "Comprehensive coverage of AP Psychology topics with detailed explanations and practice problems",
    pdfFile: "ACE_AP_Psychology.pdf",
  },
  {
    id: "ace-ap-human-geography",
    title: "ACE AP Human Geography",
    author: "Shivek Saraf",
    authors: ["Shivek Saraf"],
    pageCount: "300+",
    problemCount: "100+",
    description: "Comprehensive coverage of AP Human Geography topics with detailed explanations and practice problems",
    pdfFile: "ACE_AP_Human_Geography.pdf",
  },
  {
    id: "ace-multivariable-calculus",
    title: "ACE Multivariable Calculus",
    author: "Aditya Baisakh",
    pageCount: "210+",
    problemCount: "100+",
    description: "Comprehensive guide to multivariable calculus covering vectors, partial derivatives, multiple integrals, and vector calculus",
    pdfFile: "ACE_Multivariable_Calculus.pdf",
  },
  {
    id: "ace-differential-equations-and-linear-algebra",
    title: "ACE Differential Equations and Linear Algebra",
    author: "Aditya Baisakh",
    pageCount: "215+",
    problemCount: "100+",
    description: "Comprehensive guide to differential equations and linear algebra covering first-order and second-order ODEs, systems of equations, eigenvalues, and eigenvectors, linear systems, and Laplace transforms",
    pdfFile: "ACE_Differential_Equations_and_Linear_Algebra.pdf",
  },
];

export const getBookById = (id: string): Book | undefined => {
  return books.find(book => book.id === id);
};

export const getBooksByAuthor = (authorName: string): Book[] => {
  return books.filter(book =>
    book.author.toLowerCase().includes(authorName.toLowerCase()) ||
    book.authors?.some(a => a.toLowerCase().includes(authorName.toLowerCase()))
  );
};
