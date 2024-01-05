export const server = process.env.SERVER ?? "http://localhost:3333/api";

// export async function getUser() {
//   const res = await fetch(`${server}/auth/google/login`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   if (!res.ok) {
//     throw new Error("Failed to submit user data");
//   }
//   console.log("success");
//   return res;
// }

export async function postScore(data: any, id: number) {
  const token = localStorage.getItem("wellness-token");
  if (!token) {
    throw new Error("Authentication token not found");
  }
  const res = await fetch(`${server}/user/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to submit user data");
  }

  return await res.json();
}

export function saveUser(token: any) {
  localStorage.setItem("wellness-token", JSON.stringify(token));
}

export async function getMe() {
  try {
    if (typeof localStorage === "undefined" || localStorage === null) {
      throw new Error("localStorage is not available");
    }
    const token = localStorage.getItem("wellness-token");
    if (!token) {
      throw new Error("Authentication token not found");
    }
    const res = await fetch(`${server}/user/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch user data");
    }
    const user = await res.json();
    return user;
  } catch (error: any) {
    console.error("Error fetching user:", error.message);
    return null;
  }
}

export async function postActonPlan(data: any, id: number) {
  const res = await fetch(`${server}/action-plan/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Failed to action plan data");
  }
  return await res.json();
}
