import axios from "axios";

export interface Launch {
  id: number;
  name: string;
  date_local: string;
  links: any;
  details: string;
}

// const baseUrl = process.env.API_BASE_URL || "";

// 获取所有发射项目
export function getAllLaunches(params: any) {
  return axios.get("/api/v5/launches", { params });
  // return axios.get(`${baseUrl}/launches`, { params });
}
