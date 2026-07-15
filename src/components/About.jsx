export default function About() {
  return (
    <section
      id="about"
      className="bg-[var(--bg-service)] py-20 px-6 md:px-16"
    >
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=675&auto=format&fit=crop&q=80"
            alt="Team Working"
            className="rounded-2xl shadow-2xl"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-4xl font-bold text-[var(--card-heading)] mb-6">
            About Prodesk IT
          </h2>

          <p className="text-[var(--card-text)] leading-8 mb-6">
            Prodesk IT is a technology-driven company focused on delivering
            innovative digital solutions. We specialize in building modern web
            applications, implementing data-driven marketing strategies, and
            helping businesses establish a strong digital presence.
          </p>

          <p className="text-[var(--card-text)] leading-8 mb-8">
            Our experienced team combines creativity, technology, and business
            expertise to deliver scalable, secure, and high-performance
            solutions that accelerate growth.
          </p>

          <button
            className="
              bg-[var(--primary)]
              text-white
              px-8
              py-3
              rounded-full
              transition-all
              duration-300
              hover:bg-[#fabe18]
              hover:scale-105
            "
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}