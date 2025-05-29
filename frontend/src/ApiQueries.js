const apiURL = import.meta.env.VITE_API_URL;

async function ApiLogin(Email, Password) {
  try {
    console.log(apiURL);
    let response = await fetch(`${apiURL}/messaging-api/v1/contacts/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: Email,
        password: Password,
      }),
    });
    if (!response.ok) {
      throw new Error(`HTTP Error!`);
    }

    const ApiResponse = await response.json();
    localStorage.setItem("jwt", ApiResponse.jwt);
    console.log(ApiResponse.jwt);
    return ApiResponse;
  } catch (error) {
    console.error(error);
  }
}

export { ApiLogin };
