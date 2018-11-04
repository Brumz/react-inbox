import React from "react";
import "../App.css";

let Message = props => {
  return (
    <div
      className={props.message.read ? "row message read" : "row message unread"}
    >
      <div class="col-xs-1">
        <div class="row">
          <div class="col-xs-2">
            <input
              type="checkbox"
              onClick={() => props.messageSelected(props.message.id)}
              checked={
                typeof props.message.selected !== "undefined" &&
                props.message.selected === true
                  ? "checked"
                  : ""
              }
            />
          </div>
          <div
            class="col-xs-2"
            onClick={() => props.messageRead(props.message.id)}
          >
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
