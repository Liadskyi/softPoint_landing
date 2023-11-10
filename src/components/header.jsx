function Header() {
    return (
        <>
        <header>
            <nav>
                <p className="logo_text">
                    soft point
                </p>
                <div className="header_list">
                    <p className="header_li">Feature</p>
                    <p className="header_li">Download</p>
                    <p className="header_li">Pricing</p>
                </div>
                <div className="buttons">
                    <div className="login">Login</div>
                    <div className="sign_up">Sign Up</div>
                </div>
            </nav>
            <div className="introducing_cont">
                <div className="header_left">
                    <p className="title">Develop Your Life With <span>One Step.</span></p>
                    <p className="header_description">Pushing the possibilities of the internet. Good for the last software. Make it A software night.</p>
                    <div className="email_box">
                        <input placeholder="enter your email" type="text"/>
                        <div className="submit">
                            <p className="submit_text">send</p>
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