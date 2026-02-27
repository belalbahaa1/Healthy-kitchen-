import React, { useEffect, useState } from "react";
import MealCard from "./MealCard";

const healthyCategoriesList = [
  "Vegetarian",
  "Vegan",
  "Seafood",
  "Chicken",
  "Breakfast",
  "Side",
];

const Menu = () => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Vegetarian");
  const [searchTerm, setSearchTerm] = useState("");

  // Logic: Fetch and Filter Healthy Categories
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => {
        const filtered = (data.categories || []).filter((cat) =>
          healthyCategoriesList.includes(cat.strCategory),
        );
        setCategories(filtered);
      });
  }, []);

  // Logic: Sync meals with active category
  useEffect(() => {
    if (searchTerm !== "") return; // Don't override if searching
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${activeCategory}`,
    )
      .then((res) => res.json())
      .then((data) => setMeals(data.meals || []));
  }, [activeCategory, searchTerm]);

  // Logic: Handle Search with Debounce
  useEffect(() => {
    if (searchTerm.trim() === "") return;
    const delayDebounceFn = setTimeout(() => {
      fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`,
      )
        .then((res) => res.json())
        .then((data) => setMeals(data.meals || []));
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <div className="bg-light-bg min-h-screen pb-20">
      {/* Header Section */}
      <section className="px-6 md:px-24 pt-16 pb-12 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-primary max-w-3xl">
          Explore our simple, healthy recipes
        </h1>
        <p className="text-text-main/70 text-lg max-w-2xl mb-10 leading-relaxed font-medium">
          Discover quick, whole-food dishes that fit real-life schedules and
          taste amazing. Use the search bar to find a recipe by name or
          ingredient, or simply scroll the list and let something delicious
          catch your eye.
        </p>
      </section>
      {/* Search and Filters Section */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-10">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-gray-100 pb-8">
          <div className="relative w-full mx-auto md:w-80">
            <input
              type="text"
              placeholder="Search by name or ingredient..."
              className="w-full bg-white border border-gray-200 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Category Tabs Section */}
        <div className="mt-8 flex flex-col items-center">
          <div className="flex gap-2 overflow-x-auto max-w-full pb-4 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.idCategory}
                onClick={() => {
                  setActiveCategory(cat.strCategory);
                  setSearchTerm("");
                }}
                className={`px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.strCategory && searchTerm === ""
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-white text-text-main hover:bg-gray-50 border border-gray-100"
                }`}
              >
                {cat.strCategory}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Meals Grid Section */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {meals.length > 0 ? (
            meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="text-4xl mb-4">🥗</div>
              <p className="text-gray-500 font-medium">
                No meals found matching your criteria...
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("Vegetarian");
                }}
                className="mt-4 text-primary font-bold hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
