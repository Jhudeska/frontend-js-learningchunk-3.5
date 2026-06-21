const inventory = [
    {
        type: "43PUS6504/12",
        name: "4K TV",
        brand: "Philips",
        price: 379,
        availableSizes: [43, 50, 58, 65],
        refreshRate: 50,
        screenType: "LED",
        screenQuality: "Ultra HD/4K",
        smartTv: true,
        options:{
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            "ambi-light": false,
        },
        originalStock: 23,
        sold: 2,
    },
    {
        type: "NH3216SMART",
        name: "HD smart TV",
        brand: "Nikkei",
        price: 159,
        availableSizes: [32],
        refreshRate: 100,
        screenType: "LED",
        screenQuality: "HD ready",
        smartTv: true,
        options:{
            wifi: true,
            speech: false,
            hdr: false,
            bluetooth: false,
            "ambi-light": false,
        },
        originalStock: 4,
        sold: 4,
    },
    {
        type: "QE55Q60T",
        name: "4K QLED TV",
        brand: "Samsung",
        price: 709,
        availableSizes: [43, 50, 55, 58, 65],
        refreshRate: 60,
        screenType: "QLED",
        screenQuality: "Ultra HD/4K",
        smartTv: true,
        options:{
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            "ambi-light": false,
        },
        originalStock: 7,
        sold: 0,
    },
    {
        type: "43HAK6152",
        name: "Ultra HD SMART TV",
        brand: "Hitachi",
        price: 349,
        availableSizes: [43, 50, 55, 58],
        refreshRate: 60,
        screenType: "LCD",
        screenQuality: "Ultra HD/4K",
        smartTv: true,
        options:{
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            "ambi-light": false,
        },
        originalStock: 5,
        sold: 5,
    }

];

// array
console.log(inventory);

console.log(inventory[0].type);
console.log(inventory[2].availableSizes[4]);
console.log(inventory[1].options.bluetooth);
console.log(inventory[1].options["ambi-light"]);
