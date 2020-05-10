import React from 'react';
import usePageStyles from './Pages.style';
import Technologies from './Technology.list';

import {
  Paper, Grid, Typography,
  Card, CardMedia, CardContent, CardActionArea,
} from '@material-ui/core';

export default function Technology() {
  const pageClasses = usePageStyles();

  return (
    <Paper elevation={2} className={pageClasses.content}>

      {Technologies.map((item, key) => (
        <Grid container spacing={3} className={pageClasses.grid} key={key}>

          <Grid item xs={12}>
            <Typography variant="h2" className={pageClasses.title} gutterBottom>
              {item.title}
            </Typography>
          </Grid>

          {item.members.map((tech, _) => (
            <Grid item lg={4} sm={6} className={pageClasses.desc} key={tech.name}>

              <Card className={pageClasses.card}>
                <CardActionArea>
                  <CardMedia className={pageClasses.media} image={tech.photo} title={tech.name} />
                  <CardContent>
                    <Typography gutterBottom variant="h6">
                      {tech.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

            </Grid>
          ))}

        </Grid>
      ))}

    </Paper>
  );
}
