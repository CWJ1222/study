const MENU = {
  짜장: { price: 7000 },
  짬뽕: { price: 9900 },
  탕슉: { price: 25000, taxfree: 1 },
};

function bill() {
  let orders = [];
  return {
    order: function (item) {
      orders.push(MENU[item]);
    },
    printBill: function () {
      let total = 0;
      let tax = 0;
      orders.forEach((order) => {
        total += order.price;
        if (!order.taxfree) {
          tax += Math.round(order.price / 11);
        }
      });
      console.log(`Total: ${total}, Tax: ${tax}`);
    },
  };
}

const table1 = bill();
table1.order("짜장");
table1.order("짬뽕");
table1.printBill();

const table2 = bill();
table2.order("짜장");
table2.printBill();

table1.order("탕슉");
table1.printBill();
