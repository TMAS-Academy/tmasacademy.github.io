import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-slate-900">
            TMAS Academy
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="text-slate-600 hover:text-slate-900">
              Home
            </Link>
            <Link href="/about" className="text-slate-600 hover:text-slate-900">
              About
            </Link>
            <Link href="/resources" className="text-slate-600 hover:text-slate-900">
              Resources
            </Link>
            <Link href="/contact" className="text-slate-600 hover:text-slate-900">
              Contact
            </Link>
            <Link href="/join" className="text-slate-600 hover:text-slate-900">
              Join
            </Link>
            <Link href="/donate" className="text-indigo-600 hover:text-indigo-700 font-medium">
              Donate
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
