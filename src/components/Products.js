import {React , useState , useEffect} from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Products = () => {
    const [data , setData ] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then(res=>{
            setData(res.data)
        })
    }, [])

const ShowProducts = () =>
{
    return(
        <>
        {
            data.map((val,i)=>
            {
                return(
                    <>
                    <div className="card_head col-md-4 mt-5 " key={i}>
                        <div className="card h-100 text-center" key={val.id}  >
                        <NavLink to={`/products/${val.id}`}><img src={val.image} className="card-img-top" alt={val.title} height="350px" /></NavLink>
                        <div className="card-body">
                            <h5 className="card-title mb-0 text-left" style={{fontWeight:"bolder"}}>{val.title}</h5>
                            <br></br>
                            <p className="card-text lead text-left fw-bold" style={{color:"blue"}}>$ {val.price}</p>
                        </div>
                        </div>
                    </div>
                    </>
                )
            })
        }
        </>
    )
}
    

 return(
    <div>
      <div className="container my-5">
        <div className="row justify-content-center">
            <ShowProducts /> 
        </div>
      </div>
    </div>
 )
};

export default Products;
