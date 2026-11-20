import { api } from "../lib/axios";
import type { LoginFormData } from "../schemas/loginSchema";
import type { Usuario } from "../types";

export interface LoginResponse {
  token: string;
  usuario: Usuario;
}

export async function login(data: LoginFormData): Promise<LoginResponse> {
  const { data: loginData } = await api.post<LoginResponse>(
    "/auth/login",
    data,
  );
  return loginData;
}
