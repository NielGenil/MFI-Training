import { useRef } from "react";
import { usePersistentForm } from "../hooks/usePersistentForm";

export default function StepTwo() {
    const guardianNameRef = useRef(null);
    const guardianRelationRef = useRef(null);
    const guardianContactRef = useRef(null);
    const guardianAddressRef = useRef(null);

    const persistentField = {
        guardianNameRef,
        guardianRelationRef,
        guardianContactRef ,
        guardianAddressRef ,
    }

usePersistentForm({ refs: persistentField});

  return (
    
      <form className="mx-auto ml-20 mr-20 shadow-2xl bg-white shadow-xl/30 border border-gray-300 p-6 rounded-2xl"> 




{/* Guardian */}
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Guardian’s Name
            </label>
            <input ref={guardianNameRef}
              className="appearance-none block w-full rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
            />
          </div>

          <div className="w-full md:w-1/3 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Relationship to Student
            </label>
            <input ref={guardianRelationRef}
              className="appearance-none block w-full rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
            />
          </div>

          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              Guardian’s Contact Number
            </label>
            <input ref={guardianContactRef}
              className="appearance-none block w-full rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-3/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Home Address (if different from student)
            </label>
            <input ref={guardianAddressRef}
              className="appearance-none block w-full rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
            />
          </div>


        </div>



   

        <button className=""></button>
      </form>
   
  );
}
