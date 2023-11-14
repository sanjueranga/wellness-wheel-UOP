export const server = process.env.SERVER ?? "http://localhost:3333/api";

export async function getUser() {
  const res = await fetch(`${server}/auth/google/login`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to submit user data");
  }
  console.log("success");
  console.log(res + " here ++++++++++++++++++++++++++++=");
  return res;
}
