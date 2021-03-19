import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile'
import { getUserProfile } from './../../Redux/profileReducer';
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.UserId
        if (!userId) { userId = 2 }
        this.props.getUserProfile(userId)

    }
    render() {
        return (
            <div >
                <Profile {...this.props} profile={this.props.profile} />

            </div >
        )
    }
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer)

let mapStateToProps = (state) => ({ profile: state.profilePage.profile })
export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);