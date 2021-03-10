import wretch from "wretch";

const BASE_URL = "http://jsonplaceholder.typicode.com/";

export default wretch().url(BASE_URL);
