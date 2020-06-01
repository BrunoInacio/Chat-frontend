import React from 'react';

import usePageStyles from './Pages.style';
import withPages from './Pages';

import Detailed from './Team.detailed';
import TeamList from './Team.list';

import {
  Box, Paper, Typography, 
  Card, CardMedia, CardContent, CardActionArea,
} from '@material-ui/core';


function Team({ setTitle }) {
  const pageClasses = usePageStyles();
  React.useEffect(() => { setTitle("Equipe") }, [setTitle])

  const [detailed, setDetailed] = React.useState({ open: false });
  const handleClose = () => setDetailed({ open: false });
  const handleOpen = (member) => setDetailed({
    open: true,
    ...member,
  });

  return (
    <Paper elevation={2} className={pageClasses.content}>
      {TeamList.map(group => (
        <Box key={group.title}>
          <Typography variant="h4" color="primary">
            {group.title}
          </Typography>

          <Box className={pageClasses.frame} marginTop={2} marginBottom={2}>
            {group.members.map(member => (
              <Card className={pageClasses.card} key={member.name}>
                <CardActionArea onClick={() => handleOpen(member)} profile={member}>
                  <CardMedia 
                    className={pageClasses.media} 
                    image={member.photo} 
                    title={member.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6">
                      {member.name}
                    </Typography>
                    <Typography variant="overline" color="textSecondary">
                      {member.NUSP}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </Box>
      ))}

      {detailed.open ? (
        <Detailed detailed={detailed} handleClose={handleClose} />
      ) : null}
    </Paper>
  );
}

export default withPages(Team);
