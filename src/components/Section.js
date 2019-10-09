import React from 'react';

class Section extends React.Component {

  constructor(props) {
    super(props);
    
  }

  render() {

    return (
      <p>{this.props.title}</p>
    );

  }

}

export default Section;