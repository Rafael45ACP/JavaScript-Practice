let obj = {
    name: "Sam",
    show: function() {
        setTimeout(function() {
            console.log(this.name);
        }.bind(this), 1000);
    }
};
obj.show();