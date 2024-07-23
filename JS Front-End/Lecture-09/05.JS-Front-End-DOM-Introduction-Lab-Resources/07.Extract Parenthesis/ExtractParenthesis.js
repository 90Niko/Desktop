function extract(content) {

    let text = document.getElementById(content);
    let pattern = /\(([^()]+)\)/g;

    const matches = text.textContent.matchAll(pattern);

    const result = Array.from(matches).map(x => x[1]).join('; ');
    console.log(result);
    return result;

}