import { useEffect, useState } from "react";
import Results from "./Results";
import useSubCategoryList from "./useSubcategory";

const SearchParams = () => {
  const [category, updateCategory] = useState({});
  const [categories, updateCategories] = useState([]);
  const [courses, setCourses] = useState([]);

  const [subCategory, updateSubCategory] = useState({});
  const [subCategories] = useSubCategoryList(category);
  console.log(subCategories);
  useEffect(() => {
    requestCategories();
    requestCourses();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestCourses() {
    let res = null;
    if (subCategory.id) {
      res = await fetch(
        `http://localhost:3004/subcategory/${subCategory.id}/courses`
      );
    } else {
      res = await fetch(`http://localhost:3004/users/1/courses`);
    }

    const json = await res.json();

    setCourses(json);
  }

  async function requestCategories() {
    const res = await fetch(`http://localhost:3004/category`);

    // add reducer
    const json = await res.json();

    updateCategories(json);
  }
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestCourses();
        }}
      >
        <label htmlFor="category">
          Category
          <select
            id="category"
            value={category.name}
            placeholder="Category"
            onChange={(e) => {
              updateCategory({
                name: e.target.value,
                id: Number(e.target.selectedOptions[0].getAttribute("id")),
              });
              updateSubCategory("");
            }}
          >
            <option />
            {categories.map((c) => (
              <option key={c.name + c.id} value={c.name} id={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="subCategory">
          SubCategory
          <select
            id="subCategory"
            value={subCategory.name}
            onChange={(e) => {
              updateSubCategory({
                name: e.target.value,
                id: Number(e.target.selectedOptions[0].getAttribute("id")),
              });
            }}
            onBlur={(e) => {
              updateSubCategory({
                name: e.target.value,
                id: Number(e.target.selectedOptions[0].getAttribute("id")),
              });
            }}
          >
            <option />
            {subCategories.map((subCategory) => (
              <option
                key={subCategory.name + subCategory.id}
                value={subCategory.name}
                id={subCategory.id}
              >
                {subCategory.name}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
      <Results courses={courses} />;
    </div>
  );
};

export default SearchParams;
