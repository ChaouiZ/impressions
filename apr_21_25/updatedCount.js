let objsArr = [
  { impressions: 100, colors: 1, sides: 2 },
  { impressions: 25, colors: 1, sides: 1 },
  { impressions: 100, colors: 1, sides: 2 },
  { impressions: 200, colors: 2, sides: 2 },
  { impressions: 100, colors: 2, sides: 2 },
  { impressions: 200, colors: 4, sides: 2 },
  { impressions: 200, colors: 1, sides: 2 },
  { impressions: 400, colors: 2, sides: 2 },
  { impressions: 400, colors: 2, sides: 2 },
  { impressions: 200, colors: 1, sides: 2 },
  { impressions: 100, colors: 1, sides: 2 },
  { impressions: 200, colors: 1, sides: 2 },
  { impressions: 200, colors: 1, sides: 2 },
  { impressions: 50, colors: 1, sides: 1 },
  { impressions: 25, colors: 1, sides: 1 },
  { impressions: 200, colors: 2, sides: 2 },
  { impressions: 50, colors: 1, sides: 2 },
  { impressions: 800, colors: 4, sides: 2 },
  { impressions: 200, colors: 2, sides: 2 },
  { impressions: 400, colors: 4, sides: 2 },
  { impressions: 100, colors: 1, sides: 2 },
  { impressions: 50, colors: 1, sides: 2 },
  { impressions: 100, colors: 1, sides: 2 },
  { impressions: 100, colors: 1, sides: 2 },
  { impressions: 500, colors: 1, sides: 2 },
  { impressions: 100, colors: 1, sides: 2 },
  { impressions: 200, colors: 1, sides: 2 },
  { impressions: 200, colors: 1, sides: 2 },
  { impressions: 100, colors: 1, sides: 2 },
  { impressions: 200, colors: 1, sides: 2 },
  { impressions: 200, colors: 2, sides: 2 },
  { impressions: 600, colors: 1, sides: 2 },
  { impressions: 100, colors: 1, sides: 1 },
  { impressions: 50, colors: 1, sides: 1 },
  { impressions: 200, colors: 4, sides: 2 },
  { impressions: 9000, colors: 3, sides: 2 },
  { impressions: 200, colors: 1, sides: 2 },
  { impressions: 100, colors: 1, sides: 1 },
  { impressions: 100, colors: 1, sides: 2 },
  { impressions: 50, colors: 1, sides: 2 },
  { impressions: 200, colors: 1, sides: 2 },
  { impressions: 100, colors: 1, sides: 2 },
  { impressions: 200, colors: 1, sides: 2 },
  { impressions: 100, colors: 1, sides: 2 },
  { impressions: 100, colors: 1, sides: 2 },
  { impressions: 200, colors: 1, sides: 2 },
  { impressions: 100, colors: 1, sides: 1 },
  { impressions: 200, colors: 2, sides: 2 },
  { impressions: 100, colors: 1, sides: 1 },
  { impressions: 100, colors: 2, sides: 1 },
  { impressions: 200, colors: 1, sides: 2 },
  { impressions: 100, colors: 1, sides: 2 },
  { impressions: 200, colors: 1, sides: 2 },
  { impressions: 100, colors: 1, sides: 2 },
  { impressions: 2000, colors: 1, sides: 2 },
  { impressions: 150, colors: 1, sides: 2 },
  { impressions: 50, colors: 1, sides: 2 },
  { impressions: 400, colors: 1, sides: 2 },
  { impressions: 800, colors: 1, sides: 2 },
  { impressions: 200, colors: 1, sides: 2 },
  { impressions: 100, colors: 1, sides: 2 },
  { impressions: 50, colors: 1, sides: 1 },
  { impressions: 200, colors: 2, sides: 2 },
  { impressions: 200, colors: 2, sides: 2 },
  { impressions: 200, colors: 2, sides: 2 },
  { impressions: 100, colors: 1, sides: 1 },
  { impressions: 50, colors: 1, sides: 2 },
  { impressions: 25, colors: 1, sides: 1 },
  { impressions: 25, colors: 1, sides: 1 },
  { impressions: 50, colors: 1, sides: 1 },
  { impressions: 200, colors: 1, sides: 2 },
  { impressions: 100, colors: 1, sides: 2 },
  { impressions: 200, colors: 1, sides: 2 },
  { impressions: 300, colors: 1, sides: 1 },
  { impressions: 200, colors: 1, sides: 2 },
  { impressions: 50, colors: 1, sides: 2 },
  { impressions: 100, colors: 1, sides: 2 },
  { impressions: 50, colors: 1, sides: 2 },
  { impressions: 100, colors: 1, sides: 2 },
  { impressions: 75, colors: 1, sides: 1 },
  { impressions: 200, colors: 1, sides: 2 },
  { impressions: 500, colors: 1, sides: 2 },
  { impressions: 200, colors: 4, sides: 2 },
  { impressions: 200, colors: 4, sides: 2 },
  { impressions: 200, colors: 2, sides: 2 },
  { impressions: 400, colors: 2, sides: 2 },
  { impressions: 200, colors: 4, sides: 2 },
  { impressions: 50, colors: 2, sides: 2 },
  { impressions: 600, colors: 2, sides: 2 },
  { impressions: 50, colors: 1, sides: 1 },
  { impressions: 50, colors: 1, sides: 2 },
  { impressions: 600, colors: 1, sides: 2 },
  { impressions: 200, colors: 1, sides: 2 },
  { impressions: 800, colors: 4, sides: 2 },
  { impressions: 400, colors: 2, sides: 2 },
  { impressions: 200, colors: 1, sides: 2 },
  { impressions: 200, colors: 2, sides: 2 },
  { impressions: 100, colors: 2, sides: 2 },
  { impressions: 50, colors: 1, sides: 1 },
  { impressions: 50, colors: 1, sides: 2 },
  { impressions: 25, colors: 1, sides: 2 },
  { impressions: 25, colors: 1, sides: 2 },
  { impressions: 200, colors: 1, sides: 2 },
  { impressions: 100, colors: 2, sides: 1 },
  { impressions: 100, colors: 1, sides: 2 },
  { impressions: 600, colors: 4, sides: 2 },
  { impressions: 200, colors: 1, sides: 2 },
  { impressions: 50, colors: 1, sides: 2 },
  { impressions: 400, colors: 2, sides: 2 },
  { impressions: 400, colors: 2, sides: 1 },
  { impressions: 200, colors: 1, sides: 2 },
  { impressions: 400, colors: 2, sides: 1 },
  { impressions: 200, colors: 2, sides: 1 },
  { impressions: 3200, colors: 4, sides: 2 },
  { impressions: 3200, colors: 4, sides: 2 },
  { impressions: 800, colors: 2, sides: 2 },
  { impressions: 100, colors: 2, sides: 2 },
  { impressions: 800, colors: 1, sides: 2 },
  { impressions: 50, colors: 1, sides: 2 },
  { impressions: 50, colors: 1, sides: 2 },
  { impressions: 100, colors: 1, sides: 2 },
  { impressions: 200, colors: 2, sides: 2 },
  { impressions: 200, colors: 1, sides: 2 },
  { impressions: 100, colors: 1, sides: 2 },
  { impressions: 100, colors: 1, sides: 2 },
  { impressions: 100, colors: 2, sides: 2 },
  { impressions: 50, colors: 1, sides: 2 },
  { impressions: 500, colors: 2, sides: 2 },
  { impressions: 100, colors: 1, sides: 1 },
  { impressions: 50, colors: 1, sides: 1 },
  { impressions: 400, colors: 2, sides: 2 },
  { impressions: 200, colors: 1, sides: 2 },
  { impressions: 200, colors: 1, sides: 2 },
  { impressions: 200, colors: 2, sides: 2 },
  { impressions: 200, colors: 1, sides: 2 },
  { impressions: 100, colors: 2, sides: 2 },
  { impressions: 50, colors: 2, sides: 1 },
];

