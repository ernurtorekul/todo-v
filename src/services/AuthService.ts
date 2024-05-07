import $api from "../http";
import { AxiosResponse } from "axios";
import {AuthResponse} from "../models/response/AuthResponse"


export default class AuthService{
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>(url: '/login', data:{email, password})
    }
    
    static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>(url: '/register', data:{email, password})
    }
    
    static async logout(): Promise<void>{
        return $api.post<AuthResponse>(url: '/logout')
    }
}

