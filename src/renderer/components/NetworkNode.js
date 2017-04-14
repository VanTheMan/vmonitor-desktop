import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import electron from 'electron';
const ipcRenderer = electron.ipcRenderer;

const propTypes = {
    cx:PropTypes.number,
    cy:PropTypes.number,
    r:PropTypes.number,
    id:PropTypes.number,
    status: PropTypes.number,
};

const defaultProps = {
    status : 0
};

class NetworkNode extends React.Component{
    constructor(props){
        super(props);
        this.onDoubleClickHandle = this.onDoubleClickHandle.bind(this);
    }

    onDoubleClickHandle(){
        ipcRenderer.send('doubleClickNode', this.props.id);
    }

    render(){
        let fill="";
        switch(this.props.status){
            case 0:
                fill = "red";
                break;
            case 1: 
                fill = "yellow";
                break;
            case 2:
                fill = "green";
                break;
        }
        
        return(
            <circle className="node"
                fill={fill} 
                r={this.props.r}
                cx={this.props.cx}
                cy={this.props.cy}
                id={this.props.id}
                onDoubleClick={this.onDoubleClickHandle}
            />
        );
    }
}

NetworkNode.propTypes = propTypes;
NetworkNode.defaultProps = defaultProps;

export default NetworkNode;