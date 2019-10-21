import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, array } from '@storybook/addon-knobs';

import { TaskList } from './TaskList';
import { task, actions } from './Task.stories';
import { TASK_STATES } from './Task';

export const defaultTasks = [
    {...task, id: '1', title: 'Task 1'},
    {...task, id: '2', title: 'Task 2'},
    {...task, id: '3', title: 'Task 3'},
    {...task, id: '4', title: 'Task 4'},
    {...task, id: '5', title: 'Task 5'},
    {...task, id: '6', title: 'Task 6'}
];

export const withPinnedTasks = [
    ...defaultTasks.slice(0, 5),
    {id: '6', title: 'Task 6 (pinned)', state: TASK_STATES.TASK_PINNED}
];

storiesOf('TaskList', module)
    .addDecorator(story => <div style={{padding: '3rem'}}>{story()}</div>)
    .addDecorator(withKnobs)
    .add('Default', () => <TaskList tasks={array('Default Tasks', defaultTasks)} {...actions}/>)
    .add('With Pinned Tasks', () => <TaskList tasks={withPinnedTasks} {...actions}/>)
    .add('Loading', () => <TaskList loading tasks={[]} {...actions} /> )
    .add('Empty', () => <TaskList tasks={[]} {...actions} />);
