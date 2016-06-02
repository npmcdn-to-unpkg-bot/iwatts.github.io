/**
 * Created by isaacwatts on 6/1/16.
 */
function Stack() {

    var container = [];

    this.push = function (number) {

        if(typeof number == 'number' && number >= 0 && Math.floor(number) == number) {
            container.push(number);
            console.log(container);

            return true;
        }

        return false;

    };

    this.size = function () {
        return container.length;
    };

    this.pop = function () {
        var number = container.pop();
        console.log(container);
        return number;
    };

    this.isEmpty = function () {
        return container.length == 0;
    };
}
