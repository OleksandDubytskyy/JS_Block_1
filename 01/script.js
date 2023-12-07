let numberCupsCoffeeDay = prompt('Скільки чашок кави ви випиваєте на день?');
let lengthMonth = 30; // кількість днів в місяці

let numberCupsCoffeeMonth = numberCupsCoffeeDay * lengthMonth; // кількість чашок кави за місяць
let priceCupCoffee = 10; // ціна за чашку кави

let priceCoffeeMonth = numberCupsCoffeeMonth * priceCupCoffee; // витрати на каву за місяць

alert(`Протягом місяця ви витратите ${priceCoffeeMonth} гривень на каву.`);