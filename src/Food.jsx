function Food(){

    const food1= "apple";
    const food2= "apple";
    
    return(

        <ul>

            <li> Apple</li>
            <li> {food1}</li>
            <li> {food2.toUpperCase()}</li>
        </ul>

    );

}

export default Food