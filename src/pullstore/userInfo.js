import { useState } from "react"
import {auth,db} from "../firebase.file/firebase"
import { doc,setDoc,collection,updateDoc,getDoc} from "firebase/firestore"





let UserStore = ({
    Uid:"",
})
export const UserDet = () => {
    // let [isAuth,setAuth] = useState("")
   
    auth.onAuthStateChanged(async usar =>{
       UserStore.Uid = usar.uid
       const userRef = doc(db,usar.uid,"UserStore");
       await setDoc(userRef, {UserStore});

       const reg_Ref = doc(db,usar.uid,"UserStore");
       getDoc(reg_Ref).then(res => {
        let Ans = {...res.data()}
         let bsr = Ans.UserStore;
        //  UserStore.StoreAuth = bsr.StoreAuth;
       }).catch(err => console.log(err));
    })

    

}
UserDet();



export {UserStore}

