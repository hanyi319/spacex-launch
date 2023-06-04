import axios from "axios";

export interface Launch {
  id: number;
  name: string;
  date_local: string;
  links: any;
  details: string;
}

// 获取所有发射项目
export function getAllLaunches(params: any) {
  return axios.get("/api/v5/launches", { params });
}
