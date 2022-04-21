import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Comments = () => {
  const person = useSelector((store) => store.person);
  const { _id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://api.react-learning.ru/posts/comments/${_id}`, {
      metod: "GET",
      headers: {
        authorization: `Bearer ${person.token}`,
      },
    })
      .then((response) => response.json())
      .then((dataFromServer) => setComments(dataFromServer));
  }, [_id, person.token]);

  return (
    <CardContent>
      <Typography paragraph>
        {comments.map((comment, index) => (
          <Typography paragraph key={index}>
            {comment.author.name}: {comment.text}
          </Typography>
        ))}
      </Typography>
    </CardContent>
  );
};
export default Comments;
