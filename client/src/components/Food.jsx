import { useState,useEffect } from "react"

const Food = () => {
    const [items,setItems] = useState([]);
    useEffect(()=>{
        const apiUrl = "https://www.themealdb.com/api/json/v1/1/categories.php"
        fetch(apiUrl).then((res)=>{
            if(!res.ok)
            {
                throw new Error("Failed to fetch")
            }
            return res.json()
        }).then((data)=>{
            setItems(data)
            console.log(data);
        }).catch((err)=>{
            console.log('Error: ',err);
        })
    },[])
  return (
    <>
    <div>
      {
            items.categories && items.categories.map((item)=>{
                return(
                    <div key={item.idCategory}>
                        <h1>{item.strCategory}</h1>
                        <p>{item.strCategoryDescription}</p>
                        <img src={item.strCategoryThumb} alt={item.strCategory}/>
                    </div>
                )
            })
      }
    </div>
    </>
  )
}

export default Food
