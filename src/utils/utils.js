export const getYear = (years) => {
    let currentYear = new Date().getFullYear();
    if(years) {
        return currentYear + years;
    }
    return currentYear
    
}