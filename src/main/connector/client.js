const client = module.exports = {
    generateData,
    generateState
}

// const nodes = [];

function generateData(){
    const nodeCount = 50;
    let nodes = [];
    for (let i = 0; i < nodeCount; i++) {
        nodes.push({
            r: (Math.random() * 5 ) + 2,
            x: 0,
            y: 0,
            id: i,
            status: (Math.floor(Math.random()*10) % 3)
        });
    }

    let links = [];
    for (let i = 0; i < nodeCount; i++) {
        let target = 0;
        do {
            target = Math.floor(Math.random() * nodeCount);
        } while(target == i)
            links.push({
                source: i,
                target
            });
    }

    return { nodes, links }
}

function generateState(){
    const nodeCount = 50;
    let nodes = [];
    for (let i = 0; i < nodeCount; i++) {
        nodes.push({
            id: i,
            status: (Math.floor(Math.random()*10) % 3)
        });
    }
    return nodes;
}