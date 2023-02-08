const Engineer = require("../lib/Engineer");

let sam = new Engineer("Sam", 423, "sam@email.com", "S_AM");

test('Engineer getName() returns the name', () => {
    expect(sam.getName()).toBe("Sam");
});

test('Engineer getId() returns the id', () => {
    expect(sam.getId()).toBe(423);
});

test('Engineer getEmail() returns email', () => {
    expect(sam.getEmail()).toBe("sam@email.com");
});

test('Engineer getGitHub() returns S_AM', () => {
    expect(sam.getGitHub()).toBe("S_AM");
});

test('Engineer getRole() returns "Engineer"', () => {
    expect(sam.getRole()).toBe("Engineer");
});

