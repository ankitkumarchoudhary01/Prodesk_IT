export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-4 bg-[var(--primary)] text-white border-t border-white">

      <div className="w-60">
        <p className="my-2 text-center">
          Copyright © 2026 Prodesk IT
        </p>
      </div>

      <div className="w-60">
        <p className="my-2 text-center">
          All Rights Reserved
        </p>
      </div>

      <div className="w-60 flex lg:justify-end justify-center">
        <a href="https://www.linkedin.com/company/prodesk-it/" target="_blank" rel="noopener noreferrer">
          <img
            src="/linkedin.webp"
            alt="LinkedIn"
            className="h-8 w-8 transition-transform duration-300 hover:scale-110"
          />
        </a>

      </div>

    </footer>
  );
}