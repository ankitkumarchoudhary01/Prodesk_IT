export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-16 bg-[var(--bg-service)] text-[var(--bg-service-text)]"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Contact Us
        </h2>

        <div className="gap-12 text-center ">

          <div className="  space-y-6">
            
              <span className="text-xl font-semibold text-black-700">
                Address
              </span>
              <p>4th Floor, 91springboard building, Plot No. D-107, Vyapar Marg, Sector 2, Noida, Uttar Pradesh 201301</p>
            

            
              <span className="text-xl font-semibold text-black-700">
                Email
              </span>
              <p>info@prodesk.in</p>
            

            
              <span className="text-xl font-semibold text-black-700">
                Phone
              </span>
              <p>+91 8851407750</p>
            
          </div>


        </div>

      </div>
    </section>
  );
}