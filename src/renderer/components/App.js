import React from 'react';
import NetworkChart from './NetworkChart';
import electron from 'electron';
const ipcRenderer = electron.ipcRenderer;

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nodes: [],
            links: []
        };
    }

    componentDidMount(){
        ipcRenderer.send('request-data');
        // setInterval(()=>{
        //     ipcRenderer.send('request-data');
        // },5000);
        ipcRenderer.on('data', (event, arg)=>{
            console.log('GUI receive data');
            console.log(arg);
            this.setState({
                nodes: arg.nodes,
                links: arg.links
            });
        });
    }

    render(){
        return(
            <div className="App">
                <NetworkChart width={800} height={600} nodes={this.state.nodes} links={this.state.links} />
            </div>
        );
    }
}

export default App;