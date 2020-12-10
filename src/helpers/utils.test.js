import {sortByMonthAndDay, getTotalAcquisitions, removeBoundaryDoubleQuotes} from "./utils";

const mockData = [
  {
    dayOfMonth: "8",
    month: 9,
    sites: 30,
  },
  {
    dayOfMonth: "27",
    month: 10,
    sites: 30,
  },
  {
    dayOfMonth: "7",
    month: 9,
    sites: 40,
  }
];

describe("Data parsing", () => {
  it('Sorts data correctly, starting from first day', () => {
    const expectedArray = [mockData[2], mockData[0], mockData[1]];
    expect(sortByMonthAndDay(mockData)).toEqual(expectedArray);
  });

  it('Counts total acquisitions correctly', () => {
    expect(getTotalAcquisitions(mockData)).toEqual(100);
  });
});

describe("Misc utils", () => {
  it('Removes double quotes correctly', () => {
    const original1 = '"test"';
    const original2 = '"test""test"';
    const expected1 = 'test';
    const expected2 = 'test""test';
    expect(removeBoundaryDoubleQuotes(original1)).toEqual(expected1);
    expect(removeBoundaryDoubleQuotes(original2)).toEqual(expected2);
  });
})
