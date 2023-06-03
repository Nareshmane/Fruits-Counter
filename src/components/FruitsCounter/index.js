
import {Component} from 'react'
import "./index.css"
class FruitCounter extends Component{
    state={
        mangoesCount:0,
        bananasCount:0
    }
    onClickEatBanana=()=>{
        this.setState(prevState =>({bananasCount:prevState.bananasCount+1}))
    }
    onClickEatMango=()=>{
        this.setState(prevState =>({mangoesCount:prevState.mangoesCount+1}))
render(){
    const {mangoesCount,bananasCount}=this.state
    return{
        <div className="fruits-counter-container">
            <div className="fruits-container">
                <h1 className="count-text">
                    Bob ate <span className="count">{mangoesCount}</span> mangoes
                    <span className="count">{bananasCount}</span> bananas
                </h1>
                <div className="counters-control-container">
                    <div className="counter-control">
                        <img src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                        alt="mangoes"
                        className="fruit-image"/>
                        <div className="button-container">
                            <button type="button" onclick={this.onClickEatMango}>Eat Mango</button>
                        </div>
                    </div>


                    <div className="counter-control">
                        <img src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                        alt="banana"
                        className="fruit-image"/>
                        <div className="button-container">
                            <button type="button" onclick={this.onClickEatBanana}>Eat Banana</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    }
}
}

export default FruitCounter











