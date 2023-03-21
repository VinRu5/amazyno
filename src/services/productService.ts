const baseurl = "http://api.fakeshop-api.com";

const allProductUrl = baseurl + "/products/getAllProducts";

function checkStatus(response: any) {
  console.log(response);
}

const productService = {
  getAll() {
    return fetch("https://dummyjson.com/carts/user/5")
      .then((res) => res.json())
      .then(console.log);
  },
};

export { productService };
