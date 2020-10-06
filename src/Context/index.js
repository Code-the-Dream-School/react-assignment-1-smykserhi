import React , {Component} from "react"

const GameContext = React.createContext()

export class Provider extends Component{
    state = {
        gameStarted : false,
        name_0 :"",
        name_X :"",
        board: ["z","z","z","z","z","z","z","z","z"],
        currentPlayer: "X",
        winer: "no"      
      }
      
      checkWiner = ()=>{
        const board = this.state.board  
        const currentPlayer = this.state.currentPlayer
        if( (board[0] === currentPlayer && board[1] === currentPlayer && board[2] === currentPlayer) ||
            (board[3] === currentPlayer && board[4] === currentPlayer && board[5] === currentPlayer) ||
            (board[6] === currentPlayer && board[7] === currentPlayer && board[8] === currentPlayer) ||
            (board[0] === currentPlayer && board[4] === currentPlayer && board[8] === currentPlayer) ||
            (board[6] === currentPlayer && board[4] === currentPlayer && board[2] === currentPlayer) ||
            (board[0] === currentPlayer && board[3] === currentPlayer && board[6] === currentPlayer) ||
            (board[1] === currentPlayer && board[4] === currentPlayer && board[7] === currentPlayer) ||
            (board[2] === currentPlayer && board[5] === currentPlayer && board[8] === currentPlayer)  
        ){
          this.setState(()=>{
            return{
              winer : this.state.currentPlayer
            }
          })
        }else {
          let counter = 0
          this.state.board.map(el =>{
            console.log(el)            
            if(el === "z" ){
              counter ++
            }
            
          })
          if (counter === 0){           
            this.setState(()=>{
              return{
                winer : "No"
              }
            })
          }
        }
      }
      startNewGame = ()=>{
        this.setState(()=>{
          return{
            gameStarted : false,
            board: ["z","z","z","z","z","z","z","z","z"],
            name_0 :"",
            name_X :"",
            winer: "no",
            currentPlayer: "X",
          }
        })
      }
      resetBoard = ()=>{
        this.setState(()=>{
          return{
            board: ["z","z","z","z","z","z","z","z","z"],
            winer: "no",
            currentPlayer: "X"
          }
        })
      }
      startGame =()=>{
        this.setState(prevState =>{
          return{
            gameStarted : !prevState.gameStarted
          }
        })
      }
      saveNames = (name_0, name_X)=>{
        this.setState(() =>{
          return{
            name_0,
            name_X
          }
        })
      }
      handelClick =(e) =>{
        let newboard = this.state.board  
        if(newboard[e.target.id] === "z"){
          newboard[e.target.id] = this.state.currentPlayer
          this.setState(()=>({
            board: newboard
          }))
          this.checkWiner()   
          if(this.state.currentPlayer === "X"){
            this.setState(()=>({
              currentPlayer : "O"
            }))
          }else {
            this.setState(()=>({
              currentPlayer : "X"
            }))
          }
        } 
      }
    render(){
        return(
            <GameContext.Provider value={{
                data:{
                    gameStarted : this.state.gameStarted,
                    board: this.state.board,
                    name_0 : this.state.name_0,
                    name_X : this.state.name_X,
                    winer: this.state.winer,
                    currentPlayer: this.state.currentPlayer,
                    history: this.props.history
                },
                actions:{
                    checkWiner: this.checkWiner,
                    startNewGame : this.startNewGame,
                    resetBoard : this.resetBoard,
                    startGame : this.startGame,
                    saveNames : this.saveNames,
                    handelClick: this.handelClick
                }
            }}>
                {this.props.children} {/*This alows all childrens get acceses  */}
            </GameContext.Provider>
        )
    }
}


export const Consumer = GameContext.Consumer;
