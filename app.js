let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

function city(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.total = 0;
  this.cookiesPerHour = [];

  // this function gives us random number * avg then pushing it to cookiesPerHour
  this.calculateCookiesPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
      let customerThisHour = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      let cookiesSoldThisHour = Math.ceil(customerThisHour * this.avg);
      this.cookiesPerHour.push(cookiesSoldThisHour);
    }
  };
  this.calculateCookiesPerHour();
}

let city1 = new city('Seattle', 23, 65, 6.3);

let city2 = new city('Tokyo', 3, 24, 1.2);

let city3 = new city('Dubai', 11, 38, 3.7);

let city4 = new city('Paris', 20, 38, 2.3);

let city5 = new city('Liam', 2, 16, 4.6);


let branches = [city1, city2, city3, city4, city5];
function addTable() {
  let hours2 = [' ','6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
  var myTableDiv = document.getElementById("myDynamicTable");
  var table = document.createElement('TABLE');
  table.border = '1';

  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);

  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
  
  for (var j = 0; j < hours2.length; j++) {
    var td = document.createElement('TD');
    td.width = '75';
    td.appendChild(document.createTextNode(hours2[j]));
    tr.appendChild(td);
  }
}


for (var i = 0; i < branches.length; i++) {
  var tr = document.createElement('TR');
  tableBody.appendChild(tr);

for (var j = 0; j < hours2.length; j++) {
  var td = document.createElement('TD');
  td.width = '75';
  if(j == 0 ){
    td.textContent = branches[i].name;
    tr.appendChild(td);
  }
  else{
    td.textContent = branches[i].cookiesPerHour[j-1];
    tr.appendChild(td);
  }
}
}
myTableDiv.appendChild(table);
}
addTable();

/////////////////////////////////////////////////////

let myForm = document.getElementById("myForm")
    myForm.addEventListener('submit', addShop)
    function addShop(event) {
        event.preventDefault();

        let shopName = event.target.Storename.value;
        let min = event.target.MinimumOrder.value;
        let max = event.target.MaxmumOrder.value;
        let avg = event.target.AvarageSales.value;
        
        let newShop = new city(shopName, min, max, avg);
        branches.push(newShop);
        document.getElementById ('myDynamicTable').innerHTML = 'Added a new location';
        addTable();        
    }

