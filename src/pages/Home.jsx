import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-light-bg">
      {/* Hero Section */}
      <section className="relative px-6 md:px-24 pt-16 pb-12 flex flex-col items-center text-center">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-16 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full -ml-40 blur-3xl"></div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight text-primary">
          <span className="relative inline-block z-10">
            Healthy
            <span className="absolute bottom-1 -left-3 -right-3 h-[45%] bg-highlight -z-10 rounded-md"></span>
          </span>{" "}
          meals, zero fuss
        </h1>
        <p className="text-text-main/70 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-medium">
          Discover whole-food recipes that you can cook tonight—no processed
          junk, no guesswork.
        </p>

        <Link to="/menu">
          <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-lg">
            Start exploring
          </button>
        </Link>

        {/* Hero Placeholder Image */}
        <div className="mt-16 w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
          <img
            src="https://placehold.co/1200x675/e2e8f0/1e293b?text=Healthy+Cooking+Lifestyle"
            alt="Cooking Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 md:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-16 font-extrabold text-primary">
            What you'll get
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Whole-food recipes",
                icon: "🍎",
                desc: "Each dish uses everyday, unprocessed ingredients.",
              },
              {
                title: "Minimum fuss",
                icon: "⚡",
                desc: "All recipes are designed to make eating healthy quick and easy.",
              },
              {
                title: "Search in seconds",
                icon: "🔍",
                desc: "Filter by name or ingredient and jump straight to the recipe you need.",
              },
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-start gap-4">
                <div className="w-12 h-12 bg-light-bg rounded-xl flex items-center justify-center text-2xl shadow-sm border border-gray-100">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-primary">
                  {feature.title}
                </h3>
                <p className="text-text-main/60 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 md:px-24 flex flex-col md:flex-row items-center gap-16 overflow-hidden bg-white">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-primary">
            Crafted with Care, Served with Purpose
          </h2>
          <p className="text-text-main/70 text-lg leading-relaxed">
            Good food starts with good ingredients. We prepare every meal with
            care, using fresh produce and wholesome recipes designed to help you
            feel your best every day.
          </p>
        </div>
        <div className="md:w-1/2 rounded-4xl overflow-hidden shadow-xl aspect-square md:aspect-auto md:h-[500px]">
          <img
            src="https://placehold.co/600x500/cbd5e1/1e293b?text=Pure+Ingredients+Honest+Flavor"
            alt="Kitchen"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 md:px-24 pb-24">
        <div className="bg-[#E4EDE5] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden flex flex-col items-center">
          {/* Decorative background vectors (CSS only) */}
          <div className="absolute top-0 left-0 w-32 h-32 border-16 border-primary/5 rounded-full -ml-16 -mt-16"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/5 rounded-full -mr-24 -mb-24"></div>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-10 leading-tight max-w-2xl relative z-10 text-primary">
            Ready to cook smarter?
          </h2>
          <p className="text-text-main/80 text-lg mb-10 relative z-10 max-w-sm">
            Hit the button, pick a recipe, and get dinner on the table—fast.
          </p>
          <Link to="/menu">
            <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-black transition-colors relative z-10 shadow-lg">
              Browse recipes
            </button>
          </Link>
        </div>
      </section>

      {/* Real Footer */}
      <footer className="bg-lightBg py-6 mt-16">
        <div className="text-center text-sm text-gray-600">
          Created by{" "}
          <a
            href="https://github.com/belalbahaa1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            Belal Bahaa
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
