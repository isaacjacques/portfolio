import React, { useState, useEffect } from "react";
import { GridPoint } from "./GridPoint.js";
import { Grid } from "./Grid.js";
import { Log } from "./Log.js";


const AstarDemo = () => {
    const rows = 50;
    const columns = 50;
	var log = undefined;
	var grid = undefined;
    var btn = undefined;

    useEffect(()=>{
        if(!log) {
            log = new Log(document.getElementById("demo-log"));
        }
        if(!grid) {
            grid = new Grid(document.getElementById("demo-grid"), columns, rows, log);
        }
        if(!btn) {
            btn = document.getElementById("demo-btn");
            document.getElementById("demo-btn").addEventListener("click", handleClick);
        }
        grid.redraw();
    },[]);

    const handleClick = () => {
        try {
            findPathAstarAsync();
        } catch (error) {
            console.error('Exception Occured:', error);
        }
    };


    const getDistance = (x1, x2, y1, y2) => {
        var a = x2 - x1;
        var b = y2 - y1;
        var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        return c;
    }   
    const  findPathAstarAsync = async (resolve, reject) => {
        var start = grid.cells[0][0];
        var end = grid.cells[columns-1][rows-1];
        var openSet = [];
        var closedSet = [];
        var path = [];
    
        openSet.push(start);
        start.show(grid, 'blue');
        end.show(grid, 'blue');

        while (true) {
            if (openSet.length > 0) {
                var shortestPath = 0;
                for (var i = 0; i < openSet.length; i++) {
                    if (openSet[i] < shortestPath) {
                        shortestPath = i;
                    }
                }
    
                var current = openSet[shortestPath];
                if (current === end) {
                    log.add('Done.');
                    path = [];
                    var temp = current;
                    while (temp.previous) {
                        path.push(temp.previous);
                        temp = temp.previous;
                        if (temp != start) {
                            temp.show(grid, 'yellow');
                        }
                    }
                    break;
                }
                else {
                    // Remove position from openSet
                    for (var i = openSet.length - 1; i >= 0; i--) {
                        if (openSet[i] == current) {
                            openSet.splice(i, 1);
                        }
                    }
                    closedSet.push(current);
                    if (current != start) {
                        current.show(grid, 'red');
                    }
    
                    for (var i = 0; i < current.neighbors.length; i++) {
                        var neighbor = current.neighbors[i];
    
                        if (!closedSet.includes(neighbor) && !neighbor.isObstacle) {
                            var tempG = current.g + 1;
    
                            if (openSet.includes(neighbor)) {
                                if (tempG < neighbor.g) {
                                    neighbor.g = tempG;
                                }
                            }
                            else {
                                neighbor.g = tempG;
                                openSet.push(neighbor);
                                if (neighbor != end) {
                                    neighbor.show(grid, 'green');
                                }
                            }
    
                            neighbor.h = getDistance(neighbor.column, end.column, neighbor.row, end.row);
                            neighbor.f = neighbor.g + neighbor.h;
                            neighbor.previous = current;
                        }
                    }
                }
            }
            else {
                log.add('No solution found.');
                break;
            }
            await new Promise(resolve => setTimeout(resolve, 4));
        } 
    };

    return (
        <div className="flex flex-col gap-4 mx-auto">
            <h1 className="font-bold text-5xl text-isabelline-100">A* Search Algorithm</h1>
            <section id="demo">
                <div className="flex flex-col gap-4">
                    <canvas id="demo-grid" className="rounded-md h-128 aspect-square bg-white"></canvas>
                    <textarea id="demo-log" className="rounded-md h-32 border border-solid border-spacecadet-200 text-sm" rows="10" cols="64"></textarea>
                    <button id="demo-btn" className="rounded-full h-8 bg-spacecadet-400 text-isabelline-100 text-center text-bold text-m 
                                        drop-shadow-md hover:drop-shadow-xl border border-solid border-spacecadet-200" type="button">Start</button>
                </div>
            </section>
            <section id="about">
                <div className="text-lg text-paledogwood-300">
                    <h2 className="text-4xl font-bold leading-snug text-isabelline-100">About</h2>
                    <p className="mb-8">
                        In this project I wrote a function that finds an efficient path between two points using the A* Search Algorithm.
                        One of the main advantages of the A* algorithm is its ability to find the optimal path efficiently. 
                        By using a heuristic function (h-cost) that estimates the remaining cost to the goal, A* can prioritize exploring paths that are more likely to lead to the goal, thus avoiding unnecessary exploration.
                    </p>
                    <p className="mb-8">
                        A potential drawback of the A* algorithm is that the quality of the solution heavily depends on the quality of the heuristic function. 
                        If the heuristic is not admissible (underestimates the actual cost) or inconsistent, the algorithm may not find the optimal path. 
                        Developing an appropriate heuristic for a specific problem can be challenging.
                    </p>
                    <p className="mb-8">
                        In order to demonstate the algorithm visually I created classes to handle the html elements.
                        The grid below is drawn on a canvas by one class.
                        Another class hadles the state machine
                    </p>
                </div>
            </section>
            <section id="sourcecode">
                <div className="text-lg text-paledogwood-300">
                    <h2 className="text-4xl font-bold leading-snug text-isabelline-100">SourceCode</h2>
                    <a href="https://github.com/isaacjacques/aStarSearchAlgorithm" target="_blank" rel="noreferrer" className="underline">
                        Github Repo
                    </a>
                </div>
            </section>
            <section id="references">
                <h2 className="text-4xl font-bold leading-snug text-isabelline-100">References</h2>
                <ul className="text-lg text-paledogwood-300">
                    <li>
                        <a href="https://www.geeksforgeeks.org/a-search-algorithm/" target="_blank" rel="noreferrer" className="underline">
                            GeeksForGeeks
                        </a>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/A*_search_algorithm" target="_blank" rel="noreferrer" className="underline">
                            Wikipedia
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    );
    /*
        <div className="flex flex-col gap-4">
            <canvas className="rounded-md h-128 bg-white"></canvas>
            <textarea className="rounded-md h-16 border border-solid border-spacecadet-200" rows="10" cols="64"></textarea>
            <button className="rounded-full h-8 bg-spacecadet-400 text-isabelline-100 text-center text-bold text-m 
                                drop-shadow-md hover:drop-shadow-xl border border-solid border-spacecadet-200" type="button">Start</button>
        </div>
    */
};
export default AstarDemo;

