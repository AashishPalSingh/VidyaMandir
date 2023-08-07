import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchCourse from "./fetchCourse";
import ErrorBoundary from "./ErrorBoundary";
import { useState } from "react";
import Modal from "./Modal";

const Details = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const results = useQuery(["details", id], fetchCourse);
  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  const course = results.data;

  return (
    <div className="details">
      <div>
        <h1>{course.name}</h1>
        <button onClick={() => setShowModal(true)}>
          Subscribe {course.name}
        </button>
        <p>{course.desc}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to subscribe {course.name}?</h1>
              <div className="buttons">
                <button>Yes</button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
