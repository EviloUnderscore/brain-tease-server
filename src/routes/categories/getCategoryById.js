import { db } from "../../database";
import Boom from "@hapi/boom";

export const getCategoryByIdRoutes = {
    method: "GET",
    path: "/api/categories/{id}",
    handler: async (req, h) => {
      const id = req.params.id
      const { results } = await db.query(
          'SELECT * FROM categories WHERE id=?',
          [id],
      );
      const data = results[0];
      if (!data) throw Boom.notFound(`Category doesn't exist with id ${id}`);
      return data;
  }
}