"use client";
import { VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import WelcomeMessage from "@/components/welcomeMessage/WelcomeMessage";
import InputTask from "@/components/inputTask/InputTask";
import ListTask from "@/components/listTask/ListTask";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodoRequest } from "@/redux/actions";

function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos) || [];

  useEffect(() => {
    dispatch(fetchTodoRequest());
  }, [dispatch]);

  return (
    <div className="container">
      <VStack
        borderRadius={"24px"}
        backgroundColor={"white"}
        w={"960px"}
        h={"calc(100vh - 100px)"}
        padding={"40px 60px"}
        gap={5}
        boxShadow={"0px 0px 48px 0px #BDBDBD40"}
      >
        <WelcomeMessage userName="John Doe" />
        <InputTask placeholder="Add a new task..." />
        <ListTask listTask={todos} />
      </VStack>
    </div>
  );
}

export default Todo;
