let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

function solution(array, commands){
  let answer = [];
  let cut = 0;
  let sortA = [];
  console.log("array : ",array);
  console.log("commands : ", commands)
  for(let i=0;i<commands.length;i++){
    answer[i] = 0;
    cut = array.slice(commands[i][0]-1,commands[i][1]);
    console.log("cut "+i , cut);
    sortA = cut.sort((a,b) => a - b);
    console.log("sort"+i+" : ",sortA)

    answer[i]=sortA[commands[i][2]-1];
  }
  console.log(answer);
}
solution(array,commands);

