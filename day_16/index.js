a = () => {
    return b()
}
b = () => {
    return c()
}
c = () => {
    return 1+2
}

a()