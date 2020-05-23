import React from 'react';
import { Link } from 'react-router-dom';

import usePageStyles from './Pages.style';
import withPages from './Pages';

import FAQ from './Questions.list';

import {
  Box, Typography, Button,
  ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, ExpansionPanelActions
} from '@material-ui/core';

import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

function Questions(props) {
  const pageClasses = usePageStyles();

  React.useEffect(() => {
    props.setTitle("Dúvidas comuns");
  })

  return FAQ.map((item, _) => (
    <ExpansionPanel key={item.question}>

      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="subtitle2">{item.question}</Typography>
      </ExpansionPanelSummary>

      <ExpansionPanelDetails>
        <Typography color="textSecondary">{item.answer}</Typography>
      </ExpansionPanelDetails>

      {item.actions ? (
        <ExpansionPanelActions>
          {item.actions.map((act, _) => (
            <Button key={act.text} size="small" color="primary" component={Link} to={act.to}>
              {act.text}
            </Button>
          ))}
        </ExpansionPanelActions>
        ) : null
      }

    </ExpansionPanel>
  ))
}

export default withPages(Questions);
