class HashTable1 {
    store = new Array(10);
    hash(key) {
        let sum = 0;

        for (let i = 0; i < key.length; i++) {
            sum += key.charCodeAt(i)
        }
        return sum;
    }
    add(key, value) {
        this.store[this.hash(key)] = value;
    }
    get(key) {
        return this.store[this.hash(key)];
    }
}

const dict1 = new HashTable1();
dict1.add('abc','1');
dict1.add('cba','2');
console.log(dict1.get('abc'),dict1.get('cba')); // Коллизия

// Обход коллизии
class HashTable2 {
    store = new Array(10);
    hash(key) {
        let sum = 0;

        for (let i = 0; i < key.length; i++) {
            sum += key.charCodeAt(i)
        }
        return sum;
    }
    add(key, value) {
        this.store[this.hash(key)] = this.store[this.hash(key)] || [];
        this.store[this.hash(key)].push({key,value});
    }
    get(key) {
        return this.store[this.hash(key)].find( item => item.key === key).value;
    }
}

const dict2 = new HashTable2();
dict2.add('abc','1');
dict2.add('cba','2');
console.log(dict2.get('abc'),dict2.get('cba'));