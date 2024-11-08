const IngredientList = ({ ingredients, addToBurger }) => {
    return (
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.name} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => addToBurger(ingredient)}>+</button>
          </li>
        ))}
      </ul>
    );
  };
  export default IngredientList;