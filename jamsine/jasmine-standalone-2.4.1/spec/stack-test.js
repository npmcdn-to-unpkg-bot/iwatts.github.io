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
            var success = stack.push(4522);
            expect(success).toBeTruthy();
            expect(stack.size()).toEqual(1);
        });
        it('fails on NaN:string', function () {
            var success = stack.push("apple");
            expect(success).toBeFalsy();
            expect(stack.size()).toEqual(0);
        });
        it('fails on NaN:object', function () {
            var success = stack.push({data:12654});
            expect(success).toBeFalsy();
            expect(stack.size()).toEqual(0);
        });
        it('fails on NaN:array', function () {
            var success = stack.push(["apple"],123, true);
            expect(success).toBeFalsy();
            expect(stack.size()).toEqual(0);
        });
        it('fails on NaN:function', function () {
            var success = stack.push( function () {
                alert("test");
            });
            expect(success).toBeFalsy();
            expect(stack.size()).toEqual(0);
        });
        it('fails on negative input', function () {
            var success = stack.push(-8765);
            expect(success).toBeFalsy();
            expect(stack.size()).toEqual(0);
        });
        it('fails on decimal input', function () {
            var success = stack.push(32.056);
            expect(success).toBeFalsy();
            expect(stack.size()).toEqual(0);
        });
    });
    describe('pop', function () {

        var number1 = 1;
        var number2 = 2;
        var number3 = 3;

        beforeEach( function () {
            stack.push(number1);
            stack.push(number2);
            stack.push(number3);
        });

        it('should increase the size of the stack correctly', function () {
            var number = stack.pop();
            expect(stack.size()).toEqual(2);
        });

        it('should pop correct sequence', function () {
            var firstNum = stack.pop();
            var secondNum = stack.pop();
            var thirdNum = stack.pop();

            expect(firstNum).toEqual(number3);
            expect(secondNum).toEqual(number2);
            expect(thirdNum).toEqual(number1);
        });
        it('should return undefined when empty', function () {
            stack = new Stack();
            expect(stack.size()).toEqual(0);

            var number = stack.pop();

            expect(number).toEqual(undefined);
        });

    });
    describe('size', function () {

        it('should return the right size', function () {

            stack.push(1);
            stack.push(2);
            stack.push(3);

            expect(stack.size()).toEqual(3);

            stack.push(75395);

            expect(stack.size()).toEqual(4);

        });

    });
    describe('isEmpty', function () {

        it('should return true when empty', function () {
            expect(stack.size()).toEqual(0);
            expect(stack.isEmpty()).toBeTruthy();
        });
        it('should return false when not empty', function () {

            stack.push(149);

            expect(stack.size()).toEqual(1);
            expect(stack.isEmpty()).toBeFalsy();

        });

    });


});
