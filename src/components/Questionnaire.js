import React from 'react';

import Section  from './Section';
import MapInput from './inputs/MapInput';

class Questionnaire extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: 'test@test.test',
      interview: {}
    };

  }

  componentDidMount() {
    setTimeout(function() {
      fetch(`http://localhost:3000/${this.state.email}`).then(function(response) {
        response.json().then(function(json) {
          const interview = json;
          this.setState({
            interview: interview
          });
        }.bind(this));
      }.bind(this));
    }.bind(this), 2000);
    
  }

  render() {

    return (
      <div>
        <Section title={this.state.interview.age !== undefined ? this.state.interview.age : '...'}/>
        <Section title={this.state.interview.name} />
        <Section title={this.state.interview.gender} />
        <Section title="Carte">
          <MapInput />
        </Section>
      </div>
    );

  }

}

export default Questionnaire;