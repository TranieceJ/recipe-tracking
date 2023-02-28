import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [formData, setFormData] = useState({ initialFormState }); //sets default values of the form
const {name,cuisine,photo,ingredients,preparation}=formData;
  // TODO: Add the required submit and change handlers
  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });//create new obj with original recipes and add new recipe to the end 
  }; 

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent browser refresh default
    createRecipe({ name, cuisine, photo, ingredients, preparation }); //create recipe after submission
    setFormData({ ...initialFormState }); // reset form to default values after submission
  };

  // TODO: Add the required input and textarea form elements.

  //textarea for ingredients and preparation inputs
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                {/*Name*/}
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  id="name"
                  onChange={handleChange}
                  value={formData.name}
                  rows={1}
                  required={true}
                />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                {/*Cuisine */}
                <input
                  type="text"
                  name="cuisine"
                  id="cuisine"
                  placeholder="Cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                  rows={1}
                  required={true}
                />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                {/*Photo URL */}
                <input
                  type="url"
                  name="photo"
                  id="photo"
                  placeholder="URL"
                  onChange={handleChange}
                  value={formData.photo}
                  rows={1}
                  required={true}
                />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                {/*Ingredients */}
                <textarea
                  name="ingredients"
                  id="ingredients"
                  placeholder="Ingredients"
                  onChange={handleChange}
                  value={formData.ingredients}
                  rows={2}
                  required={true}
                />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                {/*Preparation */}
                <textarea
                  name="preparation"
                  id="preparation"
                  placeholder="Preparation"
                  onChange={handleChange}
                  value={formData.preparation}
                  rows={2}
                  required={true}
                />
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
