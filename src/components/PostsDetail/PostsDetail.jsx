import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import Comments from "../Comments/Comments";
import BasicModal from "../Modal/Modal";
import ModalForm from "../Modal/ModalForm";

const PostsDetail = () => {
  const { _id } = useParams();
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  const controller = useRef(new AbortController());
  const person = useSelector((store) => store.person);

  useEffect(() => {
    fetch(`https://api.react-learning.ru/posts/${_id}`, {
      signal: controller.current.signal,
      headers: {
        authorization: `Bearer ${person.token}`,
      },
    })
      .then((response) => response.json())
      .then((dataFromServer) => setPost(dataFromServer));

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      controller.current.abort();
    };
  }, [_id, person.token]);

  const content = () => {
    if (!post._id) {
      return <Typography>Loading...</Typography>;
    }

    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={post.image}
          alt="picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.text}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.tags}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium" onClick={() => navigate(-1)}>
            COME BACK
          </Button>

          <BasicModal>
            <ModalForm {...post} />
          </BasicModal>
        </CardActions>

        <Comments />
      </Card>
    );
  };

  return <div>{content()}</div>;
};
export default PostsDetail;
