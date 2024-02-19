const zod = require("zod");

function validateInput(arr) {
  const schema = zod.array(zod.number());
  const response = schema.safeParse(arr);
  console.log(response);
}
validateInput(33);
function newOne(mail) {
  const schema2 = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
    country: zod.literal("IN").or(zod.literal("US")),
  });
  const response2 = schema2.safeParse(mail);
  console.log(response2);
}
newOne({
  email: "tugrp@example.com",
  password: "12345678",
  country: "IN",
});