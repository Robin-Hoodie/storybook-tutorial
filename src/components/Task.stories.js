import React from 'react';
import { storiesOf} from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';

import Task, { TASK_STATES } from './Task';

export const task = {
    id: '1',
    title: 'Test Task',
    state: TASK_STATES.TASK_INBOX,
    updatedAt: new Date(2018, 0, 1, 9, 0)
};

export const actions = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask')
};

const longTitle = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not`;

storiesOf('Task', module)
    .addDecorator(withKnobs)
    .add('Default', () => <Task task={object('task', task)} {...actions}/>)
    .add('Pinned', () => <Task task={object('task', {...task, state: TASK_STATES.TASK_PINNED})} {...actions}/>)
    .add('Archived', () => <Task task={object('task', {...task, state: TASK_STATES.TASK_ARCHIVED})} {...actions}/>)
    .add('Long Title', () => <Task task={object('task', {...task, title: longTitle})} {...actions}/>);
