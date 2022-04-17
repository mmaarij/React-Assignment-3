import React from "react";

class InputField extends React.Component {
  render() {
    return (
      <input className="form-control" type="text" placeholder={this.props.placeholder} />
    );
  }
}

export default InputField;
