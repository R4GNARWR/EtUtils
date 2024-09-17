// Функция возвращения правильного окончания слова для передаваемого числа, пример: 1 сотрудник, 2 сотрудника, 5 сотрудников
// В функция в качестве параметров принимает массив с окончаниями и само число
// 1. В качестве первым значением массива является слово для числа 1 и чисел заканчивающийся на 1
// 2. В качестве второго значения массива значения слова для чисел от 2 до 4 и чисел заканчивающихся на 2-4
// 3. В качестве третьего значения массива значения слова для чисел от 5 до 20 и чисел заканчивающихся на 5-9 и 0
declare type tDeclentionDictionary = [string, string, string]
export default {
    textDeclentions(dictionary: Array<tDeclentionDictionary>, number: number) {
        if(dictionary.length !== 3) {
            throw new Error('Declention dictionary must be an array with 3 elements')
        }
        if(number < 0) {
            throw new Error('Declention number must be a positive number')
        }
        if (number === 1) {
            return number + ' ' + dictionary[0]
        } else if (number > 1 && number < 5 && number < 10) {
            return number + ' ' + dictionary[1]
        } else if (number >= 5 && number < 20) {
            return number + ' ' + dictionary[2]
        } else if (number >= 20 && number < 100) {
            if (number % 10 > 1 && number % 10 < 5) {
                return number + ' ' + dictionary[1]
            }
            if (number % 10 >= 5 || number % 10 === 0) {
                return number + ' ' + dictionary[2]
            }
            if (number % 10 === 1) {
                return number + ' ' + dictionary[0]
            }
        } else if (number >= 100) {
            if (Math.trunc(number / 10) % 10 === 1) {
                return number + ' ' + dictionary[2]
            } else {
                if (number % 10 === 1) {
                    return number + ' ' + dictionary[0]
                }
                if (number % 10 > 1 && number % 10 < 5) {
                    return number + ' ' + dictionary[1]
                }
                if (number % 10 >= 5) {
                    return number + ' ' + dictionary[2]
                }
                if (number % 10 === 0) {
                    return number + ' ' + dictionary[2]
                }
            }
        }
    }
}