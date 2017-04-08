import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const d3 = require('d3');

const propTypes = {
    x1: PropTypes.number,
    y1: PropTypes.number,
    x2: PropTypes.number,
    y2: PropTypes.number
};

const defaultProps = {

};

var enterLink = (selection) => {
  selection.attr("stroke-width", (d) => d.size);
};

var updateLink = (selection) => {
  selection.attr("x1", (d) => d.source.x)
    .attr("y1", (d) => d.source.y)
    .attr("x2", (d) => d.target.x)
    .attr("y2", (d) => d.target.y);
};

class Link extends React.Component{
    // componentDidMount() {
    //     this.d3Link = d3.select(ReactDOM.findDOMNode(this))
    //                     .datum(this.props.data)
    //                     .call(enterLink);
    // }

    // componentDidUpdate() {
    //     this.d3Link.datum(this.props.data)
    //     .call(updateLink);
    // }

    render(){
        return(
            <line className="link"
                strokeWidth={this.props.strokeWidth} 
                stroke={this.props.stroke}
                x1={this.props.x1}
                x2={this.props.x2}
                y1={this.props.y1}
                y2={this.props.y2}
            />  
        );
    }
}

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;