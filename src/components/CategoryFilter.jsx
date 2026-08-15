function CategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="w-full">
      <label className="block mb-2 font-semibold text-blue-900">
        Support Category
      </label>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="
          w-full pl-12 pr-4 py-3 border border-gray-300 text-gray-400 text-xl rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500
        "
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;