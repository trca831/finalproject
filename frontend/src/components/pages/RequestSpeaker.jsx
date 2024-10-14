import React, {useEffect} from "react";


function RequestSpeaker() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <>
        <div className="black-strip"></div>
        <section className="speaker p-5"><div></div></section>
       
        </>
    )
};

export default RequestSpeaker;