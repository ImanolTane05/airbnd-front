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

interface PropertyListProps {
    landlord_id?: string | null;
    favorites?: boolean | null;
}

const PropertyList: React.FC<PropertyListProps> = ({
    landlord_id,
    favorites
}) => {
    const [properties,setProperties] = useState<PropertyType[]> ([]);

    const getProperties = async () =>{
        let url ='/api/properties/';

        if (landlord_id) {
            url += `?landlord_id=${landlord_id}`
        } 

       const tmpProperties = await apiServices.get(url)

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