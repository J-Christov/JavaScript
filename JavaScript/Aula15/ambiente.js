let num = [5, 8, 2, 9, 3];
num.sort(); //>>> Se eu colocar esse comando depois dos novos valores que foram acrescentados eles ficarão em ordem crescente também.

num[5] = 6;
num.push(4); //>>> Como esses valores foram adicionados depois do comando num.sort() eles não entram na lista crescente.

console.log(`Nossa array/vetor é: ${num}`);
console.log(`Nossa array tem ${num.length} posições`);
console.log(`O primeiro valor da array é ${num[0]}`);

let pos = num.indexOf(8)
console.log(`O valor 8 está na posiçãp${pos}`)


