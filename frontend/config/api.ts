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
  return res;
}

export async function postScore(data: any, id: number) {
  const res = await fetch(`${server}/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Failed to submit user data");
  }
  return await res.json();
}

// meka use karaddi, postScore(user.id, data) vidiyt call krhn, data kiyn eka, {"emotional":10}, kiyn fomat eken one
