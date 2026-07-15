const services = [
  {
    image:
      "/webdev.webp",
    title: "Web Development",
    desc:
      "Build modern, responsive, and high-performance websites and web applications tailored to your business goals. From corporate websites to custom web platforms, we deliver scalable digital solutions."
  },
  {
    image:
      "/seo.webp",
    title: "Search Engine Optimization",
    desc:
      "Improve your online visibility and rank higher on search engines with data-driven SEO strategies, keyword optimization, technical audits, and content marketing that drive organic traffic."
  },
  {
    image:
      "/digitalmarketing.webp",
    title: "Digital Marketing",
    desc:
      "Grow your brand and reach the right audience through targeted digital marketing campaigns, social media management, paid advertising, email marketing, and performance analytics."
  }
];

export default function Services() {
  return (
    <section
      id="services"
      className="px-5 py-1 md:px-16 bg-[var(--bg-service)] text-[var(--bg-service-text)] text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12">
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
        {services.map((service, index) => (
          <div
            key={index}
            className="
              flex flex-col
              overflow-hidden
              rounded-[20px]
              bg-[var(--bg-card)]
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-3
              hover:shadow-2xl
            "
          >

            <div className="h-[220px] overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>


            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-4 text-2xl font-semibold text-[var(--card-heading)]">
                {service.title}
              </h3>

              <p className="flex-1 leading-7 text-[var(--card-text)]">
                {service.desc}
              </p>

              <button
                className="
                  mt-6                
                  self-center
                  rounded-full
                  border-2
                  border-white
                  bg-[var(--primary)]
                  px-6
                  py-3
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#fabe18]
                  hover:scale-105
                "
              >
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}