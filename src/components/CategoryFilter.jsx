function CategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-full font-medium transition ${
            selectedCategory === category
              ? "bg-blue-600 text-white"
              : "bg-white border border-gray-300 text-gray-700 hover:bg-blue-100"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;