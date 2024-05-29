for (let i =0; i < 10; i++) {
    if (i == 3) {break}
    console.log('break', i)
}
for (let i =0; i < 10; i++) {
    if (i == 3) {continue}
    console.log('continue', i)
}