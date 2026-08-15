import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FiCpu,
  FiUsers,
  FiMapPin
} from "react-icons/fi";

import {
  FiShield,
  FiHeart,
  FiGlobe,
  FiZap
} from "react-icons/fi";


function Home() {

const images = [
  "/images/aid1.jpg",
  "/images/aid2.jpg",
  "/images/aid3.jpg",
  "/images/aid4.jpg",
  "/images/aid5.jpg",
  "/images/aid6.jpg",
];

const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, 5000);

  return () => clearInterval(interval);
}, []);
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero Section */}

<section className="relative h-[90vh] overflow-hidden">

  {images.map((image, index) => (
    <div
      key={index}
      className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
        index === currentImage ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    />
  ))}

  {/* Dark Overlay */}

  <div className="absolute inset-0 bg-blue-950/70"></div>

  {/* Content */}

  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6 text-white">

    <h1 className="text-6xl md:text-7xl font-extrabold mb-6">
      AidLink
    </h1>

    <p className="text-2xl md:text-3xl font-semibold mb-6">
      AI-Powered Humanitarian Assistance Platform
    </p>

    <p className="max-w-4xl text-lg md:text-xl leading-8 mb-10">
      With AidLink you can describe your situation and receive personalized support
      recommendations, and discover organizations that can provide
      healthcare, education, food assistance, shelter and employment.
    </p>

    <div className="flex flex-wrap justify-center gap-5">

      <Link
        to="/request-help"
        className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-xl font-semibold transition"
      >
        Request Help
      </Link>

      <Link
        to="/organizations"
        className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-xl font-semibold transition"
      >
        Explore Organizations
      </Link>

    </div>

    {/* Dots */}

    <div className="flex gap-3 mt-12">

      {images.map((_, index) => (

        <button
          key={index}
          onClick={() => setCurrentImage(index)}
          className={`w-3 h-3 rounded-full transition ${
            currentImage === index
              ? "bg-white"
              : "bg-white/40"
          }`}
        />

      ))}

    </div>

  </div>

</section>

      {/* Features Section */}
      <section className="relative py-20 bg-blue-50 via-blue-50 to-indigo-100">
  <div className="absolute inset-0 opacity-30">
    <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.15),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.15),_transparent_40%)]"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-800 mb-5">
          How AidLink Helps
        </h2>

          <p className="text-center text-slate-600 text-lg max-w-3xl mx-auto leading-8 mb-16">
          AidLink combines Artificial Intelligence with humanitarian
          organizations to guide people toward trusted assistance,
          making it easier to access healthcare, education, food,
          shelter, legal aid, and many other essential services.
          </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="group bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-blue-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">

            <div className="text-blue-600 text-6xl mb-6 flex justify-center group-hover:scale-110 transition-transform duration-500">
              <FiCpu />
            </div>

          <h3 className="text-2xl font-bold text-center mb-4">
           AI Needs Assessment
          </h3>

            <p className="text-slate-600 text-center leading-7">
            Describe your situation and AidLink's AI analyzes your needs
            to understand what type of humanitarian support may help you.
            </p>

        </div>

          <div className="group bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-blue-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
            <div className="text-green-600 text-5xl mb-5 flex justify-center">
              <FiUsers />
              </div>

                <h3 className="text-2xl font-bold text-center mb-4">
                  Find Organizations
                </h3>

            <p className="text-slate-600">
              Browse verified NGOs and support organizations
              that provide relevant services.
            </p>
          </div>


          <div className="group bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-blue-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
            <div className="text-orange-500 text-5xl mb-5 flex justify-center">
              <FiMapPin />
              </div>

                <h3 className="text-2xl font-bold text-center mb-4">
                  Personal Action Plan
                </h3>

            <p className="text-slate-600">
              Receive practical steps to contact organizations
              and get the assistance you need.
            </p>
          </div>


        </div>

      </div>

      </section>


      {/* Categories Section */}
      <section className="relative py-20 bg-blue-50 via-blue-50 to-indigo-100">

        <h2 className="text-3xl font-bold text-center mb-8">
          Support Categories
        </h2>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto px-6">

          {[
            "Healthcare",
            "Education",
            "Food",
            "Housing",
            "Employment",
            "Financial Support",
            "Women & Children",
            "Legal Aid"
          ].map((category) => (

            <div
              key={category}
              className="bg-white text-blue-700 rounded-lg p-4 
              text-center font-semibold shadow"
            >
              {category}
            </div>

            

          ))}

        </div>

      </section>

      <section className="relative py-20 bg-blue-50 via-blue-50 to-indigo-100">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
      Why Choose AidLink?
    </h2>

    <p className="text-center text-slate-600 max-w-3xl mx-auto mb-16 text-lg">
      AidLink combines Artificial Intelligence with trusted humanitarian
      organizations to help people quickly discover support services,
      receive personalized recommendations, and take the next steps with confidence.
    </p>

    <div className="grid md:grid-cols-4 gap-8">

      {/* Card 1 */}

      <div className="group bg-white/90 backdrop-blur-sm
rounded-3xl
border border-sky-100
shadow-lg
hover:shadow-2xl
hover:-translate-y-3
transition-all duration-500
p-8">

        <div className="text-sky-700 text-5xl flex justify-center mb-5">
          <FiCpu />
        </div>

        <h3 className="text-xl font-bold mb-3">
          AI Powered
        </h3>

        <p className="text-slate-600">
          Smart analysis helps understand every user's needs.
        </p>

      </div>

      {/* Card 2 */}

      <div className="group bg-white/90 backdrop-blur-sm
rounded-3xl
border border-sky-100
shadow-lg
hover:shadow-2xl
hover:-translate-y-3
transition-all duration-500
p-8">

        <div className="text-emerald-600 text-5xl flex justify-center mb-5">
          <FiHeart />
        </div>

        <h3 className="text-xl font-bold mb-3">
          Trusted NGOs
        </h3>

        <p className="text-slate-600">
          Connect with verified humanitarian organizations.
        </p>

      </div>

      {/* Card 3 */}

      <div className="group bg-white/90 backdrop-blur-sm
rounded-3xl
border border-sky-100
shadow-lg
hover:shadow-2xl
hover:-translate-y-3
transition-all duration-500
p-8">

        <div className="text-amber-500 text-5xl flex justify-center mb-5">
          <FiGlobe />
        </div>

        <h3 className="text-xl font-bold mb-3">
          Multiple Services
        </h3>

        <p className="text-slate-600">
          Healthcare, education, shelter, food and many more.
        </p>

      </div>

      {/* Card 4 */}

      <div className="group bg-white/90 backdrop-blur-sm
rounded-3xl
border border-sky-100
shadow-lg
hover:shadow-2xl
hover:-translate-y-3
transition-all duration-500
p-8">

        <div className="text-blue-700 text-5xl flex justify-center mb-5">
          <FiZap />
        </div>

        <h3 className="text-xl font-bold mb-3">
          Fast Guidance
        </h3>

        <p className="text-slate-600">
          Receive recommendations in just a few seconds.
        </p>

      </div>

    </div>

  </div>

</section>

    </div>
  );
}

export default Home;