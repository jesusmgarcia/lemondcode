import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import * as viewModel from '../../../pods/ImageList/image-list.vm';
import { ShopContext } from '../ShopContextProvider';

interface Props {
  image: viewModel.Image;
}

const cardStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
  })
);

export const CardComponent: React.FunctionComponent<Props> = (props) => {
  const image = props.image;
  const cardClasses = cardStyles();

  const { imageList, setImageList } = React.useContext(ShopContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    image.selected = event.target.checked;

    if (image.selected) {
      setImageList([...imageList, image]);
    } else {
      setImageList(imageList.filter((element) => element.id != image.id));
    }
  };

  return (
    <Card className={cardClasses.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={image.title}
          height="240"
          image={image.imageUrl}
          title={image.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {image.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <FormControlLabel
          control={
            <Checkbox
              checked={image.selected}
              onChange={handleChange}
              name="Buy"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          }
          label="Add to Cart"
        />
      </CardActions>
    </Card>
  );
};
