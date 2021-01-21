let response = {
    "displayedName": {
        "displayedName": {
            "value": [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            "description": "Полное наименование товара для клиента"
        }
    },
    "stock": {
        "stocks": {
            "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    }
};
let regionStores = response.stock.stocks["34"];

function showGoodsName() {
    console.log("Название товара: " + response.displayedName.displayedName.value.toString() + "\n");
}

function showNotEmptyStores() {
    console.log("Магазины 34-го региона, в которых есть остатки товара: ");

    for(let store in regionStores) {
        if(parseInt(regionStores[store]) > 0) {
            console.log(store);
        }
    }
    console.log("\n")
}

function showMaxGoodsAmount() {
    let goodsAmount = [];
    let maxAmount;

    for(let key in regionStores) {
        goodsAmount.push(regionStores[parseInt(key)]);
    }

    maxAmount = Math.max.apply(null, goodsAmount);

    for(let store in regionStores) {
        if(regionStores[store] == maxAmount.toString()) {
            console.log("Магазин №" + store + ", " + maxAmount + " единиц товара в наличии");
        }
    }
}

showGoodsName();
showNotEmptyStores();
showMaxGoodsAmount();
