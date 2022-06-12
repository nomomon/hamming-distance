function hammingDifferenceColoring(a, b, c) {
    if (a == null) a = b;
    if (c == null) c = b;

    let colornig = [];

    for (let i = 0; i < a.length; i++) {
        colornig.push((b[i] !== a[i]) * 1 + (b[i] !== c[i]) * 10);
    }
    return colornig;
}

export default hammingDifferenceColoring;