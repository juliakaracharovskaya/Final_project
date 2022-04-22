import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { deletePostQuery } from "../../redux/actions/postsAC";
import {
  setLikeQuery,
  deleteLikeQuery,
} from "../../redux/actions/likesPostsAC";
import { Link } from "react-router-dom";
import LinkMUI from "@mui/material/Link";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PostsItem({
  image,
  author,
  title,
  text,
  tags,
  likes,
  _id,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const description = text.length > 25 ? text.slice(0, 25) + "..." : text;

  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const person = useSelector((store) => store.person);

  const deleteHandler = () => {
    // eslint-disable-next-line no-restricted-globals
    let result = confirm("Вы точно хотите удалить пост?");
    if (result === true) {
      dispatch(deletePostQuery(_id, person.token));
    }
  };

  const likeHandler = () => {
    if (!likes.includes(person._id)) {
      dispatch(setLikeQuery(_id, person.token));
    } else {
      dispatch(deleteLikeQuery(_id, person.token));
    }
  };

  return (
    <Grid item container direction="column" xs={4}>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {author?.name.slice(0, 1)}
            </Avatar>
          }
          title={title}
          subheader="September 14, 2016"
        />
        <CardMedia component="img" height="194" image={image} alt={title} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>

        <Stack direction="row" spacing={2}>
          <Button
            sx={{ ml: 2 }}
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={deleteHandler}
          >
            Delete
          </Button>
          <Button sx={{ mr: 2 }} variant="outlined">
            <LinkMUI component={Link} to={`/${_id}`}>
              DetailPage
            </LinkMUI>
          </Button>
        </Stack>

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={likeHandler}>
            <FavoriteIcon />
            {likes.length}
          </IconButton>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{text}</Typography>
            <Typography paragraph>{tags}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}