let numberOfOrderProducts = objsArr.length;

function sum(arr) {
  let total = 0;
  let average;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i].impressions;
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
    switch (arr[i].colors) {
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
    totalColors += arr[i].colors;
  }
  avg = totalColors / arr.length;

  console.log(
    `1 Color: ${oneC} - ${Math.round(
      (oneC / numberOfOrderProducts) * 100
    )}%\n2 Colors: ${twoC} - ${Math.round(
      (twoC / numberOfOrderProducts) * 100
    )}%\n3 Colors: ${threeC} - ${Math.round(
      (threeC / numberOfOrderProducts) * 100
    )}%\n4 Colors: ${fourC} - ${Math.round(
      (fourC / numberOfOrderProducts) * 100
    )}%\nAverage number of colors per order product: ${avg}\n`
  );
}

function sidesAccounting(arr) {
  let oneSide = 0;
  let twoSide = 0;
  let totalSides = 0;
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i].sides) {
      case 1:
        oneSide++;
        break;
      case 2:
        twoSide++;
    }
    totalSides += arr[i].sides;
  }
  let avg = totalSides / arr.length;

  console.log(
    `1 Side: ${oneSide} - ${Math.round(
      (oneSide / numberOfOrderProducts) * 100
    )}%\n2 Sides: ${twoSide} - ${Math.round(
      (twoSide / numberOfOrderProducts) * 100
    )}%\nAverage number of sides per order: ${avg}\n`
  );
}

function impressionsBreakdown(arr) {
  let oneCImpressions = 0;
  let twoCImpressions = 0;
  let threeCImpressions = 0;
  let fourCImpressions = 0;
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].colors === 1) {
      oneCImpressions += arr[i].impressions;
    } else if (arr[i].colors === 2) {
      twoCImpressions += arr[i].impressions;
    } else if (arr[i].colors === 3) {
      threeCImpressions += arr[i].impressions;
    } else {
      fourCImpressions += arr[i].impressions;
    }
    total += arr[i].impressions;
  }
  console.log(
    `Number of 1-color impressions: ${oneCImpressions} - ${Math.round(
      (oneCImpressions / total) * 100
    )}%\nNumber of 2-color impressions: ${twoCImpressions} - ${Math.round(
      (twoCImpressions / total) * 100
    )}%\nNumber of 3-color impressions: ${threeCImpressions} - ${Math.round(
      (threeCImpressions / total) * 100
    )}%\nNumber of 4-color impressions: ${fourCImpressions} - ${Math.round(
      (fourCImpressions / total) * 100
    )}%\n`
  );
}

function boardCount(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i].impressions / (arr[i].colors * arr[i].sides);
  }
  console.log(`\nThere are ${count} boards being printed.\n`);
}

sum(objsArr);
colorsAccounting(objsArr);
sidesAccounting(objsArr);
impressionsBreakdown(objsArr);
boardCount(objsArr);
