import $api from "../http";
import {AxiosResponse} from "axios";
import {AuthResponse} from "../models/response/AuthResponse"
import {LogoutResponse} from "../models/response/LogoutResponse";


export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return await $api.post<AuthResponse>('/login', {email, password})
    }

    static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return await $api.post<AuthResponse>('/register', {email, password})
    }

    static async logout(): Promise<void> {
        await $api.post<LogoutResponse>('/logout')
    }
}

