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
  const res = await fetch(`${server}/submission/${id}`, {
    method: "POST",
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

export async function getUser(id: number) {
  const res = await fetch(`${server}/users/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to submit user data");
  }
  return await res.json();
}

export function saveUser(token: any) {
  localStorage.setItem("wellness-token", JSON.stringify(token));
  // localStorage.setItem("userIdW", JSON.stringify(user.id));
  // localStorage.setItem("userPictureW", JSON.stringify(user.picture));
}

export function getMe() {
  try {
    if (typeof localStorage === "undefined" || localStorage === null) {
      throw new Error("localStorage is not available");
    }

    const userName = localStorage.getItem("userNameW");
    const userId = localStorage.getItem("userIdW");
    const userPicture = localStorage.getItem("userPictureW");

    if (userName && userId && userPicture) {
      const user = {
        name: userName,
        id: userId,
        picture: userPicture,
      };

      return user;
    } else {
      return null;
    }
  } catch (error: any) {
    console.error("Error accessing localStorage:", error.message);
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
