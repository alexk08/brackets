module.exports = function check(str, bracketsConfig) {
    //сделать функцию remakeBracketsConfig, которая берет bracketsConfig, делает из него два одномерных массива, в одном разные скобки differentBrackets, в другом одинаковые identicalBrackets, напр. ['()','{}'] и ['||','--'] или просто brArr
    //разбиваем строку str на массив строк из одного символа strArr
    //сделать функцию checkConfig, которая берет строку и массив, сравнивает строку с элементами массива, возвращает true, если с хоть одним элементом строка совпала, false в обратном
    //сделать функцию checkBrackets, которая берет strArr, проверяет длину массива - если нулевая, то возвращает true, если нет, то перебирает его элементы по порядку, конкетинирует текущий со следующим, и с каждой такой парой последовательных элементов запускает фукнцию checkConfig, если checkConfig возвращает true удаляем эту пару элементов из массива и возвращаем рекурсивно (делаем запуск функции в ретёрне) с новым массивом (без этих элементов) в аргументе. По умолчанию возвращает false.
    //запускаем функцию checkConfig в ретёрне check

    const bracketsConfigArr = bracketsConfig.map(item => (item[0] + item[1]));
    const strArr = str.split('');

    function checkConfig (string, arr) {
        let result = false;
        arr.forEach(element => {
            result = (element === string) ? true : result;
        });
        return result;
    }

    function checkBrackets (strArr) {
        if (strArr.length === 0) return true;
        for (let i = 0; i < strArr.length; i++) {
            const element = strArr[i]+strArr[i+1];
            if (checkConfig(element, bracketsConfigArr)) {
                strArr.splice(i,2);
                return checkBrackets(strArr);
            }
        }
        return false;
    }

    return checkBrackets(strArr);    
}
