import "./Featured.css";

export default function Featured() {
  return (
    <div className="featured">
      <div className="featuredItems">
        <img className="featuredImg" src="images/f-1.webp" alt="item1" />
        <div className="featuredTitles">
          <h1>Location 1</h1>
          <h1>123 properties</h1>
        </div>
      </div>
      <div className="featuredItems">
        <img className="featuredImg" src="images/f-2.jpg" alt="item2" />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h1>123 properties</h1>
        </div>
      </div>
      <div className="featuredItems">
        <img className="featuredImg" src="images/f-3.webp" alt="item3" />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h1>123 properties</h1>
        </div>
      </div>
    </div>
  );
}
