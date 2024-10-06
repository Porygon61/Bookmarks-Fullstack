export function currentDate() {
    const date = new Date();
    
    let day = date.getDate();
    let month = date.getMonth() +1;
    let year = date.getFullYear();
    
    let currentDate = `${year}_${month}_${day}`;
    return currentDate;
    }