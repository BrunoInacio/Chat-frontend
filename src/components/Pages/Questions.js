import React from 'react';
import { Link } from 'react-router-dom';

import withPages from './withPages';

import FAQ from './Questions.list';

import {
  Typography, Button,
  ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, ExpansionPanelActions
} from '@material-ui/core';

import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

function Questions({ setTitle }) {
  React.useEffect(() => { setTitle("Dúvidas comuns") }, [setTitle])

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
