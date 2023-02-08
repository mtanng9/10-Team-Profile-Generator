const Intern = require("../lib/Intern");

let bob = new Intern("Bob", 567, "bob@email.com", "upenn");

test('Intern getName() returns the name', () => {
    expect(bob.getName()).toBe("Bob");
});

test('Intern getId() returns the id', () => {
    expect(bob.getId()).toBe(567);
});

test('Intern getEmail() returns email', () => {
    expect(bob.getEmail()).toBe("bob@email.com");
});

test('Intern getSchool() returns school name', () => {
    expect(bob.getSchool()).toBe("upenn");
});

test('Intern getRole() returns "Intern"', () => {
    expect(bob.getRole()).toBe("Intern");
});