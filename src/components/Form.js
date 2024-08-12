import React, { useState } from "react";
import { useSocialMedia } from "../context/SocialMediaProvider";
import "./Form.css";
import {
  Button,
  TextField,
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
export const Form = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const { addLink } = useSocialMedia("");

  const [isFormOpen, setIsFormOpen] = useState(false);
  const toggleForm = (e) => {
    setIsFormOpen(!isFormOpen);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && url && category) {
      addLink({ name, url, category });
      setName("");
      setUrl("");
      setCategory("");
      setIsFormOpen(false);
    }
    console.log(name);
  };
  const exitForm = (e) => {
    e.preventDefault();
    //alert("کنسل شد");
    setIsFormOpen(false);
  };
  return (
    <div className="card">
      <div className="card-content">
        <h3>مسیر های ارتباطی</h3>
        <Button
          variant="text"
          color="warning"
          startIcon={<AddIcon />}
          onClick={toggleForm}
        >
          افزودن مسیر های ارتباطی
        </Button>
        {isFormOpen && (
          <form className="communication-form" onSubmit={handleSubmit}>
            <div className="title-section">
              <h4 className="title"> افزودن مسیر ارتباطی</h4>
            </div>
            <div dir="rtl">
              <Box sx={{ marginTop: 2 }}>
                <TextField
                  label="ای دی"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  sx={{ width: 1 / 4, m: 2 }}
                  margin="normal"
                />
                <TextField
                  label="لینک"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  sx={{ width: 1 / 4, m: 2 }}
                  margin="normal"
                />
                <FormControl sx={{ width: 1 / 4 }} margin="normal">
                  <InputLabel>نوع</InputLabel>
                  <Select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <MenuItem value="لینکدین">لینکدین</MenuItem>
                    <MenuItem value="اینستاگرام">اینستاگرام</MenuItem>
                    <MenuItem value="توییتر">توییتر</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  sx={{ m: 2 }}
                  type="submit"
                  variant="contained"
                  color="warning"
                >
                  افزودن مسیر ارتباطی
                </Button>
                <Button
                  sx={{ m: 2 }}
                  variant="outlined"
                  color="warning"
                  onClick={exitForm}
                >
                  انصراف
                </Button>
              </Box>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Form;
