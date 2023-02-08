const Manager = require("../lib/Manager");

let cookie = new Manager("Cookie", 321, "cookie@email.com", 8909);

test('Manager getName() returns the name', () => {
    expect(cookie.getName()).toBe("Cookie");
});

test('Manager getId() returns the id', () => {
    expect(cookie.getId()).toBe(321);
});

test('Manager getEmail() returns email', () => {
    expect(cookie.getEmail()).toBe("cookie@email.com");
});

test('Manager getOfficeNumber() returns 8909', () => {
    expect(cookie.getOfficeNumber()).toBe(8909);
});

test('Manager getRole() returns "Manager"', () => {
    expect(cookie.getRole()).toBe("Manager");
});

