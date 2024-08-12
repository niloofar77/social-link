import React, { useState } from "react";
import { useSocialMedia } from "../context/SocialMediaProvider";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  TextField,
  Button,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

import { Delete, Edit } from "@mui/icons-material";

export const TableUser = () => {
  const { links, deleteLink, editLink } = useSocialMedia();
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState("");
  const [editUrl, setEditUrl] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [open, setOpen] = useState(false);

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditName(links[index].name);
    setEditUrl(links[index].url);
    setEditCategory(links[index].category);
    setOpen(true);
  };

  const handleSave = () => {
    editLink(editIndex, {
      name: editName,
      url: editUrl,
      category: editCategory,
    });
    setEditIndex(null);
    setEditName("");
    setEditUrl("");
    setEditCategory("");
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <TableContainer component={Paper} sx={{ margin: "auto", maxWidth: 900 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>عملیات</TableCell>
              <TableCell>لینک</TableCell>
              <TableCell>نوع</TableCell>
              <TableCell>ای دی</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {links.map((link, index) => (
              <TableRow key={index}>
                <TableCell>
                  <IconButton onClick={() => handleEdit(index)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => deleteLink(index)}>
                    <Delete />
                  </IconButton>
                </TableCell>
                <TableCell>{link.name}</TableCell>
                <TableCell>{link.url}</TableCell>
                <TableCell>{link.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ textAlign: "right" }}>ویرایش </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ textAlign: "right" }}>
            لطفاً اطلاعات زیر را برای ویرایش وارد کنید.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="ای دی"
            type="text"
            fullWidth
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="لینک"
            type="text"
            fullWidth
            value={editUrl}
            onChange={(e) => setEditUrl(e.target.value)}
          />
          <FormControl sx={{ width: 1 }} margin="normal">
            <InputLabel>نوع</InputLabel>
            <Select
              value={editCategory}
              onChange={(e) => setEditCategory(e.target.value)}
            >
              <MenuItem value="لینکدین">لینکدین</MenuItem>
              <MenuItem value="اینستاگرام">اینستاگرام</MenuItem>
              <MenuItem value="توییتر">توییتر</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="warning" variant="outlined">
            انصراف
          </Button>
          <Button onClick={handleSave} color="warning" variant="contained">
            ذخیره
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TableUser;
