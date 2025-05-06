import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { open,deposit,withdraw,loan,pay,close } from "./component/reduxx/counterSlice";
const Product = ()=>{
    const money = useSelector((state)=>state);
    const dispatchCount = useDispatch();
    return(<>
 <h1>this is Product</h1>
 <p>count:{money.value}</p>
 <button onClick={()=>dispatchCount(open()) } disabled={money.isActive==true ||money.value==true} >open-10</button>
 <button onClick={()=>dispatchCount(deposit())} disabled={money.isActive==false} >deposit-150</button>
 <button onClick={()=>dispatchCount(withdraw())} disabled={money.value==-500 ||money.isActive==false } >withdraw-50</button>
 <button onClick={()=>dispatchCount(loan())} disabled={money.loanData==true ||money.isActive==false}>loan-5000</button>
 <button onClick={()=>dispatchCount(pay())} disabled={money.loanData==false ||money.isActive==false} >pay-5000</button>
 <button onClick={()=>dispatchCount(close())} disabled={money.isActive==false || money.value!=0} >close</button>
 </>
    )
}
export default Product