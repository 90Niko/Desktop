
function solve(input) {

    class Song {
        constructor(name, time) {
            this.name = name;
            this.time = time;
        }

        toString() {
            return console.log(`${this.name}`);
        }

    }
    const count = input.shift();
    const songs = {};

    for (let i = 0; i < count; i++) {

        const [typeList, name, time] = input.shift().split('_');

        if (!songs[typeList]) {
            songs[typeList] = [];
        }

        songs[typeList].push(new Song(name, time));
    }

    const typeList = input.shift();

    if (typeList === 'all') {
        Object.values(songs).flat().forEach((song) => song.toString());
        return;
    } else {
        songs[typeList].forEach((song) => song.toString());
    }
}

solve([
    '3',
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
]); // DownTown, Kiss, Smooth Criminal

solve([
    '4',
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'
]); // Andalouse

solve([
    '2',
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'
]); // Replay, Photoshop