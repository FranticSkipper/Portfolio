export const itemColorActive = event => {
    const el = event.target;
    const color = "#FFCC01";
    el.style.color = color;
}
export const itemColorUnactive = event => {
    const el = event.target;
    const color = "#888888";
    el.style.color = color;
}
export const makeSpacesInNumber = number => {
    const el = number.toString();
    const newStr = el.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
    return newStr
}
export const processingRequest = (productId) => {

}
export const paginate =(list, currentPage, pageSize) => {
    return list.slice( (currentPage - 1 ) * pageSize, currentPage * pageSize )
}
export const bodyLock = () => {
    document.body.style.overflowX = 'hidden';
}
export const bodyUnlock = () => {
    document.body.style.overflow = 'visible';
}