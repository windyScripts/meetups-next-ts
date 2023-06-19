import React from "react";

import MainHeader from "./main-header";

function Layout(props:{children: React.ReactElement| React.ReactElement}) {
    return (
      <>
        <MainHeader />
        <main>{props.children}</main>
      </>
    );
  }

  export default Layout;