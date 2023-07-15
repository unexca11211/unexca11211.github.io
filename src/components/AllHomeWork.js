import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAllHomeWorkOf } from "../utils/utils_supabase";
import "./AllHomeWork.css";

export default function TableAllHomeWorks() {
  const {students, homework} = useLoaderData();
  const [selectedStudent, setSelectedStudent] = useState(null);
  // const [homework, setHomework] = useState([]);

  // useEffect(() => {
  //   if (selectedStudent) {
  //     getAllHomeWorkOf(selectedStudent.Nombres, selectedStudent.Apellidos)
  //       .then((works) => {
  //         setHomework(works);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // }, [selectedStudent]);
  console.log(homework)
  return (
    <>
      <select
        onChange={(event) => {
          const selectedCedula = event.target.value;
          const selectedStudent = students.data.find(
            (student) => student.Cedula === selectedCedula
          );
          setSelectedStudent(selectedStudent);
        }}
      >
        <option value="">Selecciona un estudiante</option>
        {students.data.map((student) => (
          <option key={student.Cedula} value={student.Cedula}>
            {student.Nombres} {student.Apellidos}
          </option>
        ))}
      </select>
      {selectedStudent && (
        <table className="table-all-works">
          <thead>
            <tr>
              <td>Name and Last Name</td>
              {homework.map((work) => (
                <td key={work.id}>{work.name}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr key={selectedStudent.Cedula}>
              <td>
                <h3>
                  {selectedStudent.Nombres} {selectedStudent.Apellidos}
                </h3>
              </td>
              {homework.map((work) => (
                <td key={work.id}>
                  {work.url && <a href={work.url}>Link</a>}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
}