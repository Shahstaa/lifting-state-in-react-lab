const BurgerStack = ({ stack, removeFromBurger }) => {
    return (
      <ul>
        {stack.length === 0 ? (
          <li>No Ingredients</li>
        ) : (
          stack.map((ingredient) => (
            <li key={ingredient.name} style={{ backgroundColor: ingredient.color }}>
              {ingredient.name}
              <button onClick={() => removeFromBurger(ingredient.name)}>X</button>
            </li>
          ))
        )}
      </ul>
    );
  };
  export default BurgerStack;