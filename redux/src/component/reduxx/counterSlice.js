import { createSlice} from "@reduxjs/toolkit"
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
      value: 0,
      loanData:false,
      isActive:false,
      paidLoan:0,
      
    },
    reducers: {
     open: state => {
        
        state.value += 100;
        state.isActive=true;
      },
      deposit: state => {
        state.value += 150;

      },
      withdraw: state =>{
        if(state.value==0) return
        state.value -= 50
      },
      loan: state =>{
        state.value += 5000;
        state.loanData = true;
      },
      pay:state=>{
        if(state.loanData==true && state.value>0){
          state.value -= (10/100)*5000
          state.paidLoan +=(10/100)*5000
          if(state.paidLoan==5000){
            state.loanData = false
            state.paidLoan= 0
          }
          else{
            state.loanData=true
          }
        }
        if(state.value<=0){
          alert('canoot pay')
        }
       
      },
      close: state =>{
        state.isActive=false;
        (state.isActive)?state.value = 0:""; 
      }
    }
  })
  export const{ open,
    deposit,withdraw,loan,pay,close
  } =  counterSlice.actions;

  export default counterSlice.reducer