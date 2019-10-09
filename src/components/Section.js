import React from 'react';

class Section extends React.Component {

  constructor(props) {
    super(props);
    
  }

  render() {

    return (
      <div>
        <p>{this.props.title}</p>
        {this.props.children}
      </div>
    );

  }

}

export default Section;