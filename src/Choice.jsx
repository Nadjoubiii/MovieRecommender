import { useState } from 'react';
import React from 'react';
import Signup from './Signup.jsx';
import './Choice.css';
import { AnimationWrapper } from 'react-hover-animation';
import { Link } from 'react-router-dom';

class Choice extends React.Component {
  render() {
    return (
      <div className='holder'>
        <Widget field='Manual' animationType='left' onSelect={() => this.props.onOptionSelect('manual')} />
        <Widget field='Recommender' animationType='right' onSelect={() => this.props.onOptionSelect('recommender')} />
      </div>
    );
  }
}


class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  handleHover = () => {
    this.setState({ isHovered: true });
  };

  handleLeave = () => {
    this.setState({ isHovered: false });
  };

  handleClick = () => {
    this.props.onSelect();
  };

  render() {
    const { isHovered } = this.state;
    const { field, animationType } = this.props;
    const widgetClassName = `widget ${(isHovered && animationType === 'left') ? 'scale-up-br' : (isHovered && animationType === 'right') ? 'scale-up-bl' : ''}`;

    return (
      <div
        className={widgetClassName}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleLeave}
        onClick={this.handleClick}
      >
        <a href="#" className="widget-link">Select {field}</a>
        <img src="https://reactjs.org/logo-og.png" alt="React Image" />
      </div>
    );
  }
}


export default Choice;

