import { db } from "../../database";

export const getAllCategoriesRoutes = {
  method: "GET",
  path: "/api/categories",
  handler: async (req, h) => {
      const { results } = await db.query(
          'SELECT * FROM categories'
      );
      return results;
  }

}