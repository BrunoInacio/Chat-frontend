import React from 'react';

import usePageStyles from './Pages.style';
import withPages from './Pages';

import FAQ from './Questions.list';

import {
  Box, Typography,
  ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails
} from '@material-ui/core';

import {
  ExpandMore as ExpandMoreIcon,
} from '@material-ui/icons';

function Questions(props) {
  const pageClasses = usePageStyles();

  React.useEffect(() => {
    props.setTitle("Dúvidas comuns");
  })

  return (
      <Box className={pageClasses.content}>
        {FAQ.map((item, _) => (
          <ExpansionPanel key={item.question}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle2">{item.question}</Typography>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
              <Typography variant="body1" color="textSecondary">
                {item.answer}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </Box>
  );
}

export default withPages(Questions);
