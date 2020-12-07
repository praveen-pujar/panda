import axios from "axios";

// const API_URL = "http://localhost:3080/api/auth/";

class AuthService {
  login(email, password) {
    return axios
      .post("http://localhost:3080/signin", {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  // logout() {
  //   localStorage.removeItem("user");
  // }

  signup(firstname,lastname, email, password,password2) {
    return axios.post("http://localhost:3080/signup", {
      firstname,
      lastname,
      email,
      password,
      password2
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  // Get user details on load of user page after logging!
  user(email,accessToken){
    return axios.get("http://localhost:3080/user", {
      email,accessToken
    }).then(response => {
      return response.data;
    });
  }



}

export default new AuthService();