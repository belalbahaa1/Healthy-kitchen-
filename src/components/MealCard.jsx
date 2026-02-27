import React from "react";
import { Link } from "react-router-dom";

const MealCard = ({ meal }) => {
  return (
    <div className="bg-white rounded-4xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full group">
      {/* Image Section */}
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-wider">
          Healthy Choice
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col grow">
        <h2 className="text-xl font-bold text-primary mb-2 line-clamp-1 group-hover:text-accent transition-colors">
          {meal.strMeal}
        </h2>
        <p className="text-text-main/60 text-sm mb-6 line-clamp-2 leading-relaxed">
          A delicious, nutrient-packed {meal.strCategory || "Vegetarian"} meal
          designed for a balanced lifestyle and great taste.
        </p>

        {/* Action Button */}
        <Link
          to={`/meal/${meal.idMeal}`}
          className="mt-auto w-full bg-primary text-white text-center py-3 rounded-xl font-bold text-sm hover:bg-primary/90 active:scale-[0.98] transition-all shadow-md shadow-primary/10"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default MealCard;
