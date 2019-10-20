import React from 'react';
import PropTypes from 'prop-types';

export const TASK_STATES = {
    TASK_ARCHIVED: 'TASK_ARCHIVED',
    TASK_PINNED: 'TASK_PINNED',
    TASK_INBOX: 'TASK_INBOX'
} ;

const Task = ({task: {id, title, state}, onArchiveTask, onPinTask}) => {
    return (
        <div className={`list-item ${state}`}>
            <label className="checkbox">
                <input
                type="checkbox"
                defaultChecked={state === TASK_STATES.TASK_ARCHIVED}
                disabled={true}
                name="checked"/>
                <span className="checkbox-custom" onClick={() => onArchiveTask(id)}></span>
            </label>
            <div className="title">
                <input type="text" value={title} readOnly={true} placeholder="Input title"/>
            </div>

            <div className="actions" onClick={event => event.stopPropagation()}>
                {state !== TASK_STATES.TASK_ARCHIVED && (
                    <a onClick={() => onPinTask(id)}>
                        <span className={`icon-star`}/>
                    </a>
                )}
            </div>
        </div>
    )
};

Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired
    }),
    onArchiveTask: PropTypes.func,
    onPinTask: PropTypes.func
};

export default Task;
