import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./AllHomeWork.css";

export default function TableAllHomeWorks() {
  const list_homework = useLoaderData();
  console.log("Lista final de homeworks", list_homework);
  const [selectedStudent, setSelectedStudent] = useState([]);
  console.log(selectedStudent);
  return (
    <>
      <select
        onChange={(event) => {
          const selectedCedula = Number(event.target.value);
          const selectedStudent = list_homework.find(
            (student) => student.Cedula === selectedCedula
          );
          console.log(selectedCedula);
          setSelectedStudent(selectedStudent);
        }}
      >
        <option value="">Selecciona un estudiante</option>
        {list_homework.map((student, index) => (
          <option key={index} value={student.Cedula}>
            {student.Nombres} {student.Apellidos}
          </option>
        ))}
      </select>
      {selectedStudent && (
        <section className="table-all-works">
          <h1>Name and Last Name</h1>
          <div key={selectedStudent.Cedula}>
            <h3>
              {selectedStudent.Nombres} {selectedStudent.Apellidos}
            </h3>
            {selectedStudent.homeworks.map((work) => (
              <div key={work.id}>
                {work.publicURL && <a href={work.publicURL}>View homeworks</a>}
                <h1>{work.name}</h1>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
