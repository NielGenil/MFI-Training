import { Link, Outlet } from "react-router-dom";


export default function IndexPage() {
  return (
    <main className="w-screen h-screen bg-gray-100 flex flex-col">
      <nav className="flex justify-between items-center px-5 py-2 bg-white shadow-md">
        <div className="flex items-center gap-2">
        <img
          src="https://lspu-orms.42web.io/resources/images/logo.png"
          alt=""
          className="h-[40px]"
        />
        <p className="text-[20px]">LSPU</p>
</div>
<div>
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/create-student">Enrollment</Link>
          <Link to="/students">Students</Link>
        </div>
        </div>
      </nav>
      <section className="flex-1 overflow-y-auto">
        <Outlet />
      </section>
    </main>
  );
}