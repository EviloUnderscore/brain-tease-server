import { createDataRoute } from "./createData";
import { deleteDataRoute } from "./deleteData";
import { getAllDatasRoutes } from "./getAllDatas";
import { getDataRoute } from "./getData";
import { updateDataRoute } from "./updateData";

export default [
    getAllDatasRoutes,
    getDataRoute,
    createDataRoute,
    updateDataRoute,
    deleteDataRoute,
];