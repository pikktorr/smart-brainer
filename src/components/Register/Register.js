import React from "react";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      registerName: "",
      registerEmail: "",
      registerPassword: ""
    };
  }

  onNameRegister = event => {
    this.setState({ registerName: event.target.value });
  };

  onEmailRegister = event => {
    this.setState({ registerEmail: event.target.value });
  };

  onPasswordRegister = event => {
    this.setState({ registerPassword: event.target.value });
  };

  onSubmitRegister = () => {
    fetch("https://desolate-stream-93210.herokuapp.com/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.registerName,
        email: this.state.registerEmail,
        password: this.state.registerPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    return (
      <article
        className="mw6 center bg-white br3 pa3 pa4-ns mv3 ba-10 shadow-2"
        style={{ maxWidth: "25rem" }}
      >
        <main className="pa4 black-70">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f2 fw6 ph0 mh0 center">Smart-Brainer</legend>
              <div className="mt4">
                <label className="db fw6 lh-copy f6" htmlFor="name">
                  Name
                </label>
                <input
                  onChange={this.onNameRegister}
                  className="pa2 input-reset ba b--black-50 bg-transparent w-100"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  onChange={this.onEmailRegister}
                  className="pa2 input-reset ba b--black-50 bg-transparent w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  onChange={this.onPasswordRegister}
                  className="b pa2 input-reset ba b--black-50 bg-transparent w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </fieldset>
            <div className="center">
              <input
                onClick={this.onSubmitRegister}
                className="b black-70 ph3 pv2 input-reset ba b--black-50 bw1 bg-transparent dim pointer f5 dib br-pill"
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;
