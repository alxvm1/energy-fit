export interface ISignUpFormData {
    service: string;
    fullName: string;
    phone: string;
    email: string;
    comment: string;
}

export interface ISignUpFormErrors {
    service?: string;
    fullName?: string;
    phone?: string;
    email?: string;
    comment?: string;
}

