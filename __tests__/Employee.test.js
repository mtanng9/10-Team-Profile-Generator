const Employee = require("../lib/Employee");

let jose = new Employee("Jose", 123, "example@email.com");

test('Employee getName() returns the name', () => {
    expect(jose.getName()).toBe("Jose");
});

test('Employee getId() returns the id', () => {
    expect(jose.getId()).toBe(123);
});

test('Employee getEmail() returns email', () => {
    expect(jose.getEmail()).toBe("example@email.com");
});

test('Employee getRole() returns "Employee"', () => {
    expect(jose.getRole()).toBe("Employee");
});