function solution(my_string) {
    return my_string.match(/[0-9]/g).sort((a,b) => a-b).map((v) =>Number(v));
}