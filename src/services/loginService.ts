import { LoginUser } from "../models/LoginUser";

const baseurl = "https://dummyjson.com";

const loginUrl = baseurl + "/auth/login";

function checkStatus(response: any) {
  if (response.ok) {
    return response;
  } else {
    const httpErrorInfo = {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
    };

    console.log(`log server http error: ${JSON.stringify(httpErrorInfo)}`);

    let errorMessage = traslateStatusToErrorMessage(httpErrorInfo.status);
    throw new Error(errorMessage);
  }
}

function traslateStatusToErrorMessage(status: number) {
  switch (status) {
    case 400:
        return "Credenziali non corrette";
    case 401:
      return "Please login again.";
    case 403:
      return "You do not have permission to view the project(s).";
    default:
      return "There was an error retrieving the project(s). Please try again.";
  }
}

function convertToLoginUser(data: any) {
  return new LoginUser(data);
}

const loginService = {
  login(username: string, password: string) {
    return fetch(loginUrl,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        }
        )
      .then(checkStatus)
      .then((response) => response.json())
      .then(convertToLoginUser)
      .catch((error: TypeError) => {
        console.log("log client error", error);
        throw new Error(
          "There was an error retrieving the projects. Please try again."
        );
      });
  },
};

export { loginService };
