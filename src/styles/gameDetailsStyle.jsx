
.details-container{
   
    display: flex;
    width: 800px;
    height: 400px;
    background: linear-gradient(to right, rgba(117, 5, 134, 0.223), rgb(116, 5, 134));
    backdrop-filter: blur(10px);
    border-radius: 1rem;
  
}

.left-details{
    z-index: 3;
    position: relative;
    height: 100%;
    width: 50%;
    
}
.under-tape{
    position: absolute;
    left: 35%;
    width: 150px;
    height: 100%;
    background-color: #9f55d4;
}
.details-image{
    position: absolute;
    left: 20%;
    top: 50%;
    transform: translateY(-50%);
    
    width: 260px;
    height: 260px;
    border-radius: 50%;

   
}
.details-image img{
 
position: absolute;
  top: 50%;
  transform: translateY(-50%);
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: solid wheat ;
}

.right-details{
    position: relative;
    height: 100%;
    width: 50%;
    padding-right: 20px;
}
.right-details h1{
    margin-bottom: 5px;
    font-weight: 600;
    color: white;
    font-size: 2rem;

}
.right-details h1 span{
    color: rgb(0, 162, 255);
    font-size: 1.3rem;
}


@media screen and (max-width: 768px) {
    .details-container{
        flex-direction: column;
        width: 400px;
        height: 800px;
        padding: 0 10px;
    }
    .left-details{
        width: 100%;
        height: 50%;

    }
    
 
    
}



