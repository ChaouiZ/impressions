let objsArr = [];

const colorsObj = {
  fr: "Fire Red",
  b: "Black",
  xb: "Reflex Blue",
  g: "Green",
  rb: "Royal Blue",
  rr: "Rubine Red",
  rh: "Rhodamine Red",
  nb: "Navy Blue",
  pb: "Process Blue",
  ly: "Lemon Yellow",
  bo: "Bright Orange",
  p: "Purple",
  v: "Violet",
  hp: "Hot Pink",
  rg: "Reef Green",
  lg: "Light Green",
  pms: "Pantone Color",
};

let date = new Date();

const path = require("path");

const dirPath = path.dirname(__filename);
const dirName = path.basename(dirPath);
let dirMonth = dirName.slice(0, 3);

function getMonth(directoryMonthStr) {
  switch (directoryMonthStr) {
    case "jan":
      return "January";
      break;
    case "feb":
      return "February";
      break;
    case "mar":
      return "March";
      break;
    case "apr":
      return "April";
      break;
    case "may":
      return "May";
      break;
    case "jun":
      return "June";
      break;
    case "jul":
      return "July";
      break;
    case "aug":
      return "August";
      break;
    case "sep":
      return "September";
      break;
    case "oct":
      return "October";
      break;
    case "nov":
      return "November";
      break;
    case "dec":
      return "December";
  }
}

const fs = require("fs");
const logStream = fs.createWriteStream("catchup.txt", { flags: "a" });

const originalLog = console.log;

console.log = function (...args) {
  originalLog(...args); // still logs to console
  logStream.write(args.join(" ") + "\n"); // also writes to file
};

console.log(
  `\nRecord of active orders late or due on ${getMonth(
    dirMonth
  )} ${dirName.slice(4, 6)} 2025 as of: ${date}`
);

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
  console.log(`\nThere are ${count} boards due to print.\n`);
}

