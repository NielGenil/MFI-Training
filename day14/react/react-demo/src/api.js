export const BASE_URL = 'http://172.17.2.133:8000';

export const getStudents = async () => {
    const response = await fetch(`${BASE_URL}/api/students/`);
    const res = await response.json();
    console.log(res);

    return res;
};

export const getGenders = async() => {
    const response = await fetch(`${BASE_URL}/api/gender`);
    const res = await response.json();
    console.log(res);
    return res;
};

export const getEnrollmentStatus = async() => {
    const response = await fetch(`${BASE_URL}/api/enrollment-status`);
    const res = await response.json();
    console.log(res);
    return res;
};

export const getModeofLearning = async() => {
    const response = await fetch(`${BASE_URL}/api/modeoflearning`);
    const res = await response.json();
    console.log(res);
    return res;
};

export const getCourseType = async() => {
    const response = await fetch(`${BASE_URL}/api/courseTypes`);
    const res = await response.json();
    console.log(res);
    return res;
};

export const getCourses = async() => {
    const response = await fetch(`${BASE_URL}/api/courses`);
    const res = await response.json();
    console.log(res);
    return res;
};

export const getEnrollmentType = async() => {
    const response = await fetch(`${BASE_URL}/api/enrollmentTypes`);
    const res = await response.json();
    console.log(res);
    return res;
};

export const postEnrollmentType = async (data) => {
    const response = await fetch(`${BASE_URL}/api/onetapEnroll/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // `data` is the payload being sent
    });

    const res = await response.json();
    console.log(res);
    return res;
};

