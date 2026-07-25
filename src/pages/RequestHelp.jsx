import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { analyzeSituation } from "../services/aiService";

function RequestHelp() {
  const [formData, setFormData] = useState({
    situation: "",
    category: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const aiResponse = await analyzeSituation(
        formData.situation,
        formData.category
      );

      navigate("/results", {
        state: {
          formData,
          aiResponse,
        },
      });
    } catch (error) {
      console.error(error);
      alert("Unable to analyze your request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-blue-700 text-center mb-3">
          Request Help
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Tell us about your situation and AidLink will recommend the most suitable organizations.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block mb-2 font-semibold">
              Describe your situation
            </label>

            <textarea
              name="situation"
              rows="6"
              value={formData.situation}
              onChange={handleChange}
              placeholder="Example: I lost my job and need food assistance for my family."
              className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Support Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Category</option>
              <option>Healthcare</option>
              <option>Education</option>
              <option>Food Assistance</option>
              <option>Shelter</option>
              <option>Emergency Relief</option>
              <option>Legal Aid</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-semibold text-white transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "🤖 Analyzing..." : "Analyze with AI"}
          </button>

          {loading && (
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center animate-pulse">
              <div className="text-5xl mb-3">🤖</div>

              <h3 className="text-xl font-bold text-blue-700">
                AidLink AI is analyzing your situation...
              </h3>

              <p className="text-gray-600 mt-2">
                This usually takes a few seconds.
              </p>
            </div>
          )}

        </form>

      </div>
    </div>
  );
}

export default RequestHelp;