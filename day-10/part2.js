import { sum, sortNumbers, fillArrayRange } from '../utils/array.js';

const MAX_DISTANCE = 3;

export const resolvePart2 = (adapters) => {
  const adaptersWithZero = sortNumbers([0, ...adapters]);
  return calculatePossiblePaths(adaptersWithZero);
};

export const calculatePossiblePaths = (graph, cache = []) => {
  if (isLastNode(graph)) {
    return 1;
  }

  const currentNode = graph[0];
  if (cache[currentNode]) {
    return cache[currentNode];
  }

  const possibleNodes = getNextNodes(currentNode, graph);
  const posibilities = sum(possibleNodes.map((candidateNode) => {
    const newGraph = graph.filter((node) => node >= candidateNode);
    return calculatePossiblePaths(newGraph, cache);
  }).flat());

  /* eslint-disable-next-line no-param-reassign */
  cache[currentNode] = posibilities;

  return posibilities;
};

const isLastNode = (graph) => graph.length === 1;

export const getNextNodes = (node, graph) => graph
  .filter((candidate) => generateAvailableRange(node).includes(candidate));

const generateAvailableRange = (node) => fillArrayRange(node + 1, node + MAX_DISTANCE);
