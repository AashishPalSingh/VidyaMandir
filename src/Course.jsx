import { Link } from "react-router-dom";
const Course = (props) => {
  const { name, image, desc, id } = props;
  let hero = "http://localhost:5173/NoImage.jpg";
  if (image) {
    hero = image;
  }
  return (
    <Link to={`/courses/${id}`} className="course">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${desc}`}</h2>
      </div>
    </Link>
  );
};

export default Course;
