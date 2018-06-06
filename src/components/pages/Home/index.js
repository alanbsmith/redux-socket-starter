import React from 'react';

import Option from 'containers/Option';

import './Home.scss';

function Home() {
  return (
    <div className="home">
      <Option name="burger" />
      <Option name="pizza" />
      <Option name="taco" />
    </div>
  );
}

export default Home;
