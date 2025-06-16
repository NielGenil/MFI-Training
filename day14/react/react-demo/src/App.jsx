import { useEffect, useState } from "react";

import Student from "./components/student";
import { getStudents } from "./api";
// import { getStudents } from "./api";
// import { Button } from "./components/button";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then((response) => setStudents(response));
  }, []);

  return (
    <main className="w-screen h-screen bg-gray-100 flex flex-col items-center justify-center">
      {students?.map((student) => (
        <Student key={student.id} data={student} />
      ))}
    </main>
  );
}

export default App;
