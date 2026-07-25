import { useEffect, useState } from "react";
import OrganizationCard from "../components/OrganizationCard";

function SavedResources() {
  const [savedOrganizations, setSavedOrganizations] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("savedOrganizations")) || [];

    setSavedOrganizations(saved);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-3">
          Saved Resources
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Your favorite organizations are stored here.
        </p>

        {savedOrganizations.length === 0 ? (
          <div className="text-center mt-20">
            <h2 className="text-2xl font-semibold text-gray-500">
              No saved organizations yet.
            </h2>

            <p className="text-gray-400 mt-2">
              Visit the Support Directory and save your favorite organizations.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {savedOrganizations.map((organization) => (
              <OrganizationCard
                key={organization.id}
                organization={organization}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SavedResources;