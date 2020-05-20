import React from 'react';
import usePageStyles from './Pages.style';
import techs from './Technology.list';

import {
  Box, Typography,
  Card, CardMedia, CardContent, CardActionArea,
} from '@material-ui/core';

export default function Technology() {
  const pageClasses = usePageStyles();

  return (
    <Box display="flex" alignItems="center" flexWrap="wrap">
      {techs.map(tech => (
        <Box key={tech.name} margin={1}>
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
        </Box>
      ))}
    </Box>
  );
}
