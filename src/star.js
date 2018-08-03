import React from 'react';

let starStyle = {
	stroke: '#FFD700',
  stopColor: '#FFD700',
	strokeWidth: .4,
}

export default class Star extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
			fill: this.props.fill !== null ? this.props.fill : 1,
      width: this.props.width || '32px',
      height: this.props.height || '32px'
    }
  }
  getFill() {
    var fillValue = ""+ this.state.fill * 100 + "%";
    return fillValue;
  }

  render() {
    var fill;
    var uniqueGradientId = Math.random();

    if (this.state.fill === 1) {
      fill = "#FFD700";
    } else if (this.state.fill === 0) {
      fill = "none";
    } else {
      fill = `url(#variableGradient?${uniqueGradientId})`;
    }

    return (
      <svg style={starStyle} viewBox="0 0 32 32" width={this.state.width} height={this.state.height}>
        <linearGradient id={`variableGradient?${uniqueGradientId}`}>
          <stop stopOpacity="1" offset={this.getFill()} stopColor={starStyle.stopColor}></stop>
          <stop stopOpacity="0" offset={this.getFill()}></stop>
        </linearGradient>
        <g id="icon-star" fill={fill}>
          <path d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118 l11.547-1.2L16.026,0.6L20.388,10.918z"/>
        </g>
      </svg>
    )
  }
}
