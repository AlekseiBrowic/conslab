const obj = {
  name: "Jane",
  age: 25,
  city: "Los Angeles"
};

const properties = {
  name: "John",
  age: 30,
  city: "New York"
};

Object.keys(properties).forEach(key => {
  obj[key] = properties[key];
});
