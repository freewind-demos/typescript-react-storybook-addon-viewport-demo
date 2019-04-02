import React from 'react';
import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react';
import Hello from "../hello";

storiesOf('Select', module)
  .add('create a Select', () =>
    <Hello onClick={action('onClick')}/>
  );
