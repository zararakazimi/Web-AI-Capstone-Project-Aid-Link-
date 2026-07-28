function CategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <section className="mb-10">

      <h3 className="text-center text-lg font-semibold text-gray-700 mb-5">
        Browse by Category
      </h3>

      <div className="flex flex-wrap justify-center gap-4">

        {categories.map((category) => (

          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-sm border ${
              selectedCategory === category
                ? "bg-blue-600 text-white border-blue-600 shadow-lg scale-105"
                : "bg-white text-gray-700 border-gray-200 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-700 hover:shadow-md"
            }`}
          >
            {category}
          </button>

        ))}

      </div>

    </section>
  );
}

export default CategoryFilter;