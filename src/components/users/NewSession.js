import React from 'react';

class NewSession extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return(
      <div className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <h2 className="title is-2">Log In</h2>
              <form action="">
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-left">
                    <input className="input" type="text" placeholder="Email"/>
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Password</label>
                  <p className="control has-icons-left">
                    <input className="input" type="password" placeholder="Password"/>
                    <span className="icon is-small is-left">
                      <i className="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
                
                <div className="field">
                  <div className="control">
                    <input className="button is-success" type="submit" value="Log in"/>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewSession;