function solve(input) {

    function takeEven(message) {
        const result = message.split("").filter((_, i) => i % 2 == 0).join("");
        return result;
    }

    const changeAll = (message, substring, replacement) => {

      return message;
    }

    const reverse =(message,substring)=>{
        return message;
    }

    let message = input.shift();
    let line = input.shift();

    while (line !== 'Buy') {

        const [command, substring, replacement] = line.split('?');

        switch (command) {

            case 'TakeEven':
                message=takeEven(message);
                console.log(message);
                break;

            
        }

       line=input.shift();
    }
}

solve(["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",
    "TakeEven",
    "Reverse?!nzahc",
    "ChangeAll?m?g",
    "Reverse?adshk",
    "ChangeAll?z?i",
    "Buy"])