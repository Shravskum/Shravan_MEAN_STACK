export interface ITransaction {
    id: string
    date: string
    Comments: string
}

export interface IResponse {
    data: ITransaction[]
}

export interface ITxParam {
    sort: string
    filter: string
}
