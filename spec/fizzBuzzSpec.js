
describe("FizzBuzz", function () {
    it("returns fizz when number can be divided by 3", function () {
        var fizzBuzz = new FizzBuzz()
        expect(fizzBuzz.check(3)).toEqual('fizz');
    });
});
