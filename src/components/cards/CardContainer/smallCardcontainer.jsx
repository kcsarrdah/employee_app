import React from 'react'

const smallCardContainer = (props) => {
    return (
        <div className="smallCardcontainer container">
            <div class="flex flex-col items-start justify-center p-4 mx-auto sm:p-10">
                <div class="flex flex-row flex-wrap justify-start mt-4">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default smallCardContainer;


