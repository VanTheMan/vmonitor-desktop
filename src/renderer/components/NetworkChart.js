import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import NetworkNode from './NetworkNode';
import Link from './Link';
const d3 = require('d3');
import electron from 'electron';
const ipcRenderer = electron.ipcRenderer;

const propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    nodes: PropTypes.array.isRequired,
    links: PropTypes.array.isRequired
};

const defaultProps = {
    width: 800,
    height: 600
};


const simulation = d3.forceSimulation();
simulation.force("link", d3.forceLink())
          .force("charge", d3.forceManyBody())
          .force("center", d3.forceCenter())
          .force("forceX", d3.forceX())
          .force("forceY", d3.forceY());                  

class NetworkChart extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setInterval(()=>{
            ipcRenderer.send('request-state');
        },5000);

        ipcRenderer.on('state', (event, arg)=>{
            console.log('GUI receive state');
            console.log(arg);
            this.props.nodes.map(function(node, index){
                node.status = arg[index].status;
            });
            this.forceUpdate();
        });
        simulation.on('tick', () => this.forceUpdate());

    }

    componentWillUnmount() {
        simulation.stop();
    }

    componentWillReceiveProps(nextProps){ 
        simulation.force("center")
                  .x(this.props.width/2) 
                  .y(this.props.height/2);
        simulation.nodes(nextProps.nodes);
        simulation.force("link", d3.forceLink().distance(50).links(nextProps.links));

        simulation.alpha(1).restart();
    }

    render(){
        return(
           <svg width={this.props.width} height={this.props.height}>
                {this.props.links.map((link, index) =>
                    <Link 
                        x1={link.source.x}
                        y1={link.source.y}
                        x2={link.target.x}
                        y2={link.target.y}
                        key={`line-${index}`}
                        stroke="black" 
                    />
                )}
                {this.props.nodes.map((node, index) =>
                    <NetworkNode 
                        r={node.r} 
                        cx={node.x} 
                        cy={node.y} 
                        key={index}
                        id={index}
                        status={node.status}
                    />
                )}
            </svg> 
        );
    }
}

NetworkChart.propTypes = propTypes;
NetworkChart.defaultProps = defaultProps;

export default NetworkChart;