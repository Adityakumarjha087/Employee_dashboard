import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FaUserTie } from 'react-icons/fa';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '#about' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'About Company', href: '#company' },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <nav className="w-full bg-white/90 dark:bg-[#101010]/90 shadow-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <FaUserTie className="text-blue-700 dark:text-blue-300 text-2xl" />
          <span className="font-bold text-xl tracking-tight text-blue-700 dark:text-blue-300">Employee Dashboard</span>
        </div>
        <ul className="flex gap-8 text-base font-medium items-center">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-2 py-1 rounded ${
                  (item.href === '/' ? pathname === '/' : pathname.includes(item.href.replace('#', '')))
                    ? 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300'
                    : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              className="ml-4 px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors shadow-sm"
              onClick={() => router.push('/signin')}
            >
              Sign In
            </button>
          </li>
          <li>
            <button
              className="ml-2 px-4 py-2 rounded border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 font-medium transition-colors shadow-sm"
              onClick={() => router.push('/signup')}
            >
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
} 