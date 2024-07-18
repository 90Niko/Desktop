function storeHeroes(commands) {

    commands.map((hero) => {
        const [name, level, items] = hero.split(' / ');
        return {
            name,
            level: Number(level),
            items,
        };
    })
        .sort((a, b) => a.level - b.level)
        .forEach((element) => {

            console.log(`Hero: ${element.name}`);
            console.log(`level => ${element.level}`);
            console.log(`items => ${element.items}`);

        });

}

storeHeroes(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);