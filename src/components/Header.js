import React from "react";

function Header(){
  const headerStyles = {
    backgroundColor: '#6495ED',
    color: 'white',
    padding: '50px',
    fontSize: '24px',
    marginTop: '0px',
    textAlign: 'center'
  }
  return (
    <h1 style={headerStyles}>Tap Bar</h1>
  );
}

export default Header;