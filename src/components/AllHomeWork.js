import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAllHomeWorkOf } from "../utils/utils_supabase";
import "./AllHomeWork.css"

export default function TableAllHomeWorks() {
  const students = useLoaderData();
  const [homework, setHomework] = useState(()=> {
    return []
  });
  console.log(homework);

  useEffect(() => {
      students.data.map((student) => {
        getAllHomeWorkOf(student.Nombres, student.Apellidos).then(works => {
          setHomework(homework.push(works))
        });
      })
  }, []);

  return (
    <table className="table-all-works">
      <thead>
        <tr>
          <td>Name and Last Name</td>
          <td>Homework 1</td>
          <td>Homework 2</td>
          <td>Homework 3</td>
          <td>Homework 4</td>
          <td>Homework 5</td>
          <td>Homework 6</td>
          <td>Homework 7</td>
          <td>Homework 8</td>
        </tr>
      </thead>
      <tbody>
        {students.data.map((student) => {
          return (
            <tr key={students.Cedula}>
              <td>
                <h3>
                  {student.Nombres} {student.Apellidos}
                </h3>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
