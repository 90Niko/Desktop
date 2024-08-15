function solve(input) {

    let text = input.shift();

    let command = input.shift();

    while (command != 'Buy') {
        const [cmd, arg1, arg2] = command.split('?');

        if (cmd === 'TakeEven') {
            text = text.split("").filter((_, x) => x % 2 == 0).join('');
            console.log(text);
        }
        else if (cmd === 'Reverse') {
            if (!text.includes(arg1)) {
                console.log("error");
            }
            else {
                text = text.replace(arg1, '');
                let string = arg1.split("").reverse().join("");
                text += string;
                console.log(text)
            }
        }
        else if (cmd === 'ChangeAll') {
            if (text.includes(arg1)) {
               while(text.includes(arg1)){
                text=text.replace(arg1,arg2);
               }
            }

            console.log(text);
        }

        command = input.shift();
    }
    console.log(`The cryptocurrency is: ${text}`)
}

solve(["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",
    "TakeEven",
    "Reverse?!nzahc",
    "ChangeAll?m?g",
    "Reverse?adshk",
    "ChangeAll?z?i",
    "Buy"]);
