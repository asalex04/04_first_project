import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profile_reducer";
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId)
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    )
  }
}

const AuthRedirectComponent = withAuthRedirect(ProfileContainer)
const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
