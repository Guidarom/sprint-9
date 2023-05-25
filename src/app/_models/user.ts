export interface User {
        id?:           number;
        nombre?:         string;
        email:        string;
        password?:     string;
        estado?: boolean;
        rol?: string;
        token?: string;
}

export interface AuthResponse {
        usuario?:  User;
        token?: string;
        msg?:   string;
}
