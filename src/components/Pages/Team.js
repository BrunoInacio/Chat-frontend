import React from 'react';
import usePageStyles from './Pages.style';
import authors from './Team.list';
import TeamDetailed from './Team.detailed';

import {
  Paper, Grid, Typography,
  Card, CardMedia, CardContent, CardActionArea,
} from '@material-ui/core';

export default function Team() {
  const pageClasses = usePageStyles();

  const [detailed, setDetailed] = React.useState({
    open: false,
  });

  const handleOpen = (member) => {
    setDetailed({
      open: true,
      ...member,
    });
  };
  const handleClose = () => {
    setDetailed({
      open: false,
    });
  };

  return (
    <div>
      {authors.map((item, key) => (
        <Paper elevation={2} className={pageClasses.content + ' ' + pageClasses.grid} key={key}>
          <Grid container spacing={3} className={pageClasses.grid} key={key}>

            <Grid item xs={12} key={item.title}>
                <Typography variant="h3" className={pageClasses.title} gutterBottom>
                  {item.title}
                </Typography>
            </Grid>

            {item.members.map((member, _) => (
              <Grid item lg={4} sm={6} className={pageClasses.desc} key={member.name}>
                <Card className={pageClasses.card}>
                  <CardActionArea onClick={() => handleOpen(member)} profile={member}>
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
        </Paper>
      ))}

      {detailed.open ?
        <TeamDetailed detailed={detailed} handleClose={handleClose}/>
      : null}

    </div>
  );
}
