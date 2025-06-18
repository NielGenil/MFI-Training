export default function StepTwo() {
  return (
    <div className="flex items-center justify-center h-full bg-white p-4">
      <form class="w-full max-w-[1000px] shadow-2xl bg-white shadow-xl/30 border border-gray-300 p-6 rounded-2xl">

      {/* Father */}

        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Father's Name
            </label>
            <input
              className="appearance-none block w-full  rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
            />
          </div>

          <div className="w-full md:w-1/3 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Occupation
            </label>
            <input
              className="appearance-none block w-full rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
            />
          </div>

          <div className="w-full md:w-1/3 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Contact Number
            </label>
            <input
              className="appearance-none block w-full rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
            />
          </div>
        </div>


{/* Mother */}



        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Mother's Name
            </label>
            <input
              className="appearance-none block w-full  rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
            />
          </div>

          <div className="w-full md:w-1/3 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Occupation
            </label>
            <input
              className="appearance-none block w-full rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
            />
          </div>

          <div className="w-full md:w-1/3 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Contact Number
            </label>
            <input
              className="appearance-none block w-full rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
            />
          </div>
        </div>


{/* Guardian */}
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Guardian’s Name
            </label>
            <input
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
            <input
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
            <input
              className="appearance-none block w-full rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-3/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Home Address (if different from student)
            </label>
            <input
              className="appearance-none block w-full rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
            />
          </div>


        </div>



   

        <button className=""></button>
      </form>
    </div>
  );
}
