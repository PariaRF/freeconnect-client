import http from "./httpService";

export function getCategorysApi() {
  return http.get("/category/list").then(({ data }) => data.data);
}
