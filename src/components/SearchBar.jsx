import { FiSearch } from "react-icons/fi";
function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="mb-8 flex justify-center">
  <div className="relative w-full md:w-1/2">

    <FiSearch
      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl"
    />

    <input
      type="text"
      placeholder="Search organizations..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

  </div>
</div>
  );
}

export default SearchBar;