function getUser(id: number) {
  return {
    id,
    email: `user${id}@test.com`,
  }
}

test("1 is 1", () => {
  expect(1).toBe(1)
});

test("return a user object", () => {
  expect(getUser(1)).toEqual({
    id: 1,
    email: `user1@test.com`,
  });
});