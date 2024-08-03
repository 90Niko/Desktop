function solve(input) {

    let spell = input.shift();
    let cmd = input.shift();

    while (cmd != 'End') {

        let [command, arg1, arg2] = cmd.split('!');

        if (command === 'RemoveEven') {

            spell = spell.split('').filter((char, index) => index % 2 === 0).join('');
            console.log(spell);
        }
        if (command === 'TakePart') {

            let numArg1 = Number(arg1);
               let numArg2 = Number(arg2);
               if(numArg1 > 0 || numArg2 > 0) {
               spell = spell.slice(numArg1, numArg2)
               }

               console.log(spell)

        }
        if (command === 'Reverse') {

            spell = spell.split('').join('');

            if (spell.includes(arg1)) {

                let reversedSub = arg1.split('').reverse().join('');
                spell = spell.replace(arg1, '');
                spell+=reversedSub;
                console.log(spell);
            }
            else {
                console.log('Error')
            }
        }
        cmd = input.shift();
    }
    console.log(`The concealed spell is: ${spell}`);
}

solve(["asAsl2adkda2mdaczsa",
    "RemoveEven",
    "TakePart!1!9",
    "Reverse!maz",
    "End"])
    ;