import { Cart } from "../models/Cart";
import { LoginUser } from "../models/LoginUser";

const baseurl = "https://dummyjson.com";

const cartUrl = baseurl + "/carts/user/";

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
    case 401:
      return "Please login again.";
    case 403:
      return "You do not have permission to view the project(s).";
    default:
      return "There was an error retrieving the project(s). Please try again.";
  }
}

function convertToCart(data: any) {
  return new Cart(data.carts[0]);
}

const cartService = {
  getUserCart(usedId: number) {
    return fetch(`${cartUrl}${usedId}`)
      .then(checkStatus)
      .then((response) => response.json())
      .then(convertToCart)
      .catch((error: TypeError) => {
        console.log("log client error", error);
        throw new Error(
          "There was an error retrieving the projects. Please try again."
        );
      });
  },
};

export { cartService };
