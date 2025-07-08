import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const ToDoList = () => {
  const [presentTodo, setPresentTodo] = useState("");
  const [todoList, setTodoList] = useState<{
    [key: string]: { text: string; completed: boolean };
  }>({});
  return (
    <Grid>
      <Grid container>
        <Typography>Add a todo Here</Typography>
        <TextField
          value={presentTodo}
          onChange={(e) => setPresentTodo(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setTodoList({
                ...todoList,
                [Date.now()]: { text: presentTodo, completed: false },
              });
              setPresentTodo("");
            }
          }}
        ></TextField>
        <Button
          onClick={() => {
            setTodoList({
              ...todoList,
              [Date.now()]: { text: presentTodo, completed: false },
            });
            setPresentTodo("");
          }}
        >
          Add
        </Button>
      </Grid>
      <Grid>
        <Typography>Todo List</Typography>
        <Grid>
          <List>
            {Object.keys(todoList).map((todo) => (
              <ListItem
                secondaryAction={
                  <Button
                    onClick={() => {
                      const updatedTodoList = { ...todoList };
                      delete updatedTodoList[todo];
                      setTodoList(updatedTodoList);
                    }}
                  >
                    Delete
                  </Button>
                }
              >
                <ListItemText>
                  <Typography
                    sx={{
                      textDecoration: todoList[todo].completed
                        ? "line-through"
                        : "none",
                    }}
                  >
                    {todoList[todo].text}
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Button
                    onClick={() => {
                      const updatedTodoList = { ...todoList };
                      updatedTodoList[todo].completed =
                        !updatedTodoList[todo].completed;
                      setTodoList(updatedTodoList);
                    }}
                  >
                    {todoList[todo].completed ? "Not Complete" : "Complete"}
                  </Button>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ToDoList;
