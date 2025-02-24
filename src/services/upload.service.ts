import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constant";
import { IFIleURL } from "@/types/File";

const formDataHeaders = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

const uploadServices = {
  uploadFile: (payload: FormData) => instance.post(`${endpoint.MEDIA}/upload-single`, payload, formDataHeaders),
  removeFile: (payload: IFIleURL) => instance.delete(`${endpoint.MEDIA}/remove`, { data: payload }),
};

export default uploadServices;
