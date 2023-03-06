import React,{useEffect, useState} from "react";
import "../addprod/add.css";
import { AnimatePresence, motion } from "framer-motion";
import 'react-awesome-slider/dist/styles.css';
import { getStorage,ref,uploadBytes} from "firebase/storage";
import Slides1 from "./slides/slides1";
import { useNavigate } from "react-router-dom";
import Slides2 from "./slides/slides2";




export default function AddProd(props) {
    

    const [slide,setSlide] =useState({})
    const [click,setClick] = useState(0)
    const nextClick = () => {
         setClick(click + 1)
        console.log(click)
    }

    const nevigate = useNavigate()
    const [file, setFile] = useState();
    const [Sfile, setSfile] = useState();
    const [product,setProd] = useState({
        id:"",
        img:"",
        title:"",
        disc:"",
        price:"",
        location:"",
        phnnum:""
    })
    const storage = getStorage();

    const hendlesbmt = () => {
        const Uid = localStorage.getItem("Uid")
        console.log(Uid)
           const store = ref(storage,`${Uid}/${file.name}`)
           uploadBytes(store, file).then((snapshot) => {
           
           alert('Uploaded file! succesfully',snapshot );
          });
          
        }

    const handlechng = (e) =>  { 
        setFile(e.target.files[0])
        console.log(file)
        setSfile(URL.createObjectURL(e.target.files[0]))
        setProd({})
        console.log(product)
        }





    useEffect(() => {
        console.log(file)
    },[file,slide])
   
   
       
    




    return(
        <div className="meixbox">
          <motion.div className="addProd" >
             <div className="toplist">
                <div className="text23">Product Detail Form</div>
                <div className="gol" onClick={props.clk}>
                    <div className="gol1"></div>
                    <div className="gol2"></div>
                    <div className="gol3"></div>
                </div>
             </div>
             <div className="botlist">

                <AnimatePresence>
                 {click === 0 && <Slides1 text="next" next={nextClick} />}
                 {click === 1 && <Slides2 text="next" next={nextClick} />}
                 {click === 2 && <>{setClick(0) }<Slides1 text="next" next={nextClick} /></>}
                </AnimatePresence>
                
             </div>
          </motion.div>
        </div>
    )
}