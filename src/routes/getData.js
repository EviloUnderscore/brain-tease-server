import { fakeData } from "./fake-data";

export const getDataRoute = {
    method: "GET",
    path: "/api/datas/{id}",
    handler: (req, h) => {
        const id = req.params.id
        return fakeData.find(data => data.id == id);
    }
}