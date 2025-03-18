'use client';


import { useEffect,useState } from "react";
import PropertyListItem from "./PropertyListItem";
import apiServices from "@/app/services/apiServices";

export type PropertyType ={
    id:string;
    title:String;
    image_url:string;
    price_per_night:number;
}

const PropertyList = () => {
    const [properties,setProperties] = useState<PropertyType[]> ([]);
    const getProperties = async () =>{
       const tmpProperties = await apiServices.get('/api/properties/')

       setProperties(tmpProperties.data);
    };
    useEffect (() =>{
        getProperties();
    },[]);
    return(
        <>
            {properties.map((property)=>{
                return(
                    <PropertyListItem 
                        key={property.id}
                        property={property}
                    />
                )
            })}
            
            
        </>
    )
}
export default PropertyList;