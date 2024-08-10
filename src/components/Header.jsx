import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-gray-900 shadow-lg'>
      <div className='max-w-7xl mx-auto flex justify-between items-center p-4'>
        {/* logo */}
        <Link href='/' className='text-2xl font-semibold text-white group cursor-pointer'>
          <span className='text-white group-hover:text-gray-300 transition-colors duration-200'>
            Saim's
          </span>
          <span className='text-gray-400 group-hover:text-white transition-colors duration-200 ml-1'>
            Auth App
          </span>
        </Link>
        {/* navigation */}
        <nav>
          <ul className='flex space-x-6 text-gray-400'>
            <li>
              <Link href='/' className='hover:text-white transition-colors duration-200'>
                Home
              </Link>
            </li>
            <li>
              <Link href='/about' className='hover:text-white transition-colors duration-200'>
                About
              </Link>
            </li>
            <li>
              <Link href='/sign-in' className='hover:text-white transition-colors duration-200'>
                Sign In
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
