import "./styles/Services.css";
const services = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLNUjh12WGDDSzA74mzgTht9Puk5gNGSUcFQz7kkP_3klKl7CUJrPVjkNW&s=10",
    title: "Web Development",
    desc: "Build modern, responsive, and high-performance websites and web applications tailored to your business goals. From corporate websites to custom web platforms, we deliver scalable digital solutions."
  },
  {
    image: "https://essinstitute.in/wp-content/uploads/2024/07/what-is-seo-e1722370603532.webp",
    title: "Search Engine Optimization",
    desc: "Improve your online visibility and rank higher on search engines with data-driven SEO strategies, keyword optimization, technical audits, and content marketing that drive organic traffic."
  },
  {
    image: "https://media.istockphoto.com/id/1936789233/photo/human-use-phone-with-digital-online-marketing-commerce-sale-website-advertising-promotion-of.jpg",
    title: "Digital Marketing",
    desc: "Grow your brand and reach the right audience through targeted digital marketing campaigns, social media management, paid advertising, email marketing, and performance analytics."
  }
];

export default function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>

      <div className="service-grid">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <div className="card-image">
              <img src={service.image} alt={service.title} />
            </div>

            <div className="card-content">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>

              <button className="service-btn">
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}