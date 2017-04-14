import React, { PropTypes } from 'react';

const propTypes = {
    x1: PropTypes.number,
    y1: PropTypes.number,
    x2: PropTypes.number,
    y2: PropTypes.number
};

const defaultProps = {

};

class Link extends React.Component{
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