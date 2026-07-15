export default function Hero() {
  return (
    <section
      className="relative -mt-20 pt-20"
    >

      <img
        src="/landing.webp"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
    />


    <div className="relative z-10 flex min-h-screen flex-col justify-center items-center text-center text-white px-5">
      <div className="text-4xl md:text-6xl text-5xl md:text-6xl lg:text-7xl font-bold mb-5">
        We <span className="text-[#fabe18]">Build</span> Digital Experiences
      </div>

      <div className="max-w-[600px] text-lg mb-8">
        Helping businesses grow with Web Development,
        SEO, and Digital Marketing solutions.
      </div>

      <button
        className="px-8 py-3.5 rounded-[20px] border-2 border-white bg-[var(--primary)] text-white font-bold text-base transition-all duration-300 hover:bg-[#fabe18] hover:scale-110"
      >
        Get Started
      </button>
      </div>
    </section>
  );
}