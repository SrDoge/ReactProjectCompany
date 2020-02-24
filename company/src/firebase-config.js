const Rebase = require ('re-base')
const firebase = require ('firebase')

const FirebaseConfig = {
    apiKey: "AIzaSyACfmLn4DTa4ABktfIfaeRRBZq4nVqYfPo",
    authDomain: "fimo-portfolio.firebaseapp.com",
    databaseURL: "https://fimo-portfolio.firebaseio.com",
    projectId: "fimo-portfolio",
    storageBucket: "fimo-portfolio.appspot.com",
    messagingSenderId: "629027504100",
    appId: "1:629027504100:web:a47b6f955ab064c3f311f1",
    measurementId: "G-V5L9QM2WJZ",
  }
  
  
  const app = firebase.initializeApp(FirebaseConfig)
  const config = Rebase.createClass(app.database())

  export const storage = app.storage()
  export const auth = app.auth()
  
  

  export default config
