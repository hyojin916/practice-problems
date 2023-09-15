class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    // 단방향을 만들고싶으면 한 방향만 push해주면 된다.
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

let g = new Graph();
g.addVertex('Dallas');
g.addVertex('Tokyo');
g.addVertex('Aspen');
g.addVertex('LA');
g.addVertex('Hong Kong');
g.addEdge('Dallas', 'Tokyo');
g.addEdge('Dallas', 'Aspen');
g.addEdge('Dallas', 'Hong Kong');
g.addEdge('LA', 'Hong Kong');
g.addEdge('Hong Kong', 'Tokyo');
