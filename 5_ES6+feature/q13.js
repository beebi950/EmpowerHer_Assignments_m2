const people = [
  { name: "Rahul", address: { city: "Mumbai", street: { name: "Linking Road", number: 101 } } },
  { name: "Priya", address: { city: "Delhi", street: { name: "Rajpath", number: 202 } } }
];

const result = people.map(
  ({ name, address: { city, street: { name: streetName } } }) =>
    `${name} lives in ${city} on ${streetName}`
);

console.log(result);
