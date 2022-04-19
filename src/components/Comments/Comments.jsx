import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Comments = () => {
  const person = useSelector((store) => store.person);
  const { _id } = useParams();
  const [comment, setComment] = useState({});

  useEffect(() => {
    fetch(`https://api.react-learning.ru/posts/comments/${_id}`, {
      headers: {
        authorization: `Bearer ${person.token}`,
      },
    })
      .then((response) => response.json())
      .then((dataFromServer) => setComment(dataFromServer));
  }, [_id, person.token]);
  // console.log(comment);
  return (
    <CardContent>
      <Typography paragraph>
        {comment.author}
        {comment.text}
      </Typography>
    </CardContent>
  );
};
export default Comments;
