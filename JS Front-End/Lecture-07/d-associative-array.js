let phoneBook = { "Tim": "0834212554", "Peter": "0877547887", "Bill": "0896543112" };

let phoneBookEntries = Object.entries(phoneBook);

phoneBookEntries.sort((a, b) => a[0].localeCompare(b[0]));

for (const [name, number] of phoneBookEntries) {
    console.log(`${name} -> ${number}`);
}

//Object destructuring
