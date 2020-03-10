import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';



class funcFire{
    
   

    constructor(){
        

    }
    async newUserSetUpDB(){

        const ref = firestore().collection('users')
        var ID = auth().currentUser.uid
        var Name = auth().currentUser.displayName
        await ref.doc(String(auth().currentUser.uid)).set({
            email: auth().currentUser.email,
            ID: ID,
            Name: Name
        }).then(async()=>{

            await firestore().collection('names').doc(Name).set({
                userID: ID
            })
    
            await ref.doc(auth().currentUser.uid).collection("ITEMS").doc("none").set({})
    
            await ref.doc(auth().currentUser.uid).collection("friends").doc("none").set({})
    
            await ref.doc(auth().currentUser.uid).collection("friendRequests").doc("none").set({})
    
        })


}
//For ADDİNG FRIEND {=>
    ADDresult = "";
    
  
    async addFriend(userName){
        var userIDD = firestore().collection('names').doc(userName).get().then((snap) =>{
            console.log(snap.data().userID);
            return String(snap.data().userID);
        } )
         console.log(typeof userIDD) 
        const ref = firestore().collection('users').doc(String(userIDD)); //çevirmek lazım ad=>id
        await ref.get().then((docSnap)=>{
            if(docSnap.exists)
            {
                ref.collection("friends").doc(auth().currentUser.displayName).get()
                .then((docSnap_)=>{
                    if(!docSnap_.exists)
                    {
                        ref.collection('friendRequests').doc(auth().currentUser.displayName).set({
                            UserID: auth().currentUser.uid ,
                        })
                        this.ADDresult ="Invite Sent";
                        console.log(this.ADDresult)
                        
                    }
                    else
                    {
                        this.ADDresult ="You're already friends";
                    }
                })
                
            }
            else
            {
                this.ADDresult ="User Not Found";
                console.log(docSnap)
            }
        })
        

    }
    //For ADDİNG FRIEND <=}
    async acceptFriendRequest(requestNAME){

        requestUserID = getIDbyNAME(requestNAME);
        
        const ref_R = firestore().collection('users').doc(requestUserID); //ceviriii
        const ref_U = firestore().collection('users').doc(auth().currentUser.uid);
        
        await ref_U.collection('friendRequests').doc(requestNAME).delete();
        await ref_U.collection('friends').doc(requestNAME).set({})
        await ref_R.collection('friends').doc(auth().currentUser.displayName).set({})
                    
          
    }

    async cancelFriendRequest(requestNAME){
        const ref_U = firestore().collection('users').doc(auth().currentUser.uid);
        await ref_U.collection('friendRequests').doc(requestNAME).delete();
    }

}

export default new funcFire();