import { TaskList } from "./TaskList";

export const Task = (props) => {
  const { list } = props;
  const handleClickTime = (B1) => {
    console.log("hizo click en completo para " + B1);
  };
  const handleClickTime2 = (B2) => {
    console.log("hizo click en incompleto para " + B2);
  };
  return (
    <ul>
      {list.map((movie) => (
        <TaskList
          name={movie.name}
          onCheckTimeClick={handleClickTime}
          onCheckTimeClick2={handleClickTime2}
        />
      ))}
    </ul>
  );
};
