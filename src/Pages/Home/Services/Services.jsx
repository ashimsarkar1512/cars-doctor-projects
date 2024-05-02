import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "../ServicesCard/ServicesCard";


const Services = () => {
            const[Services,setServices]=useState([])
            useEffect(()=>{
                fetch('services.json')
                .then(res=>res.json())
                .then(data=>setServices(data))
            },[])
            return (
                        <div className="mt-4">
                               <div className="text-center">
                                    <h3 className="text-2xl  font-bold text-orange-500">Service</h3>
                                    <h1 className="text-4xl font-semibold">Our Service Area</h1>
                                    <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
                               </div> 

                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> 
                                    {
                                                Services.map(Service=><ServicesCard
                                                 key={Service._id}
                                                 service={Service}
                                                >

                                                </ServicesCard>)
                                    }
                                </div>    
                        </div>

                      
            );
};

export default Services;