export const BASE_URL = "https://api.sirbenj.pro";

export const postRegister = async (data) => {
  const response = await fetch(`${BASE_URL}/api/register/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // `data` is the payload being sent
  });

  const res = await response.json();
  console.log(res);
  return res;
};

export const loginAPI = async (data) => {
  const response = await fetch(`${BASE_URL}/api/login/`, {
    method: "POST",
    headers: {
    //   "Content-Type": "application/json",
    //   Authorization: localStorage.getItem("token"),
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  });
  const res = await response.json();
  return res;
};
