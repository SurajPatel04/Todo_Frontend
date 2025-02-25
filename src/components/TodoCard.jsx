import { useState } from "react";
import { Box, Typography, Button, TextField, IconButton } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import AddIcon from "@mui/icons-material/Add";
import CancelIcon from "@mui/icons-material/Cancel";

function TodoCard(props) {
  // ✅ State to store subtodos
  const [subTodos, setSubTodos] = useState([]);

  // ✅ Function to add a new sub-todo
  const handleMoreSubTodo = () => {
    setSubTodos([...subTodos, { id: Date.now(), text: "", date: null }]);
  };

  const handleEnterEvent = (event) => {
    if (event.key === "Enter") {
      handleMoreSubTodo();
    }
  };

  const handleCancel = (id) => {
    console.log(id);
    setSubTodos(subTodos.filter((todo) => todo.id !== id));
  };

  return (
    <Box sx={{ display: props.display }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          sx={{
            backdropFilter: "blur(10px)", // Glassmorphism Effect
            background: "rgba(255, 255, 255, 0.15)", // Semi-transparent
            border: "1px solid rgba(255, 255, 255, 0.2)", // Subtle border
            padding: 4,
            borderRadius: 4,
            maxWidth: 500,
            margin: "auto",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.3)", // Soft shadow
          }}
        >
          {/* Title */}
          <Typography
            textAlign="center"
            fontSize={22}
            fontWeight="bold"
            color="white"
            mb={2}
          >
            ✏️ New Todo
          </Typography>

          {/* Input Fields */}
          <Box display="flex" gap={2} mb={3}>
            <TextField label="Todo" fullWidth color="white" />
            <DatePicker
              label="Select Due Date"
              sx={{
                width: "100%",

                borderRadius: 2,
                backdropFilter: "blur(5px)",
              }}
              slotProps={{
                textField: {
                  InputProps: {
                    sx: {
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "black", // Change border color when focused
                        color: "black",
                      },
                    },
                  },
                },
              }}
            />
          </Box>

          {/* Subtodo Section */}
          <Box
            sx={{
              backgroundColor: "rgba(255,255,255,0.25)",
              borderRadius: 3,
              padding: 2,
              boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
              backdropFilter: "blur(8px)",
            }}
          >
            <Typography color="white" fontSize={16} fontWeight="bold" mb={1}>
              📌 Subtodo
            </Typography>

            {/* ✅ Loop through subTodos state and render each sub-todo */}
            {subTodos.map((subTodo) => (
              <Box key={subTodo.id} display="flex" gap={2} mt={2}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Enter Sub Todo"
                  onKeyDown={handleEnterEvent}
                  color="white"
                />
                <DatePicker
                  label="Select Due Date"
                  sx={{
                    width: "100%",

                    borderRadius: 2,
                    backdropFilter: "blur(5px)",
                  }}
                  slotProps={{
                    textField: {
                      InputProps: {
                        sx: {
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "black", // Change border color when focused
                            color: "black",
                          },
                        },
                      },
                    },
                  }}
                />
                <IconButton
                  variant="contained"
                  color="error"
                  onClick={() => handleCancel(subTodo.id)}
                >
                  <CancelIcon />
                </IconButton>
              </Box>
            ))}

            {/* Subtodo Button */}
            <Box mt={2} textAlign="right">
              <Button variant="contained" onClick={handleMoreSubTodo}>
                ➕ More Sub Todo
              </Button>
            </Box>
          </Box>

          {/* Action Buttons */}
          <Box display="flex" justifyContent="center" gap={3} mt={3}>
            <Button
              variant="contained"
              sx={{
                width: 140,
                height: 50,
                fontSize: 16,
                fontWeight: "bold",
              }}
              color="success"
              startIcon={<AddIcon />}
            >
              Add
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{
                width: 140,
                height: 50,
                fontSize: 16,
                fontWeight: "bold",
              }}
              onClick={props.handleCancelTodo}
              startIcon={<CancelIcon />}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </LocalizationProvider>
    </Box>
  );
}

export default TodoCard;
