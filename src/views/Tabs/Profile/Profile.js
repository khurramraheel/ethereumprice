
import React, { Component } from 'react'
import { connect } from 'react-redux'
export class Profile extends Component {
  // state = {
  //   username : this.props.auth.username || "",
  //   email : this.props.auth.email || "",
  //   password : this.props.password || "",
  // }
  
  render() {

    let user = this.props.auth || {};
    console.log(this.props.auth);
    let password = user.password
    console.log(password);
    return (

      <form style={{width: "30%" , margin : "auto"}}>
      
        <div class="form-group" >
          <label for="exampleInputUsername">User name</label>
          <input type="text" class="form-control" id="exampleInputUsername" placeholder={user.username} />

        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={user.email} />

        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Old Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder={user.password} />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">New Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>


        <button type="submit" class="btn btn-primary">Change</button>
      </form>





    )
  }
}
const mapStateToProps = state => ({
  auth: state.auth.user

});
export default connect(mapStateToProps)(Profile); 
