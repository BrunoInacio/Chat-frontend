import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, CardActionArea, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 0, 0, 2),
  },
  card: {
    width: 220,
    [theme.breakpoints.down('sm')]: {
      width: 150,
    },
  },
  grid: {
    margin: theme.spacing(0, 0, 0, 1),
  },
  media: {
    height: 220,
    [theme.breakpoints.down('sm')]: {
      height: 150,
    },
  },
}));

export default function Technology() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <Typography paragraph variant="h3">
        Autores
      </Typography>

      <Grid container justify="center" spacing={2} className={classes.grid}>
        <Grid item>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia className={classes.media}
                image="https://avatars1.githubusercontent.com/u/3254614"
                title="Bruno Brandão Inácio"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  Bruno Brandão Inácio
                </Typography>
                <Typography variant="overline" color="textSecondary" component="p">
                  9838122
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia className={classes.media}
                image="https://avatars3.githubusercontent.com/u/36277911"
                title="Pedro de Moraes Ligabue"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  Pedro de Moraes Ligabue
                </Typography>
                <Typography variant="overline" color="textSecondary" component="p">
                  9837434
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

      </Grid>

    </div>
  );
}