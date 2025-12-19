import "./globals.css";
import { Poppins } from "next/font/google"; // statt Montserrat
const poppins = Poppins({ weight: "400", subsets: ["latin"] }); // neue Font

export const metadata = {
  title: "Site Berg Consulting",
  description: "Professionelle Lösungen in Hydrogeologie und Wasserressourcen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-white text-[rgb(192,0,0)] overflow-x-hidden">
        <header className="sticky top-0 z-50 bg-[rgb(150,0,0)]/99 backdrop-blur shadow-sm">
          <div className="flex items-center justify-between bg-[rgb(120,0,0)] px-4 py-2 md:hidden">
            <div className="font-bold text-white">BERG</div>
            <div className="flex items-center gap-3 text-white">
              <a href="https://www.linkedin.com/company/berg-servi-os-geol-gicos/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-[rgb(0,125,255)]">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.98 3.5A2.5 2.5 0 0 0 2.5 6c0 1.38 1.12 2.5 2.48 2.5h.02A2.5 2.5 0 0 0 7.5 6a2.5 2.5 0 0 0-2.52-2.5zM3 9h4v12H3V9zm6 0h4v1.71h.06A4.4 4.4 0 0 1 17.5 9c3 0 3.5 1.9 3.5 4.36V21h-4v-6.14c0-1.46-.03-3.36-2.05-3.36-2.05 0-2.36 1.6-2.36 3.26V21H9V9z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/bergservgeo" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-[rgb(192,0,192)]">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.75-3.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" />
                </svg>
              </a>
              <a href="https://wa.me/553191912008" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" className="hover:text-[rgb(0,192,0)]">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.04 2a9.94 9.94 0 0 0-8.64 14.96L2 22l5.2-1.38A9.94 9.94 0 1 0 12.04 2zm0 18.18a8.2 8.2 0 0 1-4.18-1.16l-.3-.18-3.08.82.82-3.02-.2-.32A8.2 8.2 0 1 1 20.23 12a8.22 8.22 0 0 1-8.19 8.18zm4.52-6.14c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.38.11-.5.12-.12.25-.31.38-.46.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.88-.2-.48-.42-.42-.57-.43h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.08 0 1.22.9 2.41 1.03 2.58.13.17 1.78 2.72 4.34 3.82.61.26 1.09.42 1.46.54.61.19 1.17.16 1.61.1.49-.07 1.47-.6 1.68-1.19.21-.58.21-1.08.15-1.19-.06-.11-.23-.17-.48-.3z" />
                </svg>
              </a>
            </div>
          </div>

          <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between md:gap-0">
            <div className="hidden shrink-0 font-bold text-[rgb(0,0,0)] text-white md:block">BERG</div>

            <div className="mt-2 flex flex-wrap justify-center gap-3 text-sm md:mt-0 md:flex-nowrap md:gap-6">
              <a href="/" className="hover:text-[rgb(192,0,0)] text-white">Home</a>
              <a href="/services" className="hover:text-[rgb(192,0,0)] text-white">Soluções</a>
              <a href="/sectors" className="hover:text-[rgb(192,0,0)] text-white">Portfólio</a>
              <a href="/about" className="hover:text-[rgb(192,0,0)] text-white">Sobre</a>
              <a href="/contact" className="hover:text-[rgb(192,0,0)] text-white">Contato</a>
            </div>

            <div className="hidden items-center gap-4 text-slate-500 md:flex">
              <a href="https://www.linkedin.com/company/berg-servi-os-geol-gicos/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-[rgb(0,125,255)] text-white">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.98 3.5A2.5 2.5 0 0 0 2.5 6c0 1.38 1.12 2.5 2.48 2.5h.02A2.5 2.5 0 0 0 7.5 6a2.5 2.5 0 0 0-2.52-2.5zM3 9h4v12H3V9zm6 0h4v1.71h.06A4.4 4.4 0 0 1 17.5 9c3 0 3.5 1.9 3.5 4.36V21h-4v-6.14c0-1.46-.03-3.36-2.05-3.36-2.05 0-2.36 1.6-2.36 3.26V21H9V9z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/bergservgeo" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-[rgb(192,0,192)] text-white">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.75-3.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" />
                </svg>
              </a>
              <a href="https://wa.me/553191912008" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" className="hover:text-[rgb(0,192,0)] text-white">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.04 2a9.94 9.94 0 0 0-8.64 14.96L2 22l5.2-1.38A9.94 9.94 0 1 0 12.04 2zm0 18.18a8.2 8.2 0 0 1-4.18-1.16l-.3-.18-3.08.82.82-3.02-.2-.32A8.2 8.2 0 1 1 20.23 12a8.22 8.22 0 0 1-8.19 8.18zm4.52-6.14c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.38.11-.5.12-.12.25-.31.38-.46.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.88-.2-.48-.42-.42-.57-.43h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.08 0 1.22.9 2.41 1.03 2.58.13.17 1.78 2.72 4.34 3.82.61.26 1.09.42 1.46.54.61.19 1.17.16 1.61.1.49-.07 1.47-.6 1.68-1.19.21-.58.21-1.08.15-1.19-.06-.11-.23-.17-.48-.3z" />
                </svg>
              </a>
            </div>

          </nav>
        </header>

        <main>
          <div className="relative h-[65vh] w-full overflow-hidden rounded-b-lg">
            <img src="/berg.png" alt="Hero Hintergrund" className="h-full w-full object-cover" />
            {/* Dunkler Verlauf für bessere Lesbarkeit */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/5 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12">
              <h1 className={`m-0 text-white text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg text-left ${poppins.className}`}>
                BERG
              </h1>
              <h2 className="m-0 mt-2 text-white text-xl md:text-xl font-semibold drop-shadow text-left">
                Serviços Geológicos
              </h2>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mx-auto max-w-6xl px-4">
            {children}
          </div>

        </main>

        <footer className="border-t border-[#262626] bg-[#141414]">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-[#f2f2f2]">
            © {new Date().getFullYear()} Site Berg Consulting. Alle Rechte vorbehalten.
          </div>
        </footer>
      </body>
    </html>
  );
}
