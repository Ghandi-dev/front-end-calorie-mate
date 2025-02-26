import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constant";
import { IDailyLog } from "@/types/DailyLog";

const dailyLogServices = {
  getDailyLogs: () => instance.get(`${endpoint.DAILYLOG}`),
  getDailyLog: (id: string) => instance.get(`${endpoint.DAILYLOG}/${id}`),
  getDailyLogByMember: (params: string) => instance.get(`${endpoint.DAILYLOG}-member?${params}`),
  getDailyLogReport: () => instance.get(`${endpoint.DAILYLOG}-report`),
  createDailyLog: (payload: IDailyLog) => instance.post(`${endpoint.DAILYLOG}`, payload),
  updateDailyLogPersonal: (id: string, payload: IDailyLog) => instance.put(`${endpoint.DAILYLOG}/${id}/personal`, payload),
  updateDailyLogFoodActivity: (id: string, payload: IDailyLog) => instance.put(`${endpoint.DAILYLOG}/${id}/food-activity`, payload),
  deleteDailyLogFood: (id: string, foodId: string) => instance.delete(`${endpoint.DAILYLOG}/${id}/food/${foodId}`),
  deleteDailyLogActivity: (id: string, activityId: string) => instance.delete(`${endpoint.DAILYLOG}/${id}/activity/${activityId}`),
};

export default dailyLogServices;
