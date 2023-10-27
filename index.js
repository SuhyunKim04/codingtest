function solution(num1, num2) {
    let answer = num1%num2
    return answer;
}
let result = solution(3,2); 
console.log(result);


// ******************************************************
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
    let sum = 0;
    for (let i=0; i<numbers.length; i++){
       sum = sum + numbers[i];
    };
    
    let result = sum / numbers.length;
    return result;
}

// 먼저 sum을 0으로 초기화 해주고 for문을 통해 i에 numbers 배열의 길이만큼 1을 더해준다.
// sum엔 numbers의 배열을 돌면서 값을 더해준다.
// 다 더한 값을 배열의 길이만큼 나눠준다.
// ******************************************************



// ******************************************************
// 머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.

function solution(n, k) {
    answer = n * 12000 + k * 2000 - parseInt(n/10) * 2000
    return answer;
}

// 일단 양꼬치의 총가격을 구한다.  (양꼬치 총 인분 곱하기 가격)

// 양꼬치 10인분마다 음료수를 하나를 공짜로 주기 때문에

// 양꼬치 총개수에서 10을 나누고, parseInt로 소수점은 버린 수를 음료수 가격과 곱해준다.

// 음료수의 총가격을 구하고

// 음료수 총 개수 곱하기 가격을 10으로 나눠서 가격을 곱해준 값 빼면 음료수 총가격이 나온다.

// 양꼬치 총 가격과 음료수 총가격을 더해준다
// ******************************************************



// ******************************************************
// push 메서드 : 배열의 마지막에 새로운 요소를 추가한 후, 변경된 배열의 길이를 반환

// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
    var answer = [];
    
    for (let i =0; i < numbers.length; i++){
        answer.push(numbers[i] * 2);
    }
    return answer;
}

// answer 배열을 초기화 해줍니다. 배열의 크기는 numbers.length 만큼 선언합니다.
// 반복문 for문을 사용하여 numbers.length 만큼 반복하는데 이때 i값을 하나씩 증가시킵니다.
// answer의 i위치의 값에 numbers의 i위치의 값을 두배하여 대입해줍니다.



// ******************************************************