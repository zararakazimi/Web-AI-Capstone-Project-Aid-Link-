import { useState, useEffect } from "react";
import { FiMapPin, FiGlobe, FiHeart } from "react-icons/fi";

function OrganizationCard({ organization }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedOrganizations =
      JSON.parse(localStorage.getItem("savedOrganizations")) || [];

    const isSaved = savedOrganizations.some(
      (item) => item.id === organization.id
    );

    setSaved(isSaved);
  }, [organization.id]);

  const handleSave = () => {
    const savedOrganizations =
      JSON.parse(localStorage.getItem("savedOrganizations")) || [];

    if (saved) {
      const updated = savedOrganizations.filter(
        (item) => item.id !== organization.id
      );

      localStorage.setItem("savedOrganizations", JSON.stringify(updated));
      setSaved(false);
    } else {
      savedOrganizations.push(organization);

      localStorage.setItem(
        "savedOrganizations",
        JSON.stringify(savedOrganizations)
      );

      setSaved(true);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Organization Name */}
      <h2 className="text-2xl font-bold text-blue-700 mb-3">
        {organization.name}
      </h2>

      {/* Category Badge */}
      <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
        {organization.categories.join(", ")}
      </span>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-4">
        {organization.description}
      </p>

      {/* Location */}
      <div className="flex items-center text-gray-600 mb-5">
        <FiMapPin className="text-blue-600 mr-2 text-lg" />
        <span>{organization.location}</span>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">

  <a
    href={organization.website}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
  >
    <FiGlobe />
    Visit Website
  </a>

  <button
    onClick={handleSave}
    className={`flex items-center gap-2 px-5 py-2 rounded-lg font-semibold transition ${
      saved
        ? "bg-green-500 hover:bg-green-600 text-white"
        : "bg-green-300 hover:bg-green-400 text-white"
    }`}
  >
    <FiHeart />
    {saved ? "Saved" : "Save"}
  </button>

</div>
    </div>
  );
}

export default OrganizationCard;