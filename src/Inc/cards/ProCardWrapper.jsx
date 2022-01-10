import styled from "styled-components";

export const ProCardWrapper = styled.div`
  padding: 0 15px;
  box-sizing: border-box;
  width: 50%;
  margin-bottom: 30px;
  @media (min-width: 992px){
    width: 25%;
  }
  @media(max-width: 991px) and (min-width: 768px){
    width: 33%;
  }
  .twoCol {
    box-sizing: box-border;
    padding: 20px;
    box-shadow: 0 0 20px #ccc;
    border-radius: 8px;
  }
  .details {
    margin-bottom:10px; 
    display: flex;
    justify-content: space-between;
    .prices {
      color: green;
      font-size: 14px;
      font-weight: 600;
    }
    svg {
      font-size: 20px;
      color: gray;
      cursor: pointer;
      &:hover {
        color: #db4332;
      }
    }
  }
  .spcefication {
      margin-bottom:15px;
  }
  .action {
    display: flex;
    button {
      width: 50%;
      &:first-child:not(:only-child) {
        margin-right: 5px;
      }
      &:last-child:not(:only-child) {
        margin-left: 5px;
      }
    }
  }
  .innerCards {
    img {
      width: 100%;
      margin-bottom:10px;
      object-fit:cover;
    }
  }
  @media (max-width: 479px){
    width: 100%;
    .action {
        flex-wrap: wrap;
        button{
            width: 100%;
            &:first-child:not(:only-child) {
                margin-right: 0px;
            }
            &:last-child:not(:only-child) {
                margin-left: 0px;
            }
            &:not(:last-child){
                margin-bottom: 8px;
            }
        }
    }
  }
`;