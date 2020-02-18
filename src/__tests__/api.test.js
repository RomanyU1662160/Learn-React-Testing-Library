/*

import api from "../api";

describe("api", () => {
  it("should run fetch when called", async () => {
    // arrange

    // 1) set the output for the "json()" fetch response call
    const output = {
      testAnswer: true
    };

    const jsonTest = jest.fn(() => output);

    // 2) mock up fetch to return the json test function as a promise.
    global.fetch = jest.fn(async () => ({
      json: jsonTest
    }));

    // act
    const response = await api(
      "/testUri",
      "post",
      {
        test: "12345"
      },
      {
        testValue: "12345"
      }
    );

    // assert
    expect(global.fetch).toHaveBeenCalledWith("/motor/testUri", {
      body: '{"testValue":"12345"}',
      headers: { "Content-Type": "application/json", test: "12345" },
      method: "post"
    });
    expect(jsonTest).toHaveBeenCalledWith();

    expect(response).toEqual(output);
  });
});
*/
