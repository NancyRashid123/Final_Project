import { useQuery } from "@tanstack/react-query"
import { AxiosConfig } from "../axios/AxiosConfig"




 export const getDataTeam = () => {
   return  useQuery ({
        queryKey: ['team'],
        queryFn:  () =>  AxiosConfig.get('/team'),
        
    })
    
    
}

export const getSingleCompany = (slug) => {
  return useQuery({
      queryKey: ["single-company"],
      queryFn: () => AxiosConfig.get(`/team/${slug}`),
  });
};



export const getDataProucts = () => {
  return  useQuery ({
    queryKey: ['products'],
    queryFn:  () =>  AxiosConfig.get('/products'),
    
  })
  
  
}


export const getSingleProduct = (id) => {
  return useQuery({
      queryKey: ["single-product"],
      queryFn: () => AxiosConfig.get(`/products/${id}`),
  });
};