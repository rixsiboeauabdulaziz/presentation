import axios from "axios";

const instance2 = axios.create({
  baseURL: "https://68ac6f6c7a0bbe92cbba6f48.mockapi.io/tugutut",
  headers: {'Content-Type': 'application/json'}
});

export default instance2;