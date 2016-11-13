
const trim = (str) => str.replace(/^\s*|\s*$/g,'');

const normalize = (str) => str.replace(/\-/g,'');

console.log(normalize(trim(' 1-2-3  ')))





const Status = Tuple(Boolean,String)

const isValid = function (str) {
    if (str.length == 0) {
        return new Status(false,'Invalid input,Expected non-empty value');
    } else {
        return new Status(true,'Success');
    }
}

console.log(isValid(normalize(trim(' 1-2-3 '))))


