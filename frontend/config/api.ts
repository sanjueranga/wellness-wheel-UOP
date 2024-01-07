export const server = process.env.SERVER ?? "http://localhost:3333/api";

export async function postScore(data: any) {
  const tokenString = localStorage.getItem("wellness-token");
  if (!tokenString) {
    throw new Error("Authentication token not found");
  }
  const token = JSON.parse(tokenString);
  const res = await fetch(`${server}/submission`, {
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
    const tokenString = localStorage.getItem("wellness-token");
    if (!tokenString) {
      throw new Error("Authentication token not found");
    }
    const token = JSON.parse(tokenString);
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

export async function postActionPlan(data: any) {
  const tokenString = localStorage.getItem("wellness-token");
  if (!tokenString) {
    throw new Error("Authentication token not found");
  }
  const token = JSON.parse(tokenString);
  const res = await fetch(`${server}/action-plan/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Failed to action plan data");
  }
  return await res.json();
}

export async function getSutmissions() {
  try {
    if (typeof localStorage === "undefined" || localStorage === null) {
      throw new Error("localStorage is not available");
    }
    const tokenString = localStorage.getItem("wellness-token");
    if (!tokenString) {
      throw new Error("Authentication token not found");
    }
    const token = JSON.parse(tokenString);
    const res = await fetch(`${server}/submission`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch submissions data");
    }
    const submissions = await res.json();
    return submissions;
  } catch (error: any) {
    console.error("Error fetching submissions:", error.message);
    return null;
  }
}

export async function getActionPlan() {
  try {
    if (typeof localStorage === "undefined" || localStorage === null) {
      throw new Error("localStorage is not available");
    }
    const tokenString = localStorage.getItem("wellness-token");
    if (!tokenString) {
      throw new Error("Authentication token not found");
    }
    const token = JSON.parse(tokenString);
    const res = await fetch(`${server}/action-plan`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch actionPlan data");
    }
    const actionPlan = await res.json();
    return actionPlan;
  } catch (error: any) {
    console.error("Error fetching ActionPlan:", error.message);
    return null;
  }
}
