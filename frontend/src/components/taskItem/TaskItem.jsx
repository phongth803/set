import { Flex, Checkbox, Button, Input } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteTodoRequest, updateTodoRequest } from "@/redux/actions";

function TaskItem({ id, name, isDone }) {
  const [isEditing, setIsEditing] = useState(false);
  const [curentName, setCurrentName] = useState(name);
  const dispatch = useDispatch();
  const handleDeleteTask = () => {
    dispatch(deleteTodoRequest(id));
  };
  const handleToggleTask = () => {
    dispatch(updateTodoRequest(id, !isDone, name));
  };
  const handleEditTask = () => {
    dispatch(updateTodoRequest(id, isDone, curentName));
    setIsEditing(false);
  };
  const handleChangeName = (e) => {
    setCurrentName(e.target.value);
  };
  return (
    <Flex
      w={"100%"}
      h={"72px"}
      padding={"24px"}
      align="center"
      justify="space-between"
      backgroundColor={"#F9FAFB"}
      borderRadius={"12px"}
    >
      <Flex align="center" flex="1">
        <Checkbox
          onChange={handleToggleTask}
          isChecked={isDone}
          size="lg"
          colorScheme="teal"
        />
        <Input
          w={"100%"}
          ml={4}
          fontSize="lg"
          textColor={isDone ? "#9CA3AF" : "#1F2A37"}
          textDecoration={isDone ? "line-through" : "none"}
          value={curentName}
          border="none"
          isReadOnly={!isEditing}
          onChange={handleChangeName}
          _focus={{
            outline: "none",
            boxShadow: "none",
          }}
          ref={(input) => {
            if (input && isEditing) {
              input.focus();
            }
          }}
        />
      </Flex>

      <Flex>
        <Button
          colorScheme="teal"
          variant={isEditing ? "solid" : "outline"}
          size={"sm"}
          mr={"16px"}
          isDisabled={isDone}
          onClick={isEditing ? handleEditTask : () => setIsEditing(true)}
        >
          {isEditing ? "Save" : "Edit"}{" "}
        </Button>
        <Button
          colorScheme="red"
          variant={isEditing ? "solid" : "outline"}
          size={"sm"}
          onClick={isEditing ? () => setIsEditing(false) : handleDeleteTask}
        >
          {isEditing ? "Cancel" : "Delete"}
        </Button>
      </Flex>
    </Flex>
  );
}

export default TaskItem;
