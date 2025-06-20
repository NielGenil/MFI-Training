import { use, useEffect, useRef, useState } from "react";
import { usePersistentForm } from "../hooks/usePersistentForm";
import { useNavigate } from "react-router-dom";
import {
  getCourses,
  getCourseType,
  getEnrollmentStatus,
  getEnrollmentType,
  getModeofLearning,
  postEnrollmentType,
} from "../api";

export default function StepFour() {
  const navigate = useNavigate();
  const academicYearRef = useRef(null);
  const programEnrollRef = useRef(null);
  const applicantTyperef = useRef(null);
  const enrollmentStatus = useRef(null);
  const modeoflearning = useRef(null);
  const course = useRef(null);

  const persistentField = {
    academicYearRef,
    programEnrollRef,
    applicantTyperef,
    enrollmentStatus,
    modeoflearning,
    course,
  };

  const [statusEnrollment, setEnrollmentStatus] = useState([]);

  useEffect(() => {
    getEnrollmentStatus().then((response) => {
      setEnrollmentStatus(response);
    });
  }, []);

  const [modeofLearning, setModeofLearning] = useState([]);

  useEffect(() => {
    getModeofLearning().then((response) => {
      setModeofLearning(response);
    });
  }, []);

  const [courseType, setCouseType] = useState([]);

  useEffect(() => {
    getCourseType().then((response) => {
      setCouseType(response);
    });
  }, []);

  const [courses, setCouses] = useState([]);

  useEffect(() => {
    getCourses().then((response) => {
      setCouses(response);
    });
  }, []);

  const [enrollmentType, setEnrollmentType] = useState([]);

  useEffect(() => {
    getEnrollmentType().then((response) => {
      setEnrollmentType(response);
    });
  }, []);

  usePersistentForm({ refs: persistentField });

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      //step-1
      student_information: {
        first_name: localStorage.getItem("firstNameRef"),
        last_name: localStorage.getItem("lastNameRef"),
        middle_name: localStorage.getItem("middleNameRef"),
        birth_date: localStorage.getItem("birthDateRef"),
        gender: localStorage.getItem("genderRef"),
        nationality: localStorage.getItem("nationalityRef"),
        religion: localStorage.getItem("religionRef"),
        contact_number: localStorage.getItem("contactNumberRef"),
        email: localStorage.getItem("emailAddressRef"),
        address: localStorage.getItem("addressRef"),
        birth_place: localStorage.getItem("birstPlaceRef"),
        lrn_number: localStorage.getItem("lrnRef"),
      },
      // step-2
      guardian_information: {
        full_name: localStorage.getItem("guardianNameRef"),
        relationship: localStorage.getItem("guardianRelationRef"),
        contact_number: localStorage.getItem("guardianContactRef"),
        address: localStorage.getItem("guardianAddressRef"),
      },
      // step-3
      educational_background: {
        highschool_name: localStorage.getItem("schoolAttendedRef"),
        strand: localStorage.getItem("shsStrandRef"),
        year_graduated: localStorage.getItem("yearGraduatedRef"),
        general_average: localStorage.getItem("generalAverageRef"),
        school_address: localStorage.getItem("schoolAddressRef"),
      },
      // step-4

      academic_year: localStorage.getItem("academicYearRef"),
      course: localStorage.getItem("course"),
      type: localStorage.getItem("applicantTyperef"),
      status: localStorage.getItem("enrollmentStatus"),
      mode_of_learning: localStorage.getItem("modeoflearning"),
    };
    console.log("DATA", postData);
    postEnrollmentType(postData).then((res) => {
      console.log("Success:", res);
    });

    // alert("Success!");
    // localStorage.clear();
    // setTimeout(() => {
    // navigate("/create-student");
    // }, 3000);
  };

  return (
    <form className="ml-20 mr-20 mx-auto shadow-2xl bg-white shadow-xl/30 border border-gray-300 p-6 rounded-2xl">
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Academic Year / Semester
          </label>
          <input
            ref={academicYearRef}
            className="appearance-none block w-full  rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
          />
        </div>

        <div className="w-full md:w-1/3 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Course Type
          </label>
          <div className="relative">
            <select
              ref={programEnrollRef}
              className="block appearance-none w-full rounded-sm border border-gray-400 text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              {courseType?.map((coursetype) => {
                return (
                  <option key={coursetype.id} value={coursetype.id}>
                    {coursetype.name}
                  </option>
                );
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

        <div className="w-full md:w-1/3 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Type of Applicant
          </label>
          <div className="relative">
            <select
              ref={applicantTyperef}
              className="block appearance-none w-full rounded-sm border border-gray-400 text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              {enrollmentType?.map((enrollmenttype) => {
                return (
                  <option key={enrollmenttype.id} value={enrollmenttype.id}>
                    {enrollmenttype.name}
                  </option>
                );
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
            for="grid-first-name"
          >
            Courses
          </label>
          <div className="relative">
            <select
              ref={course}
              className="block appearance-none w-full rounded-sm border border-gray-400 text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              {courses?.map((corses) => {
                return (
                  <option key={corses.id} value={corses.id}>
                    {corses.name}
                  </option>
                );
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

        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Enrollment Status
          </label>
          <div className="relative">
            <select
              ref={enrollmentStatus}
              className="block appearance-none w-full rounded-sm border border-gray-400 text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              {statusEnrollment?.map((enrollmentStat) => {
                return (
                  <option key={enrollmentStat.id} value={enrollmentStat.id}>
                    {enrollmentStat.name}
                  </option>
                );
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

        <div className="w-full md:w-1/3 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Mode of Learning
          </label>
          <div className="relative">
            <select
              ref={modeoflearning}
              className="block appearance-none w-full rounded-sm border border-gray-400 text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              {modeofLearning?.map((modeoflearning) => {
                return (
                  <option key={modeoflearning.id} value={modeoflearning.id}>
                    {modeoflearning.name}
                  </option>
                );
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

      <div className="flex flex-row-reverse">
        <button
          onClick={handleSubmit}
          className="mt-4 hover:bg-white hover:text-cyan-700 border hover:border-cyan-700 text-white bg-cyan-700 rounded md:rounded-lg p-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
