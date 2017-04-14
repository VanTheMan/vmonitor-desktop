import React from 'react';

class NodeDetails extends React.Component {
    render(){
        return(
            <div>
                <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active">
                        <a href="#process" aria-controls="process" role="tab" data-toggle="tab">Processes</a>
                    </li>
                    <li role="presentation">
                        <a href="#cpu" aria-controls="cpu" role="tab" data-toggle="tab">CPU</a>
                    </li>
                    <li role="presentation">
                        <a href="#memory" aria-controls="memory" role="tab" data-toggle="tab">Memory</a>
                    </li>
                    <li role="presentation">
                        <a href="#disk" aria-controls="disk" role="tab" data-toggle="tab">Disk</a>
                    </li>
                    <li role="presentation">
                        <a href="#network" aria-controls="network" role="tab" data-toggle="tab">Network</a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="process">
                        Process
                    </div>
                    <div role="tabpanel" className="tab-pane" id="cpu">
                        CPU
                    </div>
                    <div role="tabpanel" className="tab-pane" id="memory">
                        Memory
                    </div>
                    <div role="tabpanel" className="tab-pane" id="disk">
                        Disk
                    </div>
                    <div role="tabpanel" className="tab-pane" id="network">
                        Network
                    </div>
                </div>
            </div>
        );
    }
}

export default NodeDetails;