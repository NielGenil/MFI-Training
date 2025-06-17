import { Link, Outlet } from "react-router-dom";


export default function IndexPage() {
  return (
    <main className="w-screen h-screen bg-gray-100 flex flex-col">
      <nav className="flex justify-between items-center px-5 py-2 bg-white shadow-md">
        <div className="flex items-center gap-2">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.clipartmax.com%2Fpng%2Fmiddle%2F205-2057839_lspu-los-ba%25C3%25B1os-laguna-state-polytechnic-university-logo.png&f=1&nofb=1&ipt=47e82575cf968e2f8d72eb64ed89ce5c559b14683cd6f1eb369d912af91f4a08"
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