import React from "react";

const Container = (props) => {
  const { id ,children} = props;
  return (
    <section id={id ? id : ""} className={`max-w-[1250px] relative overflow-hidden  w-full  mx-auto  px-8 md:px-12  py-4  `}>
        {children}
    </section>
  );
};

export default Container;
