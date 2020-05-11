import React from 'react';
import usePageStyles from './Pages.style';
import QeA from './Questions.list';

import {
  Paper, Typography,
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
              <Typography variant="subtitle1">{item.question}</Typography>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
              <Typography>
                {item.answer}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}

      </div>
  );
}
