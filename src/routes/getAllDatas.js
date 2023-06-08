import { fakeData } from "./fake-data";

export const getAllDatasRoutes = {
    method: "GET",
    path: "/api/datas",
    handler: (req, h) => {
        return fakeData;
    }
}