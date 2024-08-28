import ImgBackBtn from "./../../assets/back-btn.png";
import { Link } from "react-router-dom";
import "./HomeBtn.css";
function HomeBtn() {
  return (
    <div>
      <Link to={"/"}>
        <img src={ImgBackBtn} className="back-btn" />
      </Link>
    </div>
  );
}

export default HomeBtn;
