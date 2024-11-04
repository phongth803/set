import { VStack } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import mainTodo from "../../assets/mainTodo.png";
import Filter from "@/components/Filter/Filter";
import TaskItem from "../taskItem/TaskItem";
import FilterStatus from "../../constans/FilterStatus";

function ListTask({ listTask }) {
  const [filter, setFilter] = React.useState(FilterStatus.ALL);
  const handleChangeFilter = (value) => {
    setFilter(value);
  };

  const filteredTasks = React.useMemo(() => {
    if (filter === FilterStatus.DONE) {
      return listTask.filter((task) => task.isChecked);
    } else if (filter === FilterStatus.UNDONE) {
      return listTask.filter((task) => !task.isChecked);
    }
    return listTask;
  }, [filter, listTask]);

  return (
    <VStack
      gap={5}
      paddingTop={5}
      width={"100%"}
      borderTop={"1px solid #E2E8F0"}
      height={"100%"}
    >
      {listTask.length === 0 ? (
        <div style={{ margin: "auto" }}>
          <Image
            src={mainTodo}
            alt="Main Todo"
            width={300}
            height={300}
            priority
          />
        </div>
      ) : (
        <Filter value={filter} handleChangeFilter={handleChangeFilter} />
      )}
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.todoID}
          id={task.todoID}
          name={task.todoName}
          isDone={task.isChecked}
        />
      ))}
    </VStack>
  );
}

export default ListTask;
