const apiURL = import.meta.env.VITE_API_URL;

async function ApiLogin(formData) {
  try {
    console.log(formData);
    let response = await fetch(`${apiURL}/messaging-api/v1/contacts/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });
    if (!response.ok) {
      throw new Error(`HTTP Error!`);
    }

    const ApiResponse = await response.json();
    localStorage.setItem("jwt", ApiResponse.jwt);
  } catch (error) {
    console.error(error);
  }
}

async function ApiRegister(formData) {
  try {
    console.log(formData);

    let response = await fetch(`${apiURL}/messaging-api/v1/contacts/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        bio: formData.bio,
      }),
    });
    const ApiResponse = await response.json();
    console.log(ApiResponse);
  } catch (error) {
    console.error(error);
  }
}

export { ApiLogin, ApiRegister };
