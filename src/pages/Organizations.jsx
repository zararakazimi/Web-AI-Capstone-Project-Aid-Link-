import { useState } from "react";
import organizations from "../data/organizations";
import OrganizationCard from "../components/OrganizationCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

function Organizations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Create category list from all categories
  const categories = [
    "All",
    ...new Set(organizations.flatMap((org) => org.categories)),
  ];

  console.log(organizations[0]);

  const filteredOrganizations = organizations.filter((organization) => {
  const search = searchTerm.trim().toLowerCase();

  const searchableText = [
    organization.name,
    organization.location,
    organization.description,
    ...(organization.categories || []),
    ...(organization.services || []),
  ]
    .join(" ")
    .toLowerCase();

  const matchesSearch =
    search === "" || searchableText.includes(search);

  const matchesCategory =
    selectedCategory === "All" ||
    organization.categories.includes(selectedCategory);

    console.log(searchTerm);

  return matchesSearch && matchesCategory;
});

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-3">
          Support Directory
        </h1>

        <p className="text-center text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
          Discover trusted organizations providing healthcare, education,
          food assistance, shelter, legal aid, and humanitarian support.
        </p>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredOrganizations.length > 0 ? (
            filteredOrganizations.map((organization) => (
              <OrganizationCard
                key={organization.id}
                organization={organization}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full text-xl py-10">
              No organizations found.
            </p>
          )}
        </div>

      </div>
    </div>
  );
}

export default Organizations;