import axios from "axios";

export interface Launch {
  id: number;
  name: string;
  title: string;
  img: string;
  detail: string;
}

// 获取所有发射项目
export function getAllLaunches(params: any) {
  return axios.get("/api/v5/launches", { params });
}
