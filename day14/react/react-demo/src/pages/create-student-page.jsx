import { Link, Outlet } from "react-router-dom";

export default function CreateStudentPage() {
  return (
    <main className="flex-1 flex flex-col bg-gray-100 overflow-y-auto h-screen">
      <div className="flex gap-1 px-5 py-2 mx-auto">
        <Link to={"/create-student"} className="bg-cyan-700 shadow-md px-3 py-2 rounded-lg text-white text-center">
            <p className="font-bold">Step 1</p>
            <p>Student Information</p>
        </Link>
        <Link to={"/create-student/step-two"} className="bg-cyan-700 shadow-md px-3 py-2 rounded-lg text-white text-center">
            <p className="font-bold">Step 2</p>
            <p>Guardian Information</p>
        </Link>
        <Link to={"/create-student/step-three"} className="bg-cyan-700 shadow-md px-3 py-2 rounded-lg text-white text-center">
            <p className="font-bold">Step 3</p>
            <p>Educational Background</p>
        </Link>
        <Link to={"/create-student/step-four"} className="bg-cyan-700 shadow-md px-3 py-2 rounded-lg text-white text-center">
            <p className="font-bold">Step 4</p>
            <p>Enrollment Information</p>
        </Link>
      </div>



<section className="flex-1 overflow-y-auto">
        <Outlet />
      </section>
    </main>
  );
}
