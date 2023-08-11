interface Fintrack {
    id: number,
    type: string,
    name: string,
    info: string,
    IDR: number
}

export let fintrack: Fintrack[] = [
    { 
        id: 1, 
        type: "Salary",
        name: "Salary from WB", 
        info: "July", 
        IDR: 2000000
    },
    { 
        id: 2, 
        type: "Salary",
        name: "Salary from PKJS", 
        info: "June", 
        IDR: 6000000
    },
    { 
        id: 3, 
        type: "Dividend",
        name: "Dividend from BMRI", 
        info: "April", 
        IDR: 200000000
    },
    { 
        id: 4, 
        type: "Education",
        name: "Pay to RevoU for FSSE",  
        info: "May", 
        IDR: 30000000
    },
    { 
        id: 5, 
        type: "Right Issue",
        name: "Pay to BBRI for Right Issue",  
        info: "August", 
        IDR: 2000000000
    },
];