import { useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
function Header() {
    useEffect(()=>{
        let btn = document.querySelector("#menu_btn")
        let isMenuOpened=false
        let menu = document.querySelector("#menu")
        btn.addEventListener("click", ()=>{
            if(isMenuOpened==false){
                menu.style.left="5%"
            }
            else{
                
                menu.style.left="-100%"
            }
            isMenuOpened = !isMenuOpened
        })
    })
    return (
        <>
            <header>
                <nav>
                    
                    <span id="menu_btn" class="material-symbols-outlined menu_btn">
                        menu
                    </span>
                    <label className="menu" id="menu">
                    <p className="logo_text">
                        soft point
                    </p>
                    
                    <div className="header_list">
                        <Link
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        ><p href="#feture" className="header_li">Feature</p></Link>
                        <Link
                            activeClass="active"
                            to="connector2"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        ><p className="header_li">Download</p></Link>
                        <Link
                            activeClass="active"
                            to="section4"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1200}
                        ><p className="header_li">Pricing</p></Link>
                    </div>
                    <div className="buttons">
                        <div className="login">Login</div>
                        <div className="sign_up">Sign Up</div>
                    </div>
                    </label>
                    <div className="menu_cont_big">
                    <p className="logo_text">
                        soft point
                    </p>
                    
                    <div className="header_list">
                        <Link
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        ><p href="#feture" className="header_li">Feature</p></Link>
                        <Link
                            activeClass="active"
                            to="connector2"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        ><p className="header_li">Download</p></Link>
                        <Link
                            activeClass="active"
                            to="section4"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1200}
                        ><p className="header_li">Pricing</p></Link>
                    </div>
                    <div className="buttons">
                        <div className="login">Login</div>
                        <div className="sign_up">Sign Up</div>
                    </div>
                    </div>
                </nav>
                <div className="introducing_cont">
                    <div className="header_left">
                        <p className="title">Develop Your Life With <span>One Step.</span></p>
                        <p className="header_description">Pushing the possibilities of the internet. Good for the last software. Make it A software night.</p>
                        <div className="email_box">
                            <input placeholder="enter your email" type="text" />
                            <div className="submit">
                                <div className="submit_text">send</div>
                            </div>

                        </div>
                        <div className="playStore_appStore_img_container">
                            <div className="appStore"></div>
                            <div className="gPlay"></div>
                        </div>

                    </div>





                    <div className="header_right">

                    </div>
                </div>
            </header>
            <div className="connector1">
                <div className="connector1_item"></div>
                <div className="connector1_item"></div>
                <div className="connector1_item"></div>
                <div className="connector1_item"></div>
            </div>
        </>
    );
}

export default Header;