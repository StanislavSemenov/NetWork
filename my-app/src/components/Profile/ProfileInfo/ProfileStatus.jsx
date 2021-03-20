import React from 'react';
import Preloader from '../../Preloader/Preloader'

class ProfileStatus extends React.Component {
    //if(!props.profile) { return <Preloader /> }

    state = {
        editMode: false
    }
    activateEditMode = () => {
        debugger
        this.setState({
            editMode: true
        })
        this.state.editMode = true
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.state.editMode = true
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>Status: {this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deActivateEditMode} value={this.props.status} />
                    </div>

                }
            </div>
        )

    }
}
export default ProfileStatus;