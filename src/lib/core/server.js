"use server";

import { headers } from "next/headers";
import { getUserToken } from "./session";
import { redirect } from "next/navigation";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const authHeader = async () => {
  const token = await getUserToken();
  const header = {
    authorization: `Bearer ${token}`,
  };
  return token ? header : {};
};

export const serverFetch = async (path) => {
  const res = await fetch(`${baseUrl}${path}`);
  return res.json();
};

export const protectedFetch = async (path) => {
  const res = await fetch(`${baseUrl}${path}`, {
    headers: await authHeader(),
  });

  // handle 401, 403

  return handleStatusCode(res);
};

export const serverMutation = async (path, data, method = "POST") => {
  const res = await fetch(`${baseUrl}${path}`, {
    method: method,
    headers: {
      "content-type": "application/json",
      ...(await authHeader()), // for jwt --> after authHeaders
    },
    body: JSON.stringify(data),
  });
  //return res.json();
  return handleStatusCode(res);
};

const handleStatusCode = (res) => {
  if (res.status === 403) {
    redirect("/unauthorized");
  } else if (res.status === 400) {
    redirect("forbidden");
  }
  return res.json();
};
