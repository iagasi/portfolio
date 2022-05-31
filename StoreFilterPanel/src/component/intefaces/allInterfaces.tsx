 export interface ICusines {
    id: number;
    value: string;
    name: string;
    checked: boolean;
  }

 export interface ICheckbox{
      cusines:ICusines[],
      checkBoxHandler: (id:number) => void
    }
export interface ISlider{

  price:number| number[]
  priceHandler:(event: any, value: number| number[]) => void
}
  export interface IFilterPanel {
    selectedCaegoryHandler: (event: any, value: string) => void
    selectedCategory: string
    setSelectedRaiting: (event: any, value: string) => void
    seletedRaiting: string
    CheckBoxHandler: (event: any, value: string) => void
    cusines: ICusines[]
    checkBoxHandler: (id:number) => void
    price:number| number[]
    priceHandler:(event: any, value: number| number[]) => void
    

  }

  export interface ILlistItems{
    id: number
    title: string
    serviceTime: string
    deliveryFee: number
    category: string
    cuisine: string
    rating: number
    price: number
    coverSrc: string
  
}
 export interface IList{
  // setListHandler:()=>void
  listItems:Array<ILlistItems>
  basketHandler:(action:string, item:ILlistItems)=>void
}
export interface IBasketItem extends ILlistItems {
  amount?: number
}