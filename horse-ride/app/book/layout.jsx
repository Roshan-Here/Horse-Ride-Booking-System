import React from 'react';

export const metadata = {
  title: "Book Horse Riding Holiday",
  description: "A simple web app to Book horse rides",
  icons: {
    icon: "LogoForWeb.png",
    shortcut: "LogoForWeb.png",
  },
};

function layout({children}) {
  return (
    <>
      {children}
    </>
  )
}

export default layout