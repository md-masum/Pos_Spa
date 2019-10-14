export interface User {
    [x: string]: any;
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    role: string;
    employeeId: string;
    gender: string;
    dateOfBirth: Date;
    created: Date;
    lastActive: Date;
    city: string;
    country: string;
}