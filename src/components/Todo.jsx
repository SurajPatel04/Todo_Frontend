import {
  Button,
  Box,
  Checkbox,
  List,
  Typography,
  ListItem,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Card from "@mui/material/Card";
import { useState } from "react";

function Todo(props) {
  const [isVisible, setVisible] = useState(true);
  const obj1 = [
    {
      Todo: "Login Page",
      Last_Date: "12/01/2004",
      subTodo: {
        obj11: {
          Todo: "Create HTML startucture",
          Last_Date: "11/01/2004",
        },
        oobj12: { Todo: "Style with CSS", Last_Date: "11/02/2004" },
        obj13: { Todo: "Style with CSS", Last_Date: "11/02/2004" },
        obj14: { Todo: "Style with CSS", Last_Date: "11/02/2004" },
        obj16: { Todo: "Style with CSS", Last_Date: "11/02/2004" },
        obj15: { Todo: "Style with CSS", Last_Date: "11/02/2004" },
      },
    },
    {
      Todo: "Create Account Page",
      Last_Date: "12/03/2004",
      subTodo: {},
    },
  ];

  const AddTask = () => {
    <Card variant="outlined">{card}</Card>;
  };
  return (
    <>
      <Box sx={{ width: 1, display: props.display }}>
        <Button
          sx={{ width: 1 }}
          variant="contained"
          size="large"
          startIcon={<AddIcon />}
          onClick={props.handleAddTask}
        >
          Add Task
        </Button>
        {obj1.map((item, index) => (
          <Box
            key={index}
            mt={2}
            borderRadius={2}
            border={1}
            bgcolor={item.Color}
          >
            <Box
              m={1}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              gap={2}
            >
              <Box
                component="span"
                sx={{
                  flex: 1,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                <Checkbox
                  color="success"
                  sx={{
                    color: "white",
                  }}
                />
                {item.Todo}
              </Box>
              <Box component="span" sx={{ marginRight: "auto" }}>
                {item.Last_Date}
              </Box>
              <Button variant="contained" startIcon={<EditIcon />}>
                Edit
              </Button>
              <Button
                variant="contained"
                color="error"
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </Box>

            {/* Subtasks */}
            {item.subTodo && Object.keys(item.subTodo).length > 0 ? (
              <>
                <Divider sx={{ backgroundColor: "white" }} />
                <Box sx={{ maxHeight: 150, overflowY: "auto" }}>
                  <List sx={{ pl: 8 }}>
                    {Object.values(item.subTodo).map((sub, idx) => (
                      <ListItem key={idx} sx={{ display: "flex", gap: 1 }}>
                        <Checkbox
                          size="small"
                          color="success"
                          sx={{ color: "white" }}
                        />
                        <Typography>{sub.Todo}</Typography>
                        <Typography variant="body2" color="gray">
                          | {sub.Last_Date}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </>
            ) : (
              ""
            )}
          </Box>
        ))}
      </Box>
    </>
  );
}

export default Todo;
