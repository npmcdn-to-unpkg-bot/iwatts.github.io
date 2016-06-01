describe("Stack implement", function () {

    var stack;

    beforeEach(function () {
        stack = new Stack();
    });

    describe('push', function () {
        it('increases size of stack', function () {
            stack.push(4521);
            expect(stack.size()).toEqual(1);

        });
        it('succeeds on num input', function () {

        });
        it('fails on NaN', function () {

        });
    });
    describe('pop', function () {

    });
    describe('size', function () {

    });
    describe('isEmpty', function () {

    });


});
