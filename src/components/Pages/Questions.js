import React from 'react';
import usePageStyles from './Pages.style';
import QeA from './Questions.list';

import {
  Typography,
  ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails
} from '@material-ui/core';

import {
  ExpandMore as ExpandMoreIcon,
} from '@material-ui/icons';

export default function Questions() {
  const pageClasses = usePageStyles();

  return (
      <div className={pageClasses.desc}>

        {QeA.map((item, _) => (
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle2">{item.question}</Typography>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
              <Typography variant="body1" color="TextSecondary">
                {item.answer}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}

      </div>
  );
}
