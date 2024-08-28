import "./Home.css";
import imgSecure from "./secure.png";
import imgBrain from "./brain .png";
import imgLove from "./love.png";
import FeaturesCard from "./../../components/FeaturesCard/FeaturesCard";
import { Link } from "react-router-dom";
function Home() {
  const Features = [
    {
      featureImg: imgSecure,
      featureDescription:
        "Notes will be saved securely in your browser`s local storage. ",
    },
    {
      featureImg: imgBrain,
      featureDescription:
        "Use your brain for thinking. not for remembering things.",
    },
    {
      featureImg: imgLove,
      featureDescription: "Loved by 100+ users.Feedbacks are always welcome !",
    },
  ];
  return (
    <div className="home-container">
      <h1 className="center text-primary home-heading ">Quick Tick✍🏻</h1>
      <p
        className="center text-secondary app-description"
        style={{ color: "#393E46" }}
      >
        QuickTick makes task management simple. 📋 Easily organize, set
        reminders ⏰, track progress 📈, and stay synced across devices 📱. Get
        organized, stay on top of your tasks, and boost your productivity
        effortlessly! 🚀✨
      </p>
      <div className="feature-container">
        {Features.map((feature, index) => {
          const { featureImg, featureDescription } = feature;
          return (
            <FeaturesCard
              key={index}
              featureImg={featureImg}
              featureDescription={featureDescription}
            />
          );
        })}
      </div>
      <div className="btn-container">
        <Link to={"/add"} className="text-decoration">
          <button type="button" className="button ">
            Add Notes📝
          </button>
        </Link>
        <Link to={'/show'} className="text-decoration">
        <button
          type="button"
          className="button"
          style={{ backgroundColor: "#00ADB5"}}
        >
          View Notes👁️
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