function analyzeOneColorObjs(arr) {
  const fr = {
    products: 0,
    impressions: 0,
    colorName: "Fire Red",
    orderNumbers: [],
    itemIds: [],
  };
  const b = {
    products: 0,
    impressions: 0,
    colorName: "Black",
    orderNumbers: [],
    itemIds: [],
  };
  const xb = {
    products: 0,
    impressions: 0,
    colorName: "Reflex Blue",
    orderNumbers: [],
    itemIds: [],
  };
  const g = {
    products: 0,
    impressions: 0,
    colorName: "Green",
    orderNumbers: [],
    itemIds: [],
  };
  const rb = {
    products: 0,
    impressions: 0,
    colorName: "Royal Blue",
    orderNumbers: [],
    itemIds: [],
  };
  const rr = {
    products: 0,
    impressions: 0,
    colorName: "Rubine Red",
    orderNumbers: [],
    itemIds: [],
  };
  const rh = {
    products: 0,
    impressions: 0,
    colorName: "Rhodamine Red",
    orderNumbers: [],
    itemIds: [],
  };
  const nb = {
    products: 0,
    impressions: 0,
    colorName: "Navy Blue",
    orderNumbers: [],
    itemIds: [],
  };
  const pb = {
    products: 0,
    impressions: 0,
    colorName: "Process Blue",
    orderNumbers: [],
    itemIds: [],
  };
  const ly = {
    products: 0,
    impressions: 0,
    colorName: "Lemon Yellow",
    orderNumbers: [],
    itemIds: [],
  };
  const bo = {
    products: 0,
    impressions: 0,
    colorName: "Bright Orange",
    orderNumbers: [],
    itemIds: [],
  };
  const p = {
    products: 0,
    impressions: 0,
    colorName: "Purple",
    orderNumbers: [],
    itemIds: [],
  };
  const v = {
    products: 0,
    impressions: 0,
    colorName: "Violet",
    orderNumbers: [],
    itemIds: [],
  };
  const hp = {
    products: 0,
    impressions: 0,
    colorName: "Hot Pink",
    orderNumbers: [],
    itemIds: [],
  };
  const rg = {
    products: 0,
    impressions: 0,
    colorName: "Reef Green",
    orderNumbers: [],
    itemIds: [],
  };
  const lg = {
    products: 0,
    impressions: 0,
    colorName: "Light Green",
    orderNumbers: [],
    itemIds: [],
  };
  const pms = {
    products: 0,
    impressions: 0,
    colorName: "Pantone",
    orderNumbers: [],
    itemIds: [],
  };
  const colObjectArr = [];
  for (i of arr) {
    switch (i.color1) {
      case "fr":
        fr.products++;
        fr.impressions += i.impressions;
        fr.orderNumbers.push(i.orderNumber);
        fr.itemIds.push(i.orderID);
        if (!colObjectArr.includes(fr)) {
          colObjectArr.push(fr);
        }
        break;
      case "b":
        b.products++;
        b.impressions += i.impressions;
        b.orderNumbers.push(i.orderNumber);
        b.itemIds.push(i.orderID);
        if (!colObjectArr.includes(b)) {
          colObjectArr.push(b);
        }
        break;
      case "xb":
        xb.products++;
        xb.impressions += i.impressions;
        xb.orderNumbers.push(i.orderNumber);
        xb.itemIds.push(i.orderID);
        if (!colObjectArr.includes(xb)) {
          colObjectArr.push(xb);
        }
        break;
      case "g":
        g.products++;
        g.impressions += i.impressions;
        g.orderNumbers.push(i.orderNumber);
        g.itemIds.push(i.orderID);
        if (!colObjectArr.includes(g)) {
          colObjectArr.push(g);
        }
        break;
      case "rb":
        rb.products++;
        rb.impressions += i.impressions;
        rb.orderNumbers.push(i.orderNumber);
        rb.itemIds.push(i.orderID);
        if (!colObjectArr.includes(rb)) {
          colObjectArr.push(rb);
        }
        break;
      case "rr":
        rr.products++;
        rr.impressions += i.impressions;
        rr.orderNumbers.push(i.orderNumber);
        rr.itemIds.push(i.orderID);
        if (!colObjectArr.includes(rr)) {
          colObjectArr.push(rr);
        }
        break;
      case "rh":
        rh.products++;
        rh.impressions += i.impressions;
        rh.orderNumbers.push(i.orderNumber);
        rh.itemIds.push(i.orderID);
        if (!colObjectArr.includes(rh)) {
          colObjectArr.push(rh);
        }
        break;
      case "nb":
        nb.products++;
        nb.impressions += i.impressions;
        nb.orderNumbers.push(i.orderNumber);
        nb.itemIds.push(i.orderID);
        if (!colObjectArr.includes(nb)) {
          colObjectArr.push(nb);
        }
        break;
      case "pb":
        pb.products++;
        pb.impressions += i.impressions;
        pb.orderNumbers.push(i.orderNumber);
        pb.itemIds.push(i.orderID);
        if (!colObjectArr.includes(pb)) {
          colObjectArr.push(pb);
        }
        break;
      case "ly":
        ly.products++;
        ly.impressions += i.impressions;
        ly.orderNumbers.push(i.orderNumber);
        ly.itemIds.push(i.orderID);
        if (!colObjectArr.includes(ly)) {
          colObjectArr.push(ly);
        }
        break;
      case "bo":
        bo.products++;
        bo.impressions += i.impressions;
        bo.orderNumbers.push(i.orderNumber);
        bo.itemIds.push(i.orderID);
        if (!colObjectArr.includes(bo)) {
          colObjectArr.push(bo);
        }
        break;
      case "p":
        p.products++;
        p.impressions += i.impressions;
        p.orderNumbers.push(i.orderNumber);
        p.itemIds.push(i.orderID);
        if (!colObjectArr.includes(p)) {
          colObjectArr.push(p);
        }
        break;
      case "v":
        v.products++;
        v.impressions += i.impressions;
        v.orderNumbers.push(i.orderNumber);
        v.itemIds.push(i.orderID);
        if (!colObjectArr.includes(v)) {
          colObjectArr.push(v);
        }
        break;
      case "hp":
        hp.products++;
        hp.impressions += i.impressions;
        hp.orderNumbers.push(i.orderNumber);
        hp.itemIds.push(i.orderID);
        if (!colObjectArr.includes(hp)) {
          colObjectArr.push(hp);
        }
        break;
      case "rg":
        rg.products++;
        rg.impressions += i.impressions;
        rg.orderNumbers.push(i.orderNumber);
        rg.itemIds.push(i.orderID);
        if (!colObjectArr.includes(rg)) {
          colObjectArr.push(rg);
        }
        break;
      case "lg":
        lg.products++;
        lg.impressions += i.impressions;
        lg.orderNumbers.push(i.orderNumber);
        lg.itemIds.push(i.orderID);
        if (!colObjectArr.includes(lg)) {
          colObjectArr.push(lg);
        }
        break;
      case "pms":
        pms.products++;
        pms.impressions += i.impressions;
        pms.orderNumbers.push(i.orderNumber);
        pms.itemIds.push(i.orderID);
        if (!colObjectArr.includes(pms)) {
          colObjectArr.push(pms);
        }
    }
  }

  for (obj of colObjectArr) {
    console.log(
      `\n${obj.colorName} - ${obj.products} products - ${obj.impressions} impressions`
    );
    for (let i = 0; i < obj.orderNumbers.length; i++) {
      console.log(`${obj.orderNumbers[i]} ${obj.itemIds[i]}`);
    }
  }
}

