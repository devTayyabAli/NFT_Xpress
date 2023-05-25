import React from "react";

const Coupon_Add = ({ TotalAddFund ,TotalRecieveFund,mintCouponFund,AdminDeductFund  }) => {
  return (
    <>
    <div className="LADChatWidgetMain">
     <div className="LADChatText">
          <div className="">
            <h6>Coupon Fund</h6>
          </div>
          <div className="LADChatText_total">
            <span> Add  : {TotalAddFund}</span>
          </div>
          <div className="LADChatText_total">
            <span> Recieve  : {TotalRecieveFund}</span>
          </div>
          <div className="LADChatText_total">
            <span>Mint   : {mintCouponFund}</span>
          </div>
          {/* <div className="LADChatText_total">
            <span>Admin Deduct   : {AdminDeductFund}</span>
          </div> */}
        </div>
        </div>
    </>
  );
};

export default Coupon_Add;
