export interface LoginForm {
    username: String,
    password: String
}

export interface LoginResponse {
    access_token: string;
}

export interface Tenant {
    id: string;
    tenant_name: string;
    tenant_code: string;
    tenant_schema: string;
    created_at: string;
    updated_at: string;
}

export interface RegisterForm {
    email: string,
    username: string,
    password: string,
    gender: string,
    date_of_birth: string
}