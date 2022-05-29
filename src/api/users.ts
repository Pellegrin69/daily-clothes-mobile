import {User} from "../models/User";

type LoginResponse = {
  jwt: string
  user: User
}

export const login = (login: string, password: string): Promise<User> => {
  return fetch("http://localhost:1337/api/auth/local", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      "identifier": login,
      "password": password
    })
  })
    .then(response => response.json())
    .then((data: LoginResponse) => data.user);
}