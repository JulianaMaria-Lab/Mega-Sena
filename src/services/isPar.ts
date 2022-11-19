function isPar(value: string):boolean{
    const numb = Number(value)
    // eslint-disable-next-line eqeqeq
    if(numb % 2 == 0){
        return true
    } else {
        return false
    }
}

export default isPar