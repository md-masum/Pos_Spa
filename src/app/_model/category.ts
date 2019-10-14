export interface Category {
    [x: string]: any;
    id: number;
    name: string;
    activeStatus: boolean;
    updateByUserId: number;
    updateDate: Date;
    createdByUserId: number;
    createdDate: Date;
}
