import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faBars,faUser, faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const Nav = () => {
    const [size, setSize] = useState(false);
    useEffect(() => {
        if(window.screen.width < 480 ){
            setSize(true);
        }else{
            setSize(false);
        }
    }, [size])
    return (
        <Wrapper>
            <ul>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faHome} />
                        {size === false ? <span>Home</span> : ''}
                    </Link>
                </li>
                <li>
                    <Link to="/myaccount">
                        <FontAwesomeIcon icon={faUser} />
                        {size === false ? <span>Account</span> : ''}
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                        <FontAwesomeIcon icon={faCartArrowDown} />
                        {size === false ? <span>Cart</span> : ''}
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faBars} />
                        {size === false ?  <span>Menu</span> : ''}
                    </Link>
                </li>
            </ul>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    @media (min-width: 768px){
        ul{
            display: flex;
            justify-content: space-between;
            padding: 10px 15px;
            li{
                list-style: none;
                svg{
                    display:none;
                }
                &:not(:last-child){
                    margin-right: 25px;
                }
                a{
                    text-transform: uppercase;
                    text-decoration: none;
                    color: #524696;
                    font-weight: 600;

                }
            }
        }
    }
    @media (max-width: 767px){
        position: fixed;
        bottom: 0;
        background: rgb(2,0,36);
        background: linear-gradient(225deg, rgba(2,0,36,1) 0%, rgba(65,65,154,1) 49%, rgba(76,36,135,1) 87%);
        width: 100%;
        left: 0;
        ul{
            display: flex;
            justify-content: space-between;
            padding: 10px 15px;
            li{
                list-style: none;
                a{
                    padding:2px 15px;
                    color: #fff;
                    border-radius: 35px;
                    display: inline-block;
                    text-align:center;
                    text-decoration: none;
                    svg{
                        font-size:20px;
                    }
                    span{
                        display :block;
                        font-size:14px;
                    }
                }
            }   
        }
    }
`;