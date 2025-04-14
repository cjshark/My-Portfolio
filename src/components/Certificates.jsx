import { motion } from "framer-motion";

// Sample Data for Certificates
const certificates = [
  {
    title: "Web Development Bootcamp",
    issuedBy: "Coursera",
    date: "May 2024",
    link: "https://coursera.org/web-development-bootcamp",
    image: "https://via.placeholder.com/600x200.png?text=Certificate+1",
  },
  {
    title: "React.js Mastery",
    issuedBy: "Udemy",
    date: "March 2024",
    link: "https://udemy.com/react-masterclass",
    image: "https://via.placeholder.com/600x200.png?text=Certificate+2",
  },
  {
    title: "JavaScript Fundamentals",
    issuedBy: "freeCodeCamp",
    date: "January 2024",
    link: "https://freecodecamp.org/javascript-fundamentals",
    image: "https://via.placeholder.com/600x200.png?text=Certificate+3",
  },
];

const Certificates = () => {
  return (
    <section
      data-aos="fade-up"
      id="certificates"
      className="pt-24 pb-16 px-4 bg-gradient-to-br from-slate-900 to-slate-500"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          data-aos="zoom-in"
          className="text-3xl font-bold text-center text-orange-400 mb-12"
        >
          My Certificates
        </h2>

        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificates.map((certificate, index) => (
            <div
              key={certificate.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="600"
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-orange-500/20 transition-all duration-300"
            >
              {/* Image */}
              <div className="h-36 overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => (e.target.style.display = "none")}
                />
              </div>

              {/* Content */}
              <div className="p-4 text-white text-sm">
                <h3 className="text-lg font-semibold text-orange-400 group-hover:text-white transition-colors duration-300">
                  {certificate.title}
                </h3>
                <p className="mt-1 text-slate-300">{certificate.issuedBy}</p>
                <p className="text-slate-400 text-xs">{certificate.date}</p>

                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-orange-200 hover:text-white underline underline-offset-4 transition duration-300"
                >
                  View Certificate →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
