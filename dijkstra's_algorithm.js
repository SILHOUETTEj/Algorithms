// Алгоритм Дейкстры

let graph = {} // Исходный граф

let costs = {} // Таблицы стоимости рёбер

let parents = {} // Таблица родителей для узлов

let processed = [] // Массив для отслеживания обработанных узлов

// Заполнение графа

graph['start'] = {};
graph['start']['a'] = 6
graph['start']['b'] = 2
graph['a'] = {}
graph['a']['final'] = 1
graph['b'] = {}
graph['b']['a'] = 3
graph['b']['final'] = 5
graph['final'] = {}

// Заполнение стоимостей рёбер

costs['a'] = 6;
costs['b'] = 2;
costs['final'] = Infinity;

// Заполнение родителей узлов

parents['a'] = 'start';
parents['b'] = 'start';
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



