// Euler Path Puzzle with jQuery

// How Euler Path Puzzle Work (note to visitors):
// In Graph Theory, an Euler Path is a path through a graph 
// that visits every edge exactly once.

// - You start at any node and can move along edges to other nodes.
// - The goal is to visit every edge exactly once.
// - Nodes can be visited multiple times, but edges cannot be reused.
// - If you try to use an edge you've already used, you fail and have to start over.


let edges = [ // variable to store all possible edges for this puzzle
   ["A","B"],
   ["A","C"],
   ["A","D"],
   ["B","E"],
   ["C","E"],
   ["D","E"],
   ["E","F"],
   ["E","G"],
   ["F","G"],
];

// note to self : edges are undirected (A-B is same as B-A)

// start message
const start = "Start the puzzle by clicking a node.";


// set initial state
let currentNode = null;
let visitedEdges = new Set(); 
let gameOver = false;

// new Set() function handles duplicates 
// if you try to add the same edge twice, it won't be added again


// applies this logic from before: edges are undirected (A-B is same as B-A)
function normalizeEdge(a, b) {
   return [a,b].sort().join("-");
}

// checks if edge exists in edges array, using the normalized edge format from above
function edgeExists(edge) {
    return edges.some(e => normalizeEdge(e[0], e[1]) === edge);
}


function move(toNode) {

  if (gameOver) return;

  // if this is the first move, set it to currentNode and return
  if (currentNode === null) {
    currentNode = toNode; // set starting node
    $(".node").removeClass("active");
    $(`.node[data-node='${toNode}']`).addClass("active"); // highlight starting node

    updateStatus("Started at " + toNode);
    return;
  }

  // normalize edge format (undirected)
  let edge = normalizeEdge(currentNode, toNode);

  // check if edge exists in the graph
  if (!edgeExists(edge)) {
    fail("Invalid move (no edge)");
    return;
  }

  // check if edge has already been visited
  if (visitedEdges.has(edge)) {
    fail("Edge already used");
    return;
  }

  // if valid move, mark edge as visited and update current node
  visitedEdges.add(edge);
  currentNode = toNode;

  $("#edge-" + edge).addClass("visited"); // visually mark edge as visited
  $(".node").removeClass("active"); // remove active class from all nodes
  $(`.node[data-node='${toNode}']`).addClass("active"); // update active node highlight

  updateStatus("Moved to " + toNode);

  // check win condition after each move
  checkWin();
}

// Win condition

// if all edges have been visited, show 'secret' lol and end game
function checkWin() {
  if (visitedEdges.size === edges.length) { 
    $("#secret").show();
    gameOver = true;
  }
}

// Fail condition

function fail(msg) {
  updateStatus("FAIL: " + msg);

    setTimeout(function () {
    resetGame();
  }, 1000);

}

// Reset game 

function resetGame() {
  visitedEdges.clear();
  currentNode = null;
  gameOver = false;
  $("#secret").hide();
  $(".edge").removeClass("visited");
  $(".node").removeClass("active");
  updateStatus(start);
}

// Update status text

function updateStatus(text) {
  $("#status").text(text);

} 

// jQuery to handle node clicks and reset button

$(document).ready(function () {

  // click node to move to the next chosen node
  $(".node").click(function () {
    let node = $(this).data("node");
    move(node);
  });

  // reset button 
  $("#resetBtn").click(function () {
    resetGame();
  });

});

