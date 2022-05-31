import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Basket } from '../../component/basket/Basket'
import FilterPanel from '../../component/FilterPanel/FilterPanel'
import { IBasketItem } from '../../component/intefaces/allInterfaces'
import List from '../../component/List/List'
import SearchBar from '../../component/SearchBar/SearchBar'
import { CheckBoxData, dataList } from '../../constants'
import MenuIcon from '@mui/icons-material/Menu';
import s from "./home.module.css"


function Home() {

  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [selectedRaiting, setSelectedRaiting] = useState<string>("")
  const [selectedCheckbox, setSelectedCheckBox] = useState(CheckBoxData)
  const [price, setPrice] = useState<number[]>([99, 5000])
  const [ListItems, setListItems] = useState(dataList)
  const [basketItems, setBasketItems] = useState<Array<IBasketItem>>([])
  const [search, setSearch] = useState("")
  const [burger, setBurger] = useState(false)
const burgerHandler=()=>{
  setBurger(!burger)
  console.log(burger)
}
  const Filter = () => {
    let temp = dataList
    if (selectedRaiting) {
      temp = temp.filter(item => item.rating == parseInt(selectedRaiting))
    }

    if (selectedCategory) {
      if (selectedCategory !== "all") {
        temp = temp.filter(item => item.category == selectedCategory)

      }

    }
    if (selectedCheckbox) {
      const checked: string[] = []
      selectedCheckbox.forEach(element => {
        if (element.checked) {
          checked.push(element.value)
        }
      });

      if (checked.length) {
        temp = temp.filter(item => checked.includes(item.cuisine.toLowerCase()))
      }
      if (price) {
        const minPrice = price[0]
        const maxPrice = price[1]
        temp = temp.filter(item => item.price >= minPrice && item.price <= maxPrice)
      }
    }
    if (search) {
      temp = temp.filter(item => item.title.toLocaleLowerCase().search(search.toLocaleLowerCase()) !== -1)
    }

    setListItems(temp)

  }
  useEffect(() => {
    Filter()

  }, [selectedRaiting, selectedCategory, selectedCheckbox, price, search])


  const searchBarHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);

  }

  const priceHandler = (_: any, val: any) => {

    setPrice(val)
  }

  const selectRaitingHandler = (_: any, value: string): void => {
    if (value) {
      setSelectedRaiting(value)
    }
    if (!value) {
      setSelectedRaiting("")
    }
  }

  const selectedCaegoryHandler = (_: any, value: string): void => {
    if (value) {
      setSelectedCategory("")
      setSelectedCategory(value)
    }

  }
  const checkBoxHandler = (id: number) => {
    const newCusines = selectedCheckbox.map((el) => { if (el.id === id) { return { ...el, checked: !el.checked } } else return el })
    setSelectedCheckBox(newCusines)
  }

  const basketHandler = (action: string, item: IBasketItem) => {
    switch (action) {

      case "add":
        let index: null | number = null
        const candidate = basketItems.find((e, i) => {
          if (e.id === item.id) {
            index = i
            return e
          }
        })

        if (!candidate) {
          item.amount = 1
          setBasketItems(prev => [...prev, item])
        }

        if (candidate && index !== null) {

          const newArray = basketItems
          let newAmount = newArray[index].amount

          if (newAmount !== undefined) {
            newAmount += 1
            newArray[index].amount = newAmount
            console.log("candidate");

            setBasketItems([...newArray])

          }
        }
        break
      case "remove":
        setBasketItems(basketItems.filter(el => el.id !== item.id))
        break
      case "deleteOne":
        console.log("deleteone");
        // if (item.amount === 0) {
        //   setBasketItems([...basketItems])
        // }
        const newAmount = basketItems
        newAmount.find((el) => {
          if (el.id === item.id) {
            el.amount && el.amount--
            console.log(el);

          }
        })
        setBasketItems([...newAmount])



    }




  }

  return (
    <div className={s.home}>
      <div className={s.home__top}>

        <SearchBar value={search} searchBarHandler={searchBarHandler} />
        <Basket basketHandler={basketHandler} basketItems={basketItems} />
        <div className={s.burger} onClick={burgerHandler}><MenuIcon style={{ fontSize: "40px" }} /> </div>

      </div>

      <div className={s.home__content}>
        <div className={`${s.home__filter } ${burger&&s.showBurger }` }>
          <FilterPanel
            selectedCaegoryHandler={selectedCaegoryHandler}
            selectedCategory={selectedCategory}
            setSelectedRaiting={selectRaitingHandler}
            seletedRaiting={selectedRaiting}
            CheckBoxHandler={setSelectedCheckBox}
            cusines={CheckBoxData}
            checkBoxHandler={checkBoxHandler}
            price={price}
            priceHandler={priceHandler}

          />

        </div>
        <div className={s.home__list}>
          <List listItems={ListItems} basketHandler={basketHandler}
          />
        </div>
      </div>

    </div>
  )
}

export default Home