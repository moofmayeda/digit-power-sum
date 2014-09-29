describe("sum", function() {
  it("returns the sum of the digits", function() {
    sum(614656).should.eq(28);
  });
});

describe("series", function() {
  it("returns the nth number in the series", function() {
    series(1).should.eq(81)
    series(2).should.eq(512)
    series(10).should.eq(614656)
    series(30).should.eq(248155780267521)
  });
});
