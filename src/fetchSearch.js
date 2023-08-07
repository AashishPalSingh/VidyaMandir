async function fetchSearch({ queryKey }) {
  const { category, subCategory } = queryKey[1];
  let res = null;
  if (subCategory.id) {
    res = await fetch(
      `http://localhost:3004/subcategory/${subCategory.id}/courses`
    );
  } else {
    res = await fetch(`http://localhost:3004/users/1/courses`);
  }
  if (!res.ok)
    throw new Error(`course search not okay: ${category}, ${subCategory}`);

  return res.json();
}

export default fetchSearch;
