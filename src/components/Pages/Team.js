import React from 'react';
import usePageStyles from './Pages.style';
import authors from './Team.list';

import {
  Paper, Grid, Typography,
  Card, CardMedia, CardContent, CardActionArea,
} from '@material-ui/core';

export default function Team() {
  const pageClasses = usePageStyles();

  return (
    <Paper elevation={2} className={pageClasses.content}>

        {authors.map((item, key) => (
          <Grid container spacing={3} className={pageClasses.grid} key={key}>

            <Grid item xs={12}>
              <Typography variant="h2" className={pageClasses.title} gutterBottom>
                {item.title}
              </Typography>
            </Grid>

            {item.members.map((member, _) => (
              <Grid item lg={4} sm={6} className={pageClasses.desc} key={member.name}>

                <Card className={pageClasses.card}>
                  <CardActionArea>
                    <CardMedia className={pageClasses.media} image={member.photo} title={member.name} />
                    <CardContent>
                      <Typography gutterBottom variant="h6">
                        {member.name}
                      </Typography>
                      <Typography variant="overline" color="textSecondary" component="p">
                        {member.NUSP}
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
