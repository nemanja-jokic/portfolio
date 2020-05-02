import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: "",
    };
  }
  render() {
    const style = this.props.modal ? "modal" : "";
    return (
         <div  class="container">
           <div class="header">
		<h2>Create Account</h2>
	</div>
        
<form id="form" class="form">


<div class="form-control">
  <label for="username">Username</label>
  <input type="text" placeholder="danijel" id="username" />
  <i class="fa fa-check-circle"></i>
  <i class="fa fa-exclamation-circle"></i>
  <small>Error message 1</small>
</div>

<div class="form-control">
  <label for="email">Email</label>
  <input type="email" placeholder="danijel@gmail.com" id="email"  />
  <i class="fa fa-check-circle"></i>
  <i class="fa fa-exclamation-circle"></i>
  <small>Error message</small>
</div>

<div class="form-control">
  <label for="password">Password</label>
  <input type="password" placeholder="Password" id="password" onfocus='sifra(this)' onfocusout='sifraOut(this)' onkeyup="snagaSifre(this)"/>
  <i class="fa fa-check-circle"></i>
  <i class="fa fa-exclamation-circle"></i>
  <div class="snaga-sifre">
    <div id="traka"></div>
  </div>
  <p id="text">Upozorenje! CAPS LOCK je ukljucen.</p>
  <small>Error message</small>
</div>

<div class="form-control">
  <label for="password2">Password check</label>
  <input type="text" placeholder="Password two" id="password2"/>
  <i class="fa fa-check-circle"></i>
  <i class="fa fa-exclamation-circle"></i>
  <small>Error message</small>
</div>

<input type="submit" value="Submit" onClick={this.props.submit} />
</form>
        
          </div>
    );
  }
}
export default LoginScreen;
