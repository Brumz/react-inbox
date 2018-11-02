import React from "react";
import "../App.css";

let Message = props => {
  return (
    <div class="row message unread">
      <div class="col-xs-1">
        <div class="row">
          <div class="col-xs-2">
            <input type="checkbox" />
          </div>
          <div class="col-xs-2">
            <i class="star fa fa-star-o" />
          </div>
        </div>
      </div>
      <div class="col-xs-11">
        <a href="#">{props.message.subject}</a>
      </div>
    </div>
  );
};

export default Message;