function matchingTwoColors(arr) {
  const comboCounts = {};
  const twoColorBreakdownArr = [];

  for (const product of arr) {
    let color1 = product.color1;
    let color2 = product.color2;
    const impressions = product.impressions;
    const perColorImpressions = impressions / 2;

    if (color1 === "pms" || color2 === "pms") continue;

    if (color1 in colorsObj) {
      color1 = colorsObj[color1];
    }

    if (color2 in colorsObj) {
      color2 = colorsObj[color2];
    }

    const combo = [color1, color2].sort().join(" and ");

    const newObj = structuredClone(product);

    newObj.combo = combo;
    newObj.impressionsPerColor = perColorImpressions;
    twoColorBreakdownArr.push(newObj);

    comboCounts[combo] = (comboCounts[combo] || 0) + 1;
  }
  for (const [combo, count] of Object.entries(comboCounts)) {
    console.log(`\n${combo}: ${count} products.`);
    let total = 0;
    for (let i = 0; i < twoColorBreakdownArr.length; i++) {
      if (twoColorBreakdownArr[i].combo === combo) {
        total += twoColorBreakdownArr[i].impressionsPerColor;
        console.log(
          `${twoColorBreakdownArr[i].orderNumber} ${twoColorBreakdownArr[i].orderID} - ${twoColorBreakdownArr[i].impressionsPerColor} Impressions per Color`
        );
      }
    }
    console.log(`${total} Total Impressions per Color\n`);
  }
  console.log(`\n`);
}

function oneColor(arr) {
  const oneColorArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].colors === 1) {
      oneColorArr.push(arr[i]);
    }
  }
  console.log(`One Color Impressions`);
  analyzeOneColorObjs(oneColorArr);
}

function twoColors(arr) {
  const twoColorArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].colors === 2) {
      twoColorArr.push(arr[i]);
    }
  }
  console.log(`\nTwo Color Impressions`);
  matchingTwoColors(twoColorArr);
}

sum(objsArr);
colorsAccounting(objsArr);
sidesAccounting(objsArr);
impressionsBreakdown(objsArr);
boardCount(objsArr);
oneColor(objsArr);
twoColors(objsArr);
