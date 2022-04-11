import React from 'react';

export class ContinentButton extends React.Component {
  render() {
    return (
      <span className={this.props.continentCode} data-testid="button">
        <a href={this.props.continentCode}>
          {this.props.continentCode} - {this.props.continent}{' '}
        </a>
      </span>
    );
  }
}

export default ContinentButton;
