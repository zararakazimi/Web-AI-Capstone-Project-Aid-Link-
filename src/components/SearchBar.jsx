function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="🔍 Search organizations..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full md:w-1/2 mx-auto block px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default SearchBar;