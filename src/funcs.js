function hammingDifferenceColoring(a, b) {
    if (b == null) b = a;

    let colornig = [];

    for (let i = 0; i < a.length; i++) {
        colornig.push(Number(b[i] !== a[i]));
    }
    return colornig;
}

export default hammingDifferenceColoring;