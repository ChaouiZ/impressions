let impressionsArr = [400 ,800 ,1200,200 ,400 ,50  ,150 ,100 ,400 ,800 ,200 ,400 ,200 ,50  ,200 ,200 ,200 ,75  ,200 ,800 ,300 ,200 ,50  ,150 ,25  ,50  ,100 ,200 ,100 ,200 ,200 ,50  ,50  ,50  ,25  ,100 ,200 ,25  ,800 ,300 ,25  ,200 ,200 ,100 ,400 ,200 ,1800,50  ,100 ,50  ,400 ,160 ,160 ,200 ,200 ,400 ,200 ,200 ,400 ,400 ,400 ,600 ,267 ,100 ,200 ,400 ,400 ,400 ,300 ,100 ,400 ,600 ,100 ,200];

let colorsArr = [2, 4, 3, 4, 2, 1, 3, 2, 4, 4, 4, 2, 2, 1, 1, 2, 1, 1, 1, 4, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 3, 1, 1, 1, 1, 2, 2, 3, 1, 2, 1, 4, 4, 4, 1, 1, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 4, 2, 2, 4, 1, 4, 2];

let sidesArr = [2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 1, 1, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];

let numberOfOrderProducts = impressionsArr.length;

function sum(arr) {
    let total = 0;
    let average;
    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    average = total / arr.length;
    console.log(`\nNumber of order products: ${arr.length}`);
    console.log(`Average impressions per order: ${average}`);
    console.log(`Total impressions due: ${total}\n`);     
}

function colorsAccounting(arr) {
    let oneC = 0;
    let twoC = 0;
    let threeC = 0;
    let fourC = 0;
    let totalColors = 0;
    let avg = 0;
    for (let i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case 1:
                oneC++;
                break;
            case 2:
                twoC++;
                break;
            case 3:
                threeC++;
                break;
            case 4:
                fourC++;    
        }
        totalColors += arr[i];
    }
    avg = totalColors / arr.length;

    console.log(`1 Color: ${oneC} - ${Math.round((oneC/numberOfOrderProducts) * 100)}%\n2 Colors: ${twoC} - ${Math.round((twoC/numberOfOrderProducts)*100)}%\n3 Colors: ${threeC} - ${Math.round((threeC/numberOfOrderProducts)*100)}%\n4 Colors: ${fourC} - ${Math.round((fourC/numberOfOrderProducts)*100)}%\nAverage number of colors per order product: ${avg}\n`);
}

function sidesAccounting(arr) {
    let oneSide = 0;
    let twoSide = 0;
    let totalSides = 0;
    for (let i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case 1:
                oneSide++;
                break;
            case 2:
                twoSide++;
        }
        totalSides += arr[i];
    }
    let avg = totalSides / arr.length;

    console.log(`1 Side: ${oneSide} - ${Math.round((oneSide/numberOfOrderProducts)*100)}%\n2 Sides: ${twoSide} - ${Math.round((twoSide/numberOfOrderProducts)*100)}%\nAverage number of sides per order: ${avg}\n`)
    
}

sum(impressionsArr);
colorsAccounting(colorsArr);
sidesAccounting(sidesArr);