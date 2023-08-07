async function fetchSubCategoryList({ queryKey }) {
  const category = queryKey[1];

  if (!category) return [];

  const res = await fetch(
    `http://localhost:3004/category/${category.id}/subcategory`
  );

  if (!res.ok) {
    throw new Error(`subcategory ${category.id} fetch not ok`);
  }

  return res.json();
}

export default fetchSubCategoryList;
