function hammingDifference(a, b) {
    let different_indecies = [];
    for (let i = 0; i < a.length; i++) {
        different_indecies.append(a[i] !== b[i]);
    }
    return different_indecies;
}

export default hammingDifference;