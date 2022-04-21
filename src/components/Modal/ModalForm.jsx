import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Paper, Stack } from "@mui/material";
// import { useParams } from "react-router-dom";

function ModalForm({ title, image, text, tags }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newImage, setNewImage] = useState(image);
  const [newText, setNewText] = useState(text);
  const [newTags, setNewTags] = useState(tags);

  const createSubmit = (e) => {
    const newTextTrim = newText.trim();
    const newTitleTrim = newTitle.trim();
    const newImageTrim = newImage.trim();
    const newTagsTrim = newTags.trim();
    if (newTextTrim && newTitleTrim && newImageTrim && newTagsTrim) {
      setNewTitle(newTitle);
      setNewImage(newImage);
      setNewText(newText);
      setNewTags(newTags);
    }
  };

  return (
    <Stack
      onSubmit={createSubmit}
      component="div"
      direction="column"
      alignItems="center"
    >
      <Paper elevation={3} sx={{ width: 400 }}>
        <Stack
          component="form"
          alignItems="center"
          spacing={2}
          noValidate
          sx={{ py: 5, px: 2 }}
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="filled-basic"
              label="Text"
              variant="outlined"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="Image"
              variant="outlined"
              value={newImage}
              onChange={(e) => setNewImage(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="Tags"
              variant="outlined"
              value={newTags}
              onChange={(e) => setNewTags(e.target.value)}
            />
          </div>

          <Button variant="outlined">Save Post</Button>
        </Stack>
      </Paper>
    </Stack>
  );
}

export default ModalForm;
