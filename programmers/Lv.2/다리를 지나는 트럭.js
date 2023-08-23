// stack -> queue
// console.log를 너무 많이 찍어도 테스트 시간초과가 된다

function solution(bridge_length, weight, truck_weights) {
  if (truck_weights.length === 0) return 0;
  let answer = 0;
  let onBridgeQueue = new Array(bridge_length).fill(0); // 다리 위 트럭 ex [0, 0]
  let wSum = 0; // 다리 위 무게 합

  while (truck_weights.length > 0 || wSum > 0) {
    answer++; // 1
    wSum = wSum - onBridgeQueue.shift();

    // 다리에 트럭이 올라간다.
    if (truck_weights.length > 0 && wSum + truck_weights[0] <= weight) {
      const newTruckWeight = truck_weights.shift();
      onBridgeQueue.push(newTruckWeight);
      wSum += newTruckWeight; // 7
      // console.log('올라간다', 'onBridgeQueue',onBridgeQueue,'wSum',wSum)
    } else {
      // 올라가지 못한다.
      onBridgeQueue.push(0); // 0으로 무게 배열 채우기
      // console.log('못 올라감', 'onBridgeQueue',onBridgeQueue,'wSum',wSum)
    }
  }
  return answer;
}

// ! 시간초과 - stack으로 하면 배열의 길이가 무수히 많아질 수 있어서
function solutionStack(bridge_length, weight, truck_weights) {
  let time = 0;
  let onBridgeStack = []; // 다리 위 트럭
  let startTimeStack = []; // 다리 위 트럭들이 올라간 시간을 저장
  let wSum = 0; // 다리 위 무게 합

  while (truck_weights.length > 0 || onBridgeStack.length > 0) {
    time++;

    console.log('truck_weights', truck_weights);
    // 1. 트럭 지나가게 하기
    if (onBridgeStack.length > 0 && time - startTimeStack[0] >= bridge_length) {
      onBridgeStack.shift();
      startTimeStack.shift();
      // onBridgeStack.push(truck_weights[0]) // 트럭을 다리에 올린다.
      // wSum = wSum + truck_weights[0];
      // truck_weights.shift() // 트럭 하나 뺀다.
    }
    // 1. 다리 위에 있는 트럭이 bridge_length 이하이고 && wSum이 weight 이하이면 올린다.
    // wSum = wSum - onBridgeStack[0];
    if (wSum + truck_weights[0] <= weight) {
      const newTruckWeight = truck_weights.shift();
      onBridgeStack.push(newTruckWeight);
      startTimeStack.push(time);
      wSum += newTruckWeight;
    }
  }
  return time;
}

// 다리의 길이만큼 초를 세는듯
/*
onBridgeStack({})
*/
