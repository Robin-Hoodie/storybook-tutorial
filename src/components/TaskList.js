import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Task, { TASK_STATES } from './Task';
import { archiveTask, pinTask } from '../lib/redux';

export const TaskList = ({ loading, tasks, onPinTask, onArchiveTask }) => {

    const events = {
        onPinTask,
        onArchiveTask
    };

    const LoadingRow = (
        <div className="loading-item">
            <span className="glow-checkbox"/>
            <span className="glow-text">
                <span>Loading</span> <span>cool</span> <span>state</span>
            </span>
        </div>
    );

    if (loading) {
        return (
            <div className="list-items">
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
            </div>
        );
    }

    if (tasks.length === 0) {
        return (
            <div className="list-items">
                <div className="wrapper-message">
                    <span className="icon-check"/>
                    <div className="title-message">You have no tasks</div>
                    <div className="subtitle-message">Sit back and relax</div>
                </div>
            </div>
        )
    }

    const tasksInOrder = [
        ...tasks.filter(t => t.state === TASK_STATES.TASK_PINNED),
        ...tasks.filter(t => t.state !== TASK_STATES.TASK_PINNED)
    ];

    return (
        <div className="list-items">
            {tasksInOrder.map(task =>
                <Task key={task.id}
                      task={task} {...events}/>
            )}
        </div>
    )
};

TaskList.propTypes = {
    loading: PropTypes.bool,
    tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
    onPinTask: Task.propTypes.onPinTask,
    onArchiveTask: Task.propTypes.onArchiveTask
};

TaskList.defaultProps = {
    loading: false
};

const mapStateToProps = state => ({
    tasks: state.taskList.tasks.filter(task => task.state !== TASK_STATES.TASK_ARCHIVED)
});

const mapDispatchToProps = dispatch => ({
    onArchiveTask: id => dispatch(archiveTask(id)),
    onPinTask: id => dispatch(pinTask(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
