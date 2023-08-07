const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];
  const apiRes = await fetch(`http://localhost:3004/courses/${id}`);

  if (!apiRes.ok) {
    throw new Error(`courses/${id} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchPet;
