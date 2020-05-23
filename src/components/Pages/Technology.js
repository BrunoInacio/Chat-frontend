import React from 'react';

import usePageStyles from './Pages.style';
import withPages from './Pages';

import techs from './Technology.list';

import {
  Box, Typography,
  Card, CardMedia, CardContent, CardActionArea,
} from '@material-ui/core';

function Technology(props) {
  const pageClasses = usePageStyles();
  React.useEffect(() => props.setTitle("Tecnologias"));

  return (
    <Box className={pageClasses.frame} padding={2}>
      {techs.map(tech => (
        <Card className={pageClasses.card} key={tech.name}>
          <CardActionArea>

            <CardMedia 
              className={pageClasses.media}
              image={tech.photo}
              title={tech.name}
            />

            <CardContent>
              <Typography gutterBottom variant="h6">{tech.name}</Typography>
            </CardContent>

          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default withPages(Technology);
