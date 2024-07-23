function colorize() {
  
    const table= document.querySelector('table tbody');
    const rows = table.children;

    Array.from(rows).forEach((row, index) => {
        if (index % 2 !== 0) {
            row.style.backgroundColor = 'red';
        }
    });
}