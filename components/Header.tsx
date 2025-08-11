
import React, { useState, useEffect } from 'react';
import Button from './ui/Button';

const navLinks = [
  { href: '#home', label: 'Início' },
  { href: '#about', label: 'O Feitiço' },
  { href: '#process', label: 'Como Funciona' },
  { href: '#testimonials', label: 'Depoimentos' },
  { href: '#faq', label: 'Dúvidas' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <a href="#home" onClick={closeMenu} className="text-2xl font-bold font-serif text-white transition-opacity hover:opacity-80">Aurora</a>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} className="text-slate-300 hover:text-amber-300 transition-colors duration-200 font-medium">{link.label}</a>
              ))}
              <Button as="a" href="#purchase" variant="secondary" className="!px-5 !py-2 !text-sm !tracking-normal">
                Solicitar Feitiço
              </Button>
            </nav>

            {/* Mobile Nav Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"} className="text-white focus:outline-none p-2" aria-expanded={isMenuOpen}>
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-xl transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
           aria-hidden={!isMenuOpen}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 -mt-10">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={closeMenu} className="text-slate-200 text-3xl font-serif hover:text-amber-300 transition-colors duration-200">{link.label}</a>
          ))}
          <Button as="a" href="#purchase" onClick={closeMenu} variant="primary" className="mt-8 !text-xl !px-10 !py-4">
            Solicitar o Feitiço
          </Button>
        </nav>
      </div>
    </>
  );
};

export default Header;
