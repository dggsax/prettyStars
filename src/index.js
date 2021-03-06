import React from 'react';
import Star from './Star';

export default class PrettyStars extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      actualStars: this.props.actualStars !== null ? this.props.actualStars : 5,
      possibleStars: this.props.possibleStars || 5,
      starWidth: this.props.size || '32px',
      starHeight: this.props.size || '32px',
    }
  }

  componentDidUpdate() {
    if (this.props.actualStars !== this.state.actualStars) {
      this.setState({
        actualStars: this.props.actualStars,
      })
    }
    this.render();
  }

  buildStarsArray() {
    var starArray = [];
    if (this.state.actualStars > this.state.possibleStars) {
      starArray = Array(this.state.possibleStars).fill(1);
    } else if (this.state.actualStars <= 0) {
      starArray = Array(this.state.possibleStars).fill(0);
    } else {
      var fullStars = (this.state.actualStars | 0);
      var decimalStar = Number((this.state.actualStars % 1).toFixed(2))
      var emptyStars = (this.state.possibleStars - this.state.actualStars) | 0;

      // Push any full stars
      starArray.push(...Array(fullStars).fill(1));
      // If a decimal star is needed, push it
      if (decimalStar !== 0) {
        starArray.push(decimalStar)
      }
      // Push any empty stars
      starArray.push(...Array(emptyStars).fill(0));
    }
    return starArray
  }

  render() {
    return (
      <div>
        {
          this.buildStarsArray().map((fillValue) => {
            return <Star
              key={Math.random()}
              fill={fillValue}
              height={this.state.starHeight}
              width={this.state.starWidth} />
          })
        }
      </div>
    )
  }
}
