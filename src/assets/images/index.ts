import anothershots1 from "./anothershots-1.webp";
import anothershots2 from "./anothershots-2.webp";
import anothershots3 from "./anothershots-3.webp";
import anothershots4 from "./anothershots-4.webp";
import anothershots5 from "./anothershots-5.webp";
import anothershots6 from "./anothershots-6.webp";
import anothershots7 from "./anothershots-7.webp";
import blogEnterprise from "./blog-enterprise.webp";
import blogSocketio from "./blog-socketio.webp";
import fuelPrediction01 from "./fuel-prediction-01.webp";
import fuelPrediction02 from "./fuel-prediction-02.webp";
import fuelPrediction03 from "./fuel-prediction-03.webp";
import fuelPrediction04 from "./fuel-prediction-04.webp";
import fypPoster from "./FYP Poster.webp";
import imageSearch from "./image-search.webp";
import mozzamelt from "./mozzamelt.webp";
import mozzamelt2 from "./mozzamelt2.webp";
import portfolioSs from "./portfolio-ss.webp";
import portrait from "./portrait.webp";
import studyBuddyHome from "./studyBuddy-home.webp";
import studyBuddySignIn from "./studyBuddy-signIn.webp";
import studyBuddySignUp from "./studyBuddy-signUp.webp";
import travelRecommendation from "./travel-recommendation.webp";
import wallArt1 from "./wall-art-1.webp";
import wallArt2 from "./wall-art-2.webp";
import wallArt3 from "./wall-art-3.webp";

export const images = {
  portrait,
  "anothershots-1": anothershots1,
  "anothershots-2": anothershots2,
  "anothershots-3": anothershots3,
  "anothershots-4": anothershots4,
  "anothershots-5": anothershots5,
  "anothershots-6": anothershots6,
  "anothershots-7": anothershots7,
  "wall-art-1": wallArt1,
  "wall-art-2": wallArt2,
  "wall-art-3": wallArt3,
  "portfolio-ss": portfolioSs,
  "image-search": imageSearch,
  "blog-socketio": blogSocketio,
  "blog-enterprise": blogEnterprise,
  "FYP-poster": fypPoster,
  "fuel-prediction-01": fuelPrediction01,
  "fuel-prediction-02": fuelPrediction02,
  "fuel-prediction-03": fuelPrediction03,
  "fuel-prediction-04": fuelPrediction04,
  mozzamelt,
  "mozzamelt-2": mozzamelt2,
  "travel-recommendation": travelRecommendation,
  "studyBuddy-signIn": studyBuddySignIn,
  "studyBuddy-home": studyBuddyHome,
  "studyBuddy-signUp": studyBuddySignUp,
} as const;

export type ImageKey = keyof typeof images;
