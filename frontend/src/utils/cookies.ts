import Cookies from "js-cookie";

export const setCookie = (
  key: string,
  value: string,
  expires: number,
  sameSite: "lax" | "strict" | "none"
) => {
  Cookies.set(key, value, {
    expires,
    path: "/",
    sameSite,
  });
};
