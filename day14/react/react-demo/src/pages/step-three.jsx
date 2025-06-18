export default function StepThree() {
  return (
  
      <form class="w-full max-w-[1000px] mx-auto shadow-2xl bg-white shadow-xl/30 border border-gray-300 p-6 rounded-2xl">



        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Senior High School Attended
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
              SHS Strand
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
              Year Graduated
            </label>
            <input
              className="appearance-none block w-full rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="date"
            />
          </div>
        </div>






        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              General Average (if required)
            </label>
            <input
              className="appearance-none block w-full  rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
            />
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              School Address
            </label>
            <input
              className="appearance-none block w-full rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
            />
          </div>


        </div>








   

        <button className=""></button>
      </form>
  
  );
}
