import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID d9c483758c5da013f7e5e12fb3ce2ce79b3762ed32318f2b4e826589fc795808"
  }
});
