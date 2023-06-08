import Boom from "@hapi/boom";
import { fakeData } from "./fake-data";

export const getDataRoute = {
    method: "GET",
    path: "/api/datas/{id}",
    handler: (req, h) => {
        const id = req.params.id
        const data = fakeData.find(data => data.id === id);
        if (!data) throw Boom.notFound(`data doesn't exist with id ${id}`);
        return data;
    }
}