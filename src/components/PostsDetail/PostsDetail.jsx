import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comments from "../Comments/Comments";
import BasicModal from "../Modal/Modal";
import ModalForm from "../Modal/ModalForm";
import { getPostQuery } from "../../redux/actions/postAC";

const PostsDetail = () => {
  const { _id } = useParams();

  const navigate = useNavigate();
  const controller = useRef(new AbortController());
  const controllerForApi = controller.current.signal;
  const person = useSelector((store) => store.person);
  const dispatch = useDispatch();
  const post = useSelector((store) => store.post);

  useEffect(() => {
    dispatch(getPostQuery(person.token, _id));
  }, [_id, dispatch, person.token, controllerForApi]);

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
