import React, {Component} from 'react'

import firebase from 'firebase'

export default class App extends Component{

  constructor(props){

    super(props)

    this.app=firebase.initializeApp({
      apiKey: "AIzaSyAdKa29CrGJNUeH6UbzMVGET55JjfJkq4A",
      authDomain: "formysquad-hassan.firebaseapp.com",
      databaseURL: "https://formysquad-hassan.firebaseio.com",
      projectId: "formysquad-hassan",
      storageBucket: "formysquad-hassan.appspot.com",
      messagingSenderId: "894338771471",
      appId: "1:894338771471:web:04b14de017ecce4293117a",
      measurementId: "G-K74NZQYFEY"
    })

    this.database = this.app.database().ref().child('LED')

    this.state={

      LED: false
    }
  }

  componentDidMount(){


    this.database.on('value',snap=>{

      this.setState({
        LED:snap.val()
      })
    })
  }

  render(){

    return(

        <div>
{/* <img src={require('./red.jpg')} width='60' height='60'></img>
<img src={require('./green.jpg')} width='60' height='60'></img> */}

      <DisplayLED LED={this.state.LED}/>

        </div>
    )
  }
}

function DisplayLED(props){

  console.log(props.LED)

  var image = props.LED ? <img src={require('./green.jpg')} width='320' height='320'></img> : <img src={require('./red.jpg')} width='320' height='320'></img>

  return (
    <div>

{image}

    </div>
  )

  
}