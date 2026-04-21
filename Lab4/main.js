class Item {
  name;
  weight;
  rarity;

  constructor(name, weight, rarity) {
    this.name = name;
    this.weight = weight;
    this.rarity = rarity;
  }

  getInfo() {
    return `[${this.rarity}] ${this.name} (weight: ${this.weight} kg)`;
  }
  setWeight(newWeight) {
    this.weight = newWeight;
  }
}

class Weapon extends Item {
  constructor(name, weight, rarity, damage, durability) {
    super(name, weight, rarity);
    this.damage = damage;
    this.durability = durability;
  }

  use() {
    if (this.durability > 0) {
      this.durability = Math.max(0, this.durability - 10);
    }
  }
  repair() {
    this.durability = 100;
  }
  getInfo() {
    return `${super.getInfo()} | damage: ${this.damage}, durability: ${this.durability}`;
  }
}

// Тестирование:
const sword = new Item("Steel Sword", 3.5, "rare");
console.log(sword.getInfo());       // [rare] Steel Sword (weight: 3.5 kg)
sword.setWeight(4.0);
console.log(sword.getInfo());       // [rare] Steel Sword (weight: 4 kg)

const bow = new Weapon("Longbow", 2.0, "uncommon", 15, 100);
console.log(bow.getInfo());         // [uncommon] Longbow ... durability: 100
bow.use();
console.log(bow.durability);        // 90
bow.repair();
console.log(bow.durability);        // 100

const dagger = new Weapon("Iron Dagger", 0.8, "common", 8, 30);
dagger.use();
dagger.use();
dagger.use();
console.log(dagger.durability);     // 0 (не уходит ниже 0)



// Доп. задание: Перепишите классы Item и Weapon, используя функции-конструкторы вместо class.
function ItemFn(name, weight, rarity) {
  this.name = name;
  this.weight = weight;
  this.rarity = rarity;
}

ItemFn.prototype.getInfo = function () { // общий объект для всеъ экземпляров ItemFn
  return `[${this.rarity}] ${this.name} (weight: ${this.weight} kg)`;
};

ItemFn.prototype.setWeight = function (newWeight) {
  this.weight = newWeight;
};


function WeaponFn(name, weight, rarity, damage, durability) {
  ItemFn.call(this, name, weight, rarity);
  this.damage = damage;
  this.durability = durability;
}

// заменяем extends
WeaponFn.prototype = Object.create(ItemFn.prototype);
WeaponFn.prototype.constructor = WeaponFn;
WeaponFn.prototype.getInfo = function () {
  return `[${this.rarity}] ${this.name} (weight: ${this.weight} kg) | damage: ${this.damage}, durability: ${this.durability}`;
};
WeaponFn.prototype.use = function () {
  if (this.durability > 0) {
    this.durability = Math.max(0, this.durability - 10);
  }
};
WeaponFn.prototype.repair = function () {
  this.durability = 100;
};


// Опциональная цепочка
const items = [
  new ItemFn("Health Potion", 0.3, "common"),
  new WeaponFn("Battle Axe", 5.0, "legendary", 40, 80),
  null, // специально поставил null чтобы проверить
];
console.log(items[2]?.durability);   // undefined (не ошибка)

