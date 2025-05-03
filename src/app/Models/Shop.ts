
export class Dimensions{
      width?: number
      height?:number
      depth?: number
}

export class Review {
    rating?: number
    comment?: string
    date?: string
    reviewerName?:string
    reviewerEmail?: string
}

export class Shop {
    id!: number
    title?: string
    description?: string
    tags? : string[]
    dimensions? : Dimensions
    reviews?  : Review[]
    images? : string[]
    thumbnail? :string
   
}