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
  <div className="
    bg-white
    rounded-2xl
    shadow-md
    border border-blue-100
    p-6
    hover:shadow-xl
    hover:-translate-y-1
    transition-all
    duration-300
  ">

    {/* Organization Name */}
    <h2 className="
      text-2xl
      font-bold
      text-blue-900
      mb-3
    ">
      {organization.name}
    </h2>


    {/* Category Badge */}
    <span className="
      inline-block
      bg-sky-100
      text-sky-700
      text-sm
      font-semibold
      px-3
      py-1
      rounded-full
      mb-4
    ">
      {organization.categories.join(", ")}
    </span>


    {/* Description */}
    <p className="
      text-slate-600
      leading-relaxed
      mb-4
    ">
      {organization.description}
    </p>


    {/* Location */}
    <div className="
      flex
      items-center
      text-slate-600
      mb-5
    ">
      <FiMapPin className="text-sky-700 mr-2 text-lg" />
      <span>{organization.location}</span>
    </div>


    {/* Buttons */}
    <div className="flex gap-3">

      {/* Website Button */}
      <a
        href={organization.website}
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex-1
          flex
          items-center
          justify-center
          gap-2
          bg-blue-800
          text-white
          py-2
          rounded-lg
          font-semibold
          hover:bg-sky-700
          transition
          duration-300
        "
      >
        Visit Website
      </a>


      {/* Save Button */}
      <button
        onClick={handleSave}
        className={`flex items-center gap-2 px-5 py-2 rounded-lg font-semibold transition ${
          saved
            ? "bg-blue-800 hover:bg-blue-900 text-white"
            : "bg-blue-100 hover:bg-blue-200 text-blue-800"

        }`}
      >
        {saved ? "Saved" : "Save"}
      </button>

    </div>

  </div>
);

}

export default OrganizationCard;