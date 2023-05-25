import React from "react";

const Coupon = ({ TotalCouponBalance ,TransferCouponFund ,NetCouponBalance,TotalAddFund,TotalRecieveFund,mintCouponFund,AdminDeductFund }) => {
  console.log("Admin1",AdminDeductFund)
  return (
    <>
    <div className="LADChatWidgetMain rcr1">
     <div className="LADChatText">
          <div className="">
            <h6>Coupon Balance  {" "} {NetCouponBalance}</h6>
          </div>
          <div className="row added">
          <div className="col-5">
          {/* <div className="LADChatText_total">
            <span>Total : {TotalCouponBalance}</span>
          </div> */}
            <div className="LADChatText_total">
            <span> Added  : {TotalAddFund}</span>
          </div>
          
          <div className="LADChatText_total">
            <span> Recieveed  : {TotalRecieveFund}</span>
          </div>
          {/* <div className="LADChatText_total">
            <span>Net : {NetCouponBalance}</span>
         
          </div> */}
        
          </div>
          <div className="col-7">
          
          <div className="LADChatText_total">
            <span>Transfered : {TransferCouponFund}</span>
          
          </div>
          <div className="LADChatText_total">
            <span>Minted  : {mintCouponFund}</span>
          </div>
          {/* <div className="LADChatText_total">
            <span>Admin Deduct   : {AdminDeductFund}</span>
          </div> */}
</div>
          </div>
        </div>
        </div>
    </>
  );
};

export default Coupon;
