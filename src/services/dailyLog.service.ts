import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constant";
import { IDailyLog } from "@/types/DailyLog";

const dailyLogServices = {
  getDailyLogs: () => instance.get(`${endpoint.DAILYLOG}`),
  getDailyLog: (id: string) => instance.get(`${endpoint.DAILYLOG}/${id}`),
  getDailyLogByMember: (params: string) => instance.get(`${endpoint.DAILYLOG}-member?${params}`),
  getDailyLogReport: (id: string) => instance.get(`${endpoint.DAILYLOG}-report/${id}`),
  createDailyLog: (payload: IDailyLog) => instance.post(`${endpoint.DAILYLOG}`, payload),
  updateDailyLog: (id: string, payload: IDailyLog) => instance.put(`${endpoint.DAILYLOG}/${id}`, payload),
  deleteFoodDailyLog: (id: string, foodId: string) => instance.delete(`${endpoint.DAILYLOG}/${id}/food/${foodId}`),
  deleteActivityDailyLog: (id: string, activityId: string) => instance.delete(`${endpoint.DAILYLOG}/${id}/activity/${activityId}`),
};

export default dailyLogServices;
