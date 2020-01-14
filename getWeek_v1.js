//source for the code below https://weeknumber.net/how-to/javascript
Date.prototype.getWeek = function() {
  var target = new Date(this.valueOf());
  var dayNr = (this.getDay() + 6) % 7;
  target.setDate(target.getDate() - dayNr + 3);
  var firstThursday = target.valueOf();
  target.setMonth(0, 1);
  if (target.getDay() != 4) {
    target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
  }
  return 1 + Math.ceil((firstThursday - target) / 604800000);
}

var d = new Date();
var currentWeek = d.getWeek();
var perviousWeek = currentWeek - 1;


var elWeeks = document.getElementById('htmlWeek');
elWeeks.textContent = currentWeek;

var elOwe = document.getElementById('htmlOwe');

var amountDue = function() {
  if (currentWeek == 1) {
    elOwe.textContent = ("You owe $20 this week");
  } else if (currentWeek == 2) {
    elOwe.textContent = ("You owe $35 this week");
  }
  else if (currentWeek == 3) {
    elOwe.textContent = ("You owe $45 this week");
  }
  else if (currentWeek == 4) {
    elOwe.textContent = ("You owe $125 this week");
  }
  else if (currentWeek == 5) {
    elOwe.textContent = ("You owe $25 this week");
  }
  else if (currentWeek == 6) {
    elOwe.textContent = ("You owe $50 this week");
  }
  else if (currentWeek == 7) {
    elOwe.textContent = ("You owe $75 this week");
  }
  else if (currentWeek == 8) {
    elOwe.textContent = ("You owe $130 this week");
  }
  else if (currentWeek == 9) {
    elOwe.textContent = ("You owe $30 this week");
  }
  else if (currentWeek == 10) {
    elOwe.textContent = ("You owe $55 this week");
  }
  else if (currentWeek == 11) {
    elOwe.textContent = ("You owe $80 this week");
  }
  else if (currentWeek == 12) {
    elOwe.textContent = ("You owe $135 this week");
  }
  else if (currentWeek == 13) {
    elOwe.textContent = ("You owe $35 this week");
  }
  else if (currentWeek == 14) {
    elOwe.textContent = ("You owe $60 this week");
  }
  else if (currentWeek == 15) {
    elOwe.textContent = ("You owe $85 this week");
  }
  else if (currentWeek == 16) {
    elOwe.textContent = ("You owe $140 this week");
  }
  else if (currentWeek == 17) {
    elOwe.textContent = ("You owe $40 this week");
  }
  else if (currentWeek == 18) {
    elOwe.textContent = ("You owe $65 this week");
  }
  else if (currentWeek == 19) {
    elOwe.textContent = ("You owe $90 this week");
  }
  else if (currentWeek == 20) {
    elOwe.textContent = ("You owe $150 this week");
  }
  else if (currentWeek == 21) {
    elOwe.textContent = ("You owe $45 this week");
  }
  else if (currentWeek == 22) {
    elOwe.textContent = ("You owe $70 this week");
  }
  else if (currentWeek == 23) {
    elOwe.textContent = ("You owe $95 this week");
  }
  else if (currentWeek == 24) {
    elOwe.textContent = ("You owe $155 this week");
  }
  else if (currentWeek == 25) {
    elOwe.textContent = ("You owe $50 this week");
  }
  else if (currentWeek == 26) {
    elOwe.textContent = ("You owe $75 this week");
  }
  else if (currentWeek == 27) {
    elOwe.textContent = ("You owe $100 this week");
  }
  else if (currentWeek == 28) {
    elOwe.textContent = ("You owe $165 this week");
  }
  else if (currentWeek == 29) {
    elOwe.textContent = ("You owe $55 this week");
  }
  else if (currentWeek == 30) {
    elOwe.textContent = ("You owe $80 this week");
  }
  else if (currentWeek == 31) {
    elOwe.textContent = ("You owe $105 this week");
  }
  else if (currentWeek == 32) {
    elOwe.textContent = ("You owe $170 this week");
  }
  else if (currentWeek == 33) {
    elOwe.textContent = ("You owe $60 this week");
  }
  else if (currentWeek == 34) {
    elOwe.textContent = ("You owe $85 this week");
  }
  else if (currentWeek == 35) {
    elOwe.textContent = ("You owe $110 this week");
  }
  else if (currentWeek == 36) {
    elOwe.textContent = ("You owe $175 this week");
  }
  else if (currentWeek == 37) {
    elOwe.textContent = ("You owe $65 this week");
  }
  else if (currentWeek == 38) {
    elOwe.textContent = ("You owe $90 this week");
  }
  else if (currentWeek == 39) {
    elOwe.textContent = ("You owe $115 this week");
  }
  else if (currentWeek == 40) {
    elOwe.textContent = ("You owe $180 this week");
  }
  else if (currentWeek == 41) {
    elOwe.textContent = ("You owe $70 this week");
  }
  else if (currentWeek == 42) {
    elOwe.textContent = ("You owe $95 this week");
  }
  else if (currentWeek == 43) {
    elOwe.textContent = ("You owe $120 this week");
  }
  else if (currentWeek == 44) {
    elOwe.textContent = ("You owe $190 this week");
  }
  else if (currentWeek == 45) {
    elOwe.textContent = ("You owe $75 this week");
  }
  else if (currentWeek == 46) {
    elOwe.textContent = ("You owe $100 this week");
  }
  else if (currentWeek == 47) {
    elOwe.textContent = ("You owe $125 this week");
  }
  else if (currentWeek == 48) {
    elOwe.textContent = ("You owe $195 this week");
  }
  else if (currentWeek == 49) {
    elOwe.textContent = ("You owe $80 this week");
  }
  else if (currentWeek == 50) {

    elOwe.textContent = ("You owe $105 this week");

  }
  else if (currentWeek == 51) {
    elOwe.textContent = ("You owe $130 this week");
  }
  else if (currentWeek == 52) {
    elOwe.textContent = ("You owe $52 this week");
  }
}();

