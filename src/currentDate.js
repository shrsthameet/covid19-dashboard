let date = new Date();
let current = (date.getDate()).toString().padStart(2, "0");
let month = (date.getMonth() + 1).toString().padStart(2, "0");
let year = date.getFullYear();

export const currentDate = `${year}-${month}-${current}`;
export const currentTime = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });


