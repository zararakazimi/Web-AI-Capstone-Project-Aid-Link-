import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">

        <h1 className="text-5xl font-bold text-blue-700 mb-6">
          Find the Support You Need with AidLink
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          AidLink uses artificial intelligence to connect people with
          healthcare, education, food assistance, housing, employment,
          and community support services.
        </p>

        <Link
          to="/request-help"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg 
          font-semibold hover:bg-blue-700 transition"
        >
          Request Assistance
        </Link>

      </section>


      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          How AidLink Helps
        </h2>


        <div className="grid md:grid-cols-3 gap-8">


          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              AI Needs Assessment
            </h3>

            <p className="text-gray-600">
              Describe your situation and our AI analyzes your needs
              to understand what support may help you.
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              Find Organizations
            </h3>

            <p className="text-gray-600">
              Browse verified NGOs and support organizations
              that provide relevant services.
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              Personal Action Plan
            </h3>

            <p className="text-gray-600">
              Receive practical steps to contact organizations
              and get the assistance you need.
            </p>
          </div>


        </div>

      </section>


      {/* Categories Section */}
      <section className="bg-blue-600 text-white py-12">

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

    </div>
  );
}

export default Home;