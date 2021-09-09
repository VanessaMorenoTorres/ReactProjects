import React from "react";
import Student from "./Student";
import { useState } from "react";
import "./App.css";

function App() {
  const [students] = useState([
    {
      name: "Cait Yomorta",
      bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum",
      scores: [
        {
          date: "02-08-2018",
          score: 77,
        },
        {
          date: "04-22-2018",
          score: 92,
        },
        {
          date: "09-15-2018",
          score: 68,
        },
      ],
    },

    {
      name: "Holly Baird",
      bio: "Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, magnam autem! Quia facere quaerat eum repudiandae dolorum eligendi iure quae. Eos id possimus accusantium, earum animi modi hic.",
      scores: [
        {
          date: "12-14-2018",
          score: 88,
        },
        {
          date: "01-09-2019",
          score: 79,
        },
        {
          date: "02-23-2019",
          score: 91,
        },
        {
          date: "03-01-2019",
          score: 95,
        },
      ],
    },

    {
      name: "Wes Mungia",
      bio: "Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, adipisci id cupiditate asperiores nam perferendis. Facere odit laborum ipsum autem repellendus natus eius doloremque ullam perferendis. Enim repellendus ut veniam?",
      scores: [
        {
          date: "10-11-2018",
          score: 62,
        },
        {
          date: "11-24-2018",
          score: 74,
        },
        {
          date: "12-19-2018",
          score: 85,
        },
      ],
    },
  ]);
  return (
  <div className="App">
    <h1>Students</h1>
    {students.map((student, index) => (
      <Student student={student} key={index} />
    ))}
  </div>
  );
}

export default App;
