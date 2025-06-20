import { useEffect, useRef, useState } from "react";
import { usePersistentForm } from "../hooks/usePersistentForm";
import { getGenders } from "../api";

export default function StepOne() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const middleNameRef = useRef(null);
  const birthDateRef = useRef(null);
  const ageRef = useRef(null);
  const genderRef = useRef(null);
  const civilStatusRef = useRef(null);
  const nationalityRef = useRef(null);
  const religionRef = useRef(null);
  const contactNumberRef = useRef(null);
  const emailAddressRef = useRef(null);
  const addressRef = useRef(null);
  const birstPlaceRef = useRef(null);
  const lrnRef = useRef(null);


  const persistentFields = {
    firstNameRef,
    lastNameRef ,
    middleNameRef,
    birthDateRef ,
    ageRef,
    genderRef,
    civilStatusRef,
    nationalityRef,
    religionRef,
    contactNumberRef,
    emailAddressRef,
    addressRef,
    birstPlaceRef,
    lrnRef,
  };
// GET DATA ON DATA BASE
  const [gender, setGender] = useState([]);

  console.log(gender, 'gender state');

  useEffect(() => {
    getGenders().then((response) => {
      setGender(response)
    });
  }, []);

  usePersistentForm({ refs: persistentFields});
  
  return (
  
      <form className="mx-auto ml-20 mr-20 shadow-2xl bg-white shadow-xl/30 border border-gray-300 p-6 rounded-2xl"> 
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              First Name
            </label>
            <input ref={firstNameRef}
              className="appearance-none block w-full  rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
            />
          </div>

          <div className="w-full md:w-1/3 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          
            >
              Middle Name (optional)
            </label>
            <input ref={middleNameRef}
              className="appearance-none block w-full rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
            />
          </div>

          <div className="w-full md:w-1/3 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            
            >
              Last Name
            </label>
            <input ref={lastNameRef}
              className="appearance-none block w-full rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
             
            >
              Date of Birth
            </label>
            <input ref={birthDateRef}
              className="appearance-none block w-full rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="date"
            />
          </div>

          <div className="w-full md:w-1/3 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        
            >
              Age
            </label>
            <input ref={ageRef}
              className="appearance-none block w-full rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
            />
          </div>

          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        
            >
              Gender
            </label>
            <div className="relative">
              <select ref={genderRef}
                className="block appearance-none w-full rounded-sm border border-gray-400 text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                {gender?.map((gender) => {
                  return (<option key={gender.id} value={gender.id}>{gender.name}</option>)
                })}
                
                
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
             
            >
              Civil Status
            </label>
            <input ref={civilStatusRef}
              className="appearance-none block w-full rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
            />
          </div>

          <div className="w-full md:w-1/3 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
         
            >
              Nationality
            </label>
            <input ref={nationalityRef}
              className="appearance-none block w-full rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
            />
          </div>

          <div className="w-full md:w-1/3 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            
            >
              Religion
            </label>
            <input ref={religionRef}
              className="appearance-none block w-full rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
           
            >
              Contact Number
            </label>
            <input ref={contactNumberRef}
              className="appearance-none block w-full rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
            />
          </div>

          <div className="w-full md:w-1/3 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        
            >
              Email Address
            </label>
            <input ref={emailAddressRef}
              className="appearance-none block w-full rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="email"
            />
          </div>

          <div className="w-full md:w-1/3 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          
            >
              Address
            </label>
            <input ref={addressRef}
              className="appearance-none block w-full rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
            />
          </div>
        </div>


                <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
             
            >
              Place of Birth
            </label>
            <input ref={birstPlaceRef}
              className="appearance-none block w-full rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
            />
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
             
            >
              LRN Number
            </label>
            <input ref={lrnRef}
              className="appearance-none block w-full rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
            />
          </div>


        </div>

  
  <button className=""></button>

 
      </form>
    
  );
}
