import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function CourseDetails() {
  const { diplomaId } = useParams();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Simulated fetch for courses by diploma ID
    axios
      .get(`/api/diplomas/${diplomaId}/courses`) // Replace with actual API endpoint
      .then((res) => setCourses(res.data))
      .catch((err) => console.error(err));
  }, [diplomaId]);

  return (
    <div className="courses">
      <h1>Courses for Diploma {diplomaId}</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <Link to={`/register?course=${course.name}`}>{course.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
