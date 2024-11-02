import { useEffect, useState } from "react"

const UseBrands = () =>
{
    const [ brands, setBrands ] = useState([])

    useEffect(()=>
    {
        fetch("company.json").then(res=>res.json()).then(data=>setBrands(data))
    },[])

    return [brands, setBrands]
}

export default UseBrands