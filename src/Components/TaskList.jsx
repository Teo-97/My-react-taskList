export const TaskList = (props) => {
  const { name, onCheckTimeClick, isFavourite } = props;
  const handleClick = () => {
    console.log(name + "Realizado");
    onCheckTimeClick(name);
  };
  return (
    <li>
      <article>
        <h3>{name}</h3>
        <label>
          <button onClick={handleClick}>
            {isFavourite ? "✅" : "❗️ INCOMLETO"}
          </button>
        </label>
      </article>
    </li>
  );
};
