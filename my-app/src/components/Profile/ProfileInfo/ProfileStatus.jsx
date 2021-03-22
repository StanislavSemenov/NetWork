import React from 'react';
import Preloader from '../../Preloader/Preloader';
import classes from './ProfileStatus.module.css';
class ProfileStatus extends React.Component {
    //if(!props.profile) { return <Preloader /> }

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {

        this.setState({
            editMode: true
        })
        this.state.editMode = true
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    render() {
        return (
            <div className={classes.text}>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>Status: {this.props.status || 'without status'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div className={classes.inputText}>
                        <input onChange={this.onStatusChange} className={classes.inputText} autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status} />
                    </div>

                }
            </div>
        )

    }
}
export default ProfileStatus;