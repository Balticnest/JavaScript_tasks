
var Request = function () {
    note = "";
    this.name = function (name) {
        note = name + ' goes to';
       return this;
    }
    this.go = function (place) {
        note = note + "  " + place + ' to buy ';
       return this;

    }
    this.buy = function (item) {
        note = note + '' + item;
        console.log(note);
        return this;
    }
}
var test = new Request();
test.name(' John ').go(' Shop ').buy(' Food ');
