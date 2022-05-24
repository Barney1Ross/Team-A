import React , {createContext} from "react";
import {auth,db,storage} from "../config";
import firebase from "firebase/compat/app";
export const ContextProvider = createContext();
const Context= (props) => {
  const [user, setUser] = React.useState(null);
  const [loader, setLoader]= React.useState(true);
    const [model ,setModel] = React.useState(false);
    const [posts, setPosts] = React.useState([]);
    const openModel = () =>{
        setModel(true);
    };
    const closeModel = () =>{
        setModel(false);
    };
    const register = async (user) => {
        const { username, email, password } = user;
        try {
          const res = await auth.createUserWithEmailAndPassword(email, password);
          res.user.updateProfile({ displayName: username });
          setModel(false);
        } catch (error) {
          console.log(error);
        }
      };

    const login = async user => {
      const {email,password} = user;
      try{
      const res = await auth.signInWithEmailAndPassword(email,password);
      setModel(false);}
      catch (err) {
        console.error(err);
        alert("INVALID CredentialS, Try again");
    }
  };
    const logout = () => {
     auth.signOut().then(() => {
     setUser(null);
     })
     .catch((err) => {
      console.log(err)
    });
  };
  const create = (data) => {
    const { title, image } = data;
    const upload = storage.ref(`images/${image.name}`).put(image);
    upload.on(
      "state_changed",
      (snp) => {
        let progress = (snp.bytesTransferred / snp.totalBytes) * 100;
        console.log(progress);
      },
      (err) => {
        console.log(err);
      },
      () => {
        //success function/complete function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              title,
              image: url,
              username: user.displayName,
              currentTime: firebase.firestore.FieldValue.serverTimestamp(),
            });
          });
      }
    );
  };

  React.useEffect(() =>{
    auth.onAuthStateChanged(user =>{
      setUser(user);
      setLoader(false);

    })
    // fecth post from firebase
    db.collection("posts").orderBy("currentTime","desc").onSnapshot(snp => {
      console.log("data",snp.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        image:doc.data().image,
        username : doc.data().username,
      }))
      )
    })

  },[]);
  console.log("user",user);


    return(<ContextProvider.Provider value={{model, openModel, closeModel, register,login,user,loader,logout,create,posts}}>
        {props.children}

    </ContextProvider.Provider>)
    
};

export default Context;