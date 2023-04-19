import { v4 as uuid } from "uuid";

let users = [
  {
    firstName: "john",
    lastName: "doe",
    age: 30,
    id: uuid(),
  },
  {
    firstName: "jane",
    lastName: "doe",
    age: 10,
    id: uuid(),
  },
];

export const allUsers = (req, res, next) => {
  res.send(users);
};

export const createUser = (req, res, next) => {
  const userWithID = { ...req.body, id: uuid() };
  users.push(userWithID);
  res.send(`user ${userWithID.firstName} added to database successfully `);
};

export const findUser = (req, res, next) => {
  const userWithID = users.find((user) => user.id === req.params.id);
  res.send(userWithID);
};

export const deleteUser = (req, res, next) => {
  users = users.filter((user) => user.id !== req.params.id);
  res.send(`user ${req.params.id} deleted from database successfully `);
};

export const updatedUser = (req, res, next) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);

  const { firstName, lastName, age } = req.body;

  if (firstName) user.firstName = firstName;

  if (lastName) user.lastName = lastName;

  if (age) user.age = age;

  res.send(`user ${id} updated successfully `);
};
