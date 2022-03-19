import axios from "axios";

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
// export default axios.create({
//   baseURL: "https://api.nached.xyz/docs",
// });
