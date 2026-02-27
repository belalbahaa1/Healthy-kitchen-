import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MealDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMeal(data.meals[0]);
        console.log(data);
      });
  }, [id]);

  // Logic: Extract ingredients and measures from the flat API object
  const ingredients = [];
  if (meal) {
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push({ name: ingredient, measure: measure });
      }
    }
  }

  if (!meal)
    return (
      <div className="min-h-screen flex items-center justify-center bg-light-bg">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-16 h-16 bg-primary/20 rounded-full mb-4"></div>
          <p className="text-primary font-bold">Preparing your recipe...</p>
        </div>
      </div>
    );

  return (
    <div className="bg-light-bg min-h-screen pb-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-4xl overflow-hidden shadow-2xl border-8 border-white aspect-square">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 flex gap-2">
                <span className="bg-white/90 backdrop-blur-md text-primary px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
                  🌿 {meal.strCategory}
                </span>
                <span className="bg-white/90 backdrop-blur-md text-accent px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
                  📍 {meal.strArea}
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Quick Info */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-primary leading-tight mb-6 mt-2">
                {meal.strMeal}
              </h1>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-50">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                🛒 Ingredients
                <span className="text-sm font-normal text-text-main/40">
                  ({ingredients.length} items)
                </span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {ingredients.map((ing, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center group"
                  >
                    <span className="text-text-main/80 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full opacity-40 group-hover:opacity-100 transition-opacity"></div>
                      {ing.name}
                    </span>
                    <span className="text-primary font-bold text-xs bg-highlight/30 px-2 py-0.5 rounded">
                      {ing.measure}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Instructions Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-primary mb-8 flex items-center gap-3">
            📖 Preparation Steps
            <div className="h-px bg-primary/10 grow"></div>
          </h2>
          <div className="space-y-6">
            {meal.strInstructions
              .split("\r\n")
              .filter((p) => p.trim() !== "")
              .map((paragraph, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary/5 text-primary border border-primary/10 flex items-center justify-center font-bold text-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {idx + 1}
                  </div>
                  <p className="text-text-main/70 text-lg leading-relaxed pt-1">
                    {paragraph}
                  </p>
                </div>
              ))}
          </div>

          {/* Video Link Placeholder (Logic for later) */}
          {meal.strYoutube && (
            <div className="mt-16 bg-primary text-white p-10 rounded-4xl flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
              <div className="relative z-10 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Watch the tutorial</h3>
                <p className="opacity-80">
                  Follow along with a step-by-step video guide.
                </p>
              </div>
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noreferrer"
                className="bg-accent text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 transition-transform relative z-10"
              >
                Open on YouTube
              </a>
              <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-16 blur-3xl"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
