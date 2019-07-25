import React, {Component} from 'react';
import './css/demo.css';
// import '../favicon.ico';
import './css/style.css';
import './css/animate-custom.css';

class Login extends Component{
    register=(e)=>{
        e.preventDefault();
 var username = document.getElementById('usernamesignup').value;
 var email = document.getElementById('emailsignup').value;
 var password1 = document.getElementById('passwordsignup').value;
 var password2 = document.getElementById('passwordsignup_confirm').value;
 console.log( username + email);

    }
    render(){
        return(
<div className="container">
            <header>
                <h1>Login and Registration Form</h1>
            </header>
            <section>				
                <div id="container_demo" >
                    <a className="hiddenanchor" id="toregister"></a>
                    <a className="hiddenanchor" id="tologin"></a>
                    <div id="wrapper">
                        <div id="login" className="animate form">
                            <form  action="mysuperscript.php" autoComplete="on"> 
                                <h1>Log in</h1> 
                                <p> 
                                    <label htmlFor="username" className="uname" data-icon="u" > Your email or username </label>
                                    <input id="username" name="username" required="required" type="text" placeholder="myusername or mymail@mail.com"/>
                                </p>
                                <p> 
                                    <label htmlFor="password" className="youpasswd" data-icon="p"> Your password </label>
                                    <input id="password" name="password" required="required" type="password" placeholder="eg. X8df!90EO" /> 
                                </p>
                                <p className="keeplogin"> 
									<input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" /> 
									<label htmlFor="loginkeeping">Keep me logged in</label>
								</p>
                                <p className="login button"> 
                                    <input type="submit" value="Login" /> 
								</p>
                                <p className="change_link">
									Not a member yet ?
									<a href="#toregister" className="to_register">Join us</a>
								</p>
                            </form>
                        </div>

                        <div id="register" className="animate form">
                            <form  onSubmit={e=>this.register(e)} autoComplete="on"> 
                                <h1> Sign up </h1> 
                                <p> 
                                    <label htmlFor="usernamesignup" className="uname" data-icon="u">Your username</label>
                                    <input id="usernamesignup" name="usernamesignup" required="required" type="text" placeholder="mysuperusername690" />
                                </p>
                                <p> 
                                    <label htmlFor="emailsignup" className="youmail" data-icon="e" > Your email</label>
                                    <input id="emailsignup" name="emailsignup" required="required" type="email" placeholder="mysupermail@mail.com"/> 
                                </p>
                                <p> 
                                    <label htmlFor="passwordsignup" className="youpasswd" data-icon="p">Your password </label>
                                    <input id="passwordsignup" name="passwordsignup" required="required" type="password" placeholder="eg. X8df!90EO"/>
                                </p>
                                <p> 
                                    <label htmlFor="passwordsignup_confirm" className="youpasswd" data-icon="p">Please confirm your password </label>
                                    <input id="passwordsignup_confirm" name="passwordsignup_confirm" required="required" type="password" placeholder="eg. X8df!90EO"/>
                                </p>
                                <p className="signin button"> 
									<input type="submit" value="Sign up" /> 
								</p>
                                <p className="change_link">  
									Already a member ?
									<a href="#tologin" className="to_register"> Go and log in </a>
								</p>
                            </form>
                        </div>	
                    </div>
                </div>  
            </section>
        </div>
        );
    }
}
export default Login;
        