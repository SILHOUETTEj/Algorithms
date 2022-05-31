// Алгоритм Дейкстры

let graph = {} // Исходный граф

let costs = {} // Таблицы стоимости рёбер

let parents = {} // Таблица родителей для узлов

let processed = [] // Массив для отслеживания обработанных узлов

// Заполнение графа

graph['start'] = {};
graph['start']['a'] = 5
graph['start']['b'] = 2

graph['a'] = {}
graph['a']['c'] = 4
graph['a']['d'] = 2

graph['b'] = {}
graph['b']['a'] = 8
graph['b']['d'] = 7

graph['c'] = {}
graph['c']['d'] = 6
graph['c']['final'] = 3

graph['d'] = {}
graph['d']['final'] = 1


graph['final'] = {}

// Заполнение стоимостей рёбер

costs['a'] = 5;
costs['b'] = 2;
costs['c'] = Infinity;
costs['d'] = Infinity;
costs['final'] = Infinity;

// Заполнение родителей узлов

parents['a'] = 'start';
parents['b'] = 'start';
parents['c'] = null;
parents['d'] = null;
parents['final'] = null;

// Реализация алгоритма
// Функция нахождения наименьшего ребра необработанного узла
function findLowestNodeCost(costs, processed) {
    let lowestNodeCost = Infinity;
    let lowestNode = null;
    for(key in costs) {
        if(!processed.includes(key) && costs[key] < lowestNodeCost) {
            lowestNodeCost = costs[key];
            lowestNode = key;
        }
    }

    return lowestNode;
}

let node = findLowestNodeCost(costs, processed);

while(node) {
    cost = costs[node];
    neighbors = graph[node];

    for(n in neighbors) {
        let newCost = cost + neighbors[n]

        if(costs[n] > newCost) {
            costs[n] = newCost
            parents[n] = node
        }
    }
    processed.push(node)
    node = findLowestNodeCost(costs, processed);
}

console.log(costs)
console.log(parents)


