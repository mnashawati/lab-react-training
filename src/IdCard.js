import React from 'react';
import './idCard.css';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="id-card">
      <img className="picture" src={picture} alt={firstName + "'s picture"} />
      <div className="info">
        <p>
          <b>First Name: </b>
          {firstName}
        </p>
        <p>
          <b>Last Name: </b>
          {lastName}
        </p>
        <p>
          <b>Gender: </b>
          {gender}
        </p>
        <p>
          <b>Height: </b>
          {height}
        </p>
        <p>
          <b>Birth: </b>
          {console.log('birth', birth)}
          {birth
            .toString()
            .replace('01:00:00 GMT+0100 (British Summer Time)', '')}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
