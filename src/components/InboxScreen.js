import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TaskList from './TaskList';

export const InboxScreen = ({error}) => {
    if (error) {
        return (
            <div className="page lists-show">
                <div className="wrapper-message">
                    <span className="icon-face-sad" />
                    <div className="title-message">Oh no!</div>
                    <div className="subtitle-message">Something went wrong</div>
                </div>
            </div>
        )
    }

    return (
        <div className="page lists-show">
            <nav>
                <h1 className="title-page">
                    <span className="title-wrapper">Taskbox</span>
                </h1>
            </nav>
            <TaskList />
        </div>
    );
};

InboxScreen.propTypes = {
    error: PropTypes.string
};

InboxScreen.defaultProps = {
    error: null
};

const mapStateToProps = state => state.tasks.error;

export default connect(mapStateToProps)(InboxScreen);
