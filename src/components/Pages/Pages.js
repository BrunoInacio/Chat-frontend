import React from 'react';
import usePageStyles from './Pages.style';

import {
  Container, 
} from '@material-ui/core';


export default (WrappedPage) => (props) => {
    const pageClasses = usePageStyles();

    return (
      <Container disableGutters className={pageClasses.container}>
        <WrappedPage {...props} />
      </Container>
    );
}
