import React from "react";

function Recipe({
  name,
  cuisine,
  photo,
  ingredients,
  preparation,
  deleteRecipe,
}) {
  return (
    <tr className="content_td">
      <td>
        {name}
        </td>
      <td>
        {cuisine}
        </td>
      <td>
        <img src= {photo} />
        </td>
      <td>
        <p >{ingredients}</p>
        </td>
      <td>
        <p>{preparation}</p>
        </td>
      <td>
        <button name="delete" onClick={deleteRecipe}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Recipe; 