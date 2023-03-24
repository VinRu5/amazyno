import { Product } from "../models/Product";

const baseurl = "https://dummyjson.com";

const allProductUrl = baseurl + "/products";

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

function convertToProducts(data: any) {
  return data.products.map((product: any) => new Product(product));
}

function convertToProduct(data: any) {
  return new Product(data);
}

const productService = {
  getAll() {
    return fetch(allProductUrl)
      .then(checkStatus)
      .then((response) => response.json())
      .then(convertToProducts)
      .catch((error: TypeError) => {
        console.log("log client error", error);
        throw new Error(
          "There was an error retrieving the projects. Please try again."
        );
      });
  },

  getById(id: number) {
    return fetch(`${allProductUrl}/${id}`)
      .then(checkStatus)
      .then((response) => response.json())
      .then(convertToProduct)
      .catch((error: TypeError) => {
        console.log("log client error", error);
        throw new Error(
          "There was an error retrieving the projects. Please try again."
        );
      });
  },
};

export { productService };
