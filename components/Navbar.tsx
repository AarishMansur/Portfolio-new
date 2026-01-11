'use client'

type navProps = {
  isMenuOpen: boolean,
  toggleMenu: () => void,
};

export default function Navbar({ isMenuOpen, toggleMenu }: navProps) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center text-sm uppercase transition-all duration-300">
      <p
        className={`cursor-pointer hover:opacity-70 transition-opacity font-bold tracking-[0.2em] ${isMenuOpen ? 'text-white' : 'text-gray-400'}`}
        onClick={toggleMenu}
      >
        {isMenuOpen ? 'Close' : 'Menu'}
      </p>
    </nav>
  )
}
