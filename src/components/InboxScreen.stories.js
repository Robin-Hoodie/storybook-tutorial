import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';

import { InboxScreen } from './InboxScreen';
import { defaultTasks } from './TaskList.stories';
import { Provider } from 'react-redux';

const store = {
    getState: () => {
        return {
            taskList: {
                tasks: defaultTasks
            }
        }
    },
    subscribe: () => {
    },
    dispatch: action('dispatch')
};

storiesOf('InboxScreen', module)
    .addDecorator(withKnobs)
    .add('default', () => <Provider store={store}><InboxScreen/></Provider>)
    .add('error', () => <Provider store={store}><InboxScreen error={text('Error', "something")}/></Provider>);
