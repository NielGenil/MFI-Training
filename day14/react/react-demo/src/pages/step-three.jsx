import { useRef } from "react";
import { usePersistentForm } from "../hooks/usePersistentForm";

export default function StepThree() {
  const schoolAttendedRef = useRef(null);
  const shsStrandRef = useRef(null);
  const yearGraduatedRef = useRef(null);
  const generalAverageRef = useRef(null);
  const schoolAddressRef = useRef(null);

  const persistentField = {
    schoolAttendedRef,
    shsStrandRef,
    yearGraduatedRef,
    generalAverageRef,
    schoolAddressRef,
  };
  usePersistentForm({ refs: persistentField });
  return (
    <form className="mx-auto ml-20 mr-20 shadow-2xl bg-white shadow-xl/30 border border-gray-300 p-6 rounded-2xl">
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Senior High School Attended
          </label>
          <input
            ref={schoolAttendedRef}
            className="appearance-none block w-full  rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
          />
        </div>

        <div className="w-full md:w-1/3 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            SHS Strand
          </label>
          <input
            ref={shsStrandRef}
            className="appearance-none block w-full rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
          />
        </div>

        <div className="w-full md:w-1/3 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            General Average (if required)
          </label>
          <input
            ref={generalAverageRef}
            className="appearance-none block w-full rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            School Address
          </label>
          <input
            ref={schoolAddressRef}
            className="appearance-none block w-full rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
          />
        </div>

        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Year Graduated
          </label>
          <input
            ref={yearGraduatedRef}
            className="appearance-none block w-full rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
          />
        </div>
      </div>

      <button className=""></button>
    </form>
  );
}