var elSave = document.getElementById('elSaved');

var ammountSaved = function() {
  if (perviousWeek == 0) {
    elSave.textContent = ("You currently have $0 in savings");
  } else if (perviousWeek == 1) {
    elSave.textContent = ("You currently have $20 in savings");
  } else if (perviousWeek == 2) {
    elSave.textContent = ("You currently have $55 in savings");
  } else if (perviousWeek == 3) {
    elSave.textContent = ("You currently have $100 in savings");
  } else if (perviousWeek == 4) {
    elSave.textContent = ("You currently have $225 in savings");
  } else if (perviousWeek == 5) {
    elSave.textContent = ("You currently have $250 in savings");
  } else if (perviousWeek == 6) {
    elSave.textContent = ("You currently have $300 in savings");
  } else if (perviousWeek == 7) {
    elSave.textContent = ("You currently have $375 in savings");
  } else if (perviousWeek == 8) {
    elSave.textContent = ("You currently have $505 in savings");
  } else if (perviousWeek == 9) {
    elSave.textContent = ("You currently have $535 in savings");
  } else if (perviousWeek == 10) {
    elSave.textContent = ("You currently have $590 in savings");
  } else if (perviousWeek == 11) {
    elSave.textContent = ("You currently have $670 in savings");
  } else if (perviousWeek == 12) {
    elSave.textContent = ("You currently have $805 in savings");
  } else if (perviousWeek == 13) {
    elSave.textContent = ("You currently have $840 in savings");
  } else if (perviousWeek == 14) {
    elSave.textContent = ("You currently have $900 in savings");
  } else if (perviousWeek == 15) {
    elSave.textContent = ("You currently have $985 in savings");
  } else if (perviousWeek == 16) {
    elSave.textContent = ("You currently have $1,125 in savings");
  } else if (perviousWeek == 17) {
    elSave.textContent = ("You currently have $1,165 in savings");
  } else if (perviousWeek == 18) {
    elSave.textContent = ("You currently have $1,230 in savings");
  } else if (perviousWeek == 19) {
    elSave.textContent = ("You currently have $1,320 in savings");
  } else if (perviousWeek == 20) {
    elSave.textContent = ("You currently have $1,470 in savings");
  } else if (perviousWeek == 21) {
    elSave.textContent = ("You currently have $1,515 in savings");
  } else if (perviousWeek == 22) {
    elSave.textContent = ("You currently have $1,585 in savings");
  } else if (perviousWeek == 23) {
    elSave.textContent = ("You currently have $1,680 in savings");
  } else if (perviousWeek == 24) {
    elSave.textContent = ("You currently have $1,835 in savings");
  } else if (perviousWeek == 25) {
    elSave.textContent = ("You currently have $1,855 in savings");
  } else if (perviousWeek == 26) {
    elSave.textContent = ("You currently have $1,960 in savings");
  } else if (perviousWeek == 27) {
    elSave.textContent = ("You currently have $2,060 in savings");
  } else if (perviousWeek == 28) {
    elSave.textContent = ("You currently have $2,225 in savings");
  } else if (perviousWeek == 29) {
    elSave.textContent = ("You currently have $2,280 in savings");
  } else if (perviousWeek == 30) {
    elSave.textContent = ("You currently have $2,360 in savings");
  } else if (perviousWeek == 31) {
    elSave.textContent = ("You currently have $2,465 in savings");
  } else if (perviousWeek == 32) {
    elSave.textContent = ("You currently have $2,635 in savings");
  } else if (perviousWeek == 33) {
    elSave.textContent = ("You currently have $2,695 in savings");
  } else if (perviousWeek == 34) {
    elSave.textContent = ("You currently have $2,780 in savings");
  } else if (perviousWeek == 35) {
    elSave.textContent = ("You currently have $2,890 in savings");
  } else if (perviousWeek == 36) {
    elSave.textContent = ("You currently have $3,065 in savings");
  } else if (perviousWeek == 37) {
    elSave.textContent = ("You currently have $3,130 in savings");
  } else if (perviousWeek == 38) {
    elSave.textContent = ("You currently have $3,220 in savings");
  } else if (perviousWeek == 39) {
    elSave.textContent = ("You currently have $3,335 in savings");
  } else if (perviousWeek == 40) {
    elSave.textContent = ("You currently have $3,515 in savings");
  } else if (perviousWeek == 41) {
    elSave.textContent = ("You currently have $3,585 in savings");
  } else if (perviousWeek == 42) {
    elSave.textContent = ("You currently have $3,680 in savings");
  } else if (perviousWeek == 43) {
    elSave.textContent = ("You currently have $3,800 in savings");
  } else if (perviousWeek == 44) {
    elSave.textContent = ("You currently have $3,990 in savings");
  } else if (perviousWeek == 45) {
    elSave.textContent = ("You currently have $4,065 in savings");
  } else if (perviousWeek == 46) {
    elSave.textContent = ("You currently have $4,165 in savings");
  } else if (perviousWeek == 47) {
    elSave.textContent = ("You currently have $4,290 in savings");
  } else if (perviousWeek == 48) {
    elSave.textContent = ("You currently have $4,485 in savings");
  } else if (perviousWeek == 49) {
    elSave.textContent = ("You currently have $4,565 in savings");
  } else if (perviousWeek == 50) {
    elSave.textContent = ("You currently have $4,670 in savings");
  } else if (perviousWeek == 51) {
    elSave.textContent = ("You currently have $4,800 in savings");
  }
 else if (perviousWeek == 52) {
  elSave.textContent = ("You currently have $5,000 in savings");
}

}();
