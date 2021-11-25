import React from "react";

export default function Photos(props) {
  if (props.photo) {
    return (
      <section className="Photos">
        Hello
        <div className="row">
          {props.photo.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img src={photo.src.tiny} className="img-fluid" alt="sun" />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
