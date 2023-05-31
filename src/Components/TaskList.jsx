export const TaskList = (props) => {
  const { name, onCheckTimeClick, onCheckTimeClick2 } = props;
  const handleClick = () => {
    console.log(name + "Realizado");
    onCheckTimeClick(name);
  };
  const Incomplete = () => {
    console.log(name + " sin realizar");
    onCheckTimeClick2(name);
  };
  return (
    <ul>
      <li>
        <article>
          <h3>{name}</h3>
          <button onClick={handleClick}>complete</button>
          <button onClick={Incomplete}>incomplete</button>
        </article>
      </li>
    </ul>
  );
};
