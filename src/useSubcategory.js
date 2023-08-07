import { useQuery } from "@tanstack/react-query";
import fetchSubCategoryList from "./fetchSubCategoryList.js";

export default function useSubcategory(category) {
  const results = useQuery(["subcategories", category], fetchSubCategoryList);

  return [results?.data ?? [], results.status];
}
