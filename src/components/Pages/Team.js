import React from 'react';
import usePageStyles from './Pages.style';
import team from './Team.list';
import TeamDetailed from './Team.detailed';

import {
  Box, Paper, Typography,
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
    <Box overflow="auto">
      {team.map(group => (
        <Paper elevation={2} className={pageClasses.content + ' ' + pageClasses.grid} key={group.title}>
          <Typography variant="h4" className={pageClasses.title}>{group.title}</Typography>
          <Box display="flex" flexWrap="wrap">
            {group.members.map(member => (
              <Box m={1} key={member.name}>
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
              </Box>
              ))}
          </Box>    
        </Paper>
      ))}
      

      {detailed.open
        ? <TeamDetailed detailed={detailed} handleClose={handleClose}/>
        : null
      }
    </Box>
  );
}
