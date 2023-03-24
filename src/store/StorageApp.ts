import { LoginUser } from "../models/LoginUser";

let instance: StorageApp | undefined;

class StorageApp {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    instance = this;
  }

  private AUTH_KEY = "auth";

  saveUser(userData: LoginUser) {
    localStorage.setItem(this.AUTH_KEY, JSON.stringify(userData));
  }

  getUser(): LoginUser | undefined {
    const authUser = localStorage.getItem(this.AUTH_KEY);
    const authUserParse = JSON.parse(authUser ?? "");

    const loginUser = new LoginUser(authUserParse);

    return loginUser || undefined;
  }

  removeUser() {
    localStorage.removeItem(this.AUTH_KEY);
  }
}

const storageApp = Object.freeze(new StorageApp());
export default storageApp;
