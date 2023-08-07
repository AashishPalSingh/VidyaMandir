import Course from "./Course";

const Results = ({ courses }) => {
  return (
    <div className="search">
      {!courses.length ? (
        <h1>No Courses Found</h1>
      ) : (
        courses.map((course) => {
          return (
            <Course
              name={course.name}
              desc={course.desc}
              image={course.image}
              key={course.id + course.name + course.userId}
              id={course.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
