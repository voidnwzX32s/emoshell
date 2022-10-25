import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Midside from '../home/midsite/midside';
function home() {
  return (
    <>
    <Sidebar/>
    <div style={{paddingLeft:"5rem"}}>
    <Midside/>
    </div>
    </>
    
  );
}

export default home;
