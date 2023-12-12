import { useEffect } from "react";

function Section4() {
    useEffect(() => {
        let range = document.querySelector("#range")
        let card1 = document.querySelector("#s4_card1")
        let card2 = document.querySelector("#s4_card2")
        let card3 = document.querySelector("#s4_card3")
        range.value = 499
        function one() {
            const myInterval1 = setInterval(() => {
                if (range.value <= 166) {
                    if (range.value >= 166) {
                        clearInterval(myInterval1)
                    }
                    else {
                        range.value++
                    }
                }
                else {
                    if (range.value <= 166) {
                        clearInterval(myInterval1)
                    }
                    else {
                        range.value--
                    }
                }
            },
                1)
        }
        function two() {
            const myInterval2 = setInterval(() => {
                if (range.value <= 499) {
                    if (range.value >= 499) {
                        clearInterval(myInterval2)
                    }
                    else {
                        range.value++
                    }
                }
                else {
                    if (range.value <= 499) {
                        clearInterval(myInterval2)
                    }
                    else {
                        range.value--
                    }
                }
            }, 1)
        }
        function three() {
            const myInterval3 = setInterval(() => {

                if (range.value <= 832) {
                    if (range.value >= 832) {
                        clearInterval(myInterval3)
                    }
                    else {
                        range.value++
                    }
                }
                else {
                    if (range.value <= 832) {
                        clearInterval(myInterval3)
                    }
                    else {
                        range.value--
                    }
                }
            }, 1)
        }
        range.addEventListener("change", (e) => {
            if (e.target.value < 333) {
                card1.classList.add("s4_card_act")
                card2.classList.remove("s4_card_act")
                card3.classList.remove("s4_card_act")
                one()
            }
            else if (e.target.value < 667) {
                card1.classList.remove("s4_card_act")
                card2.classList.add("s4_card_act")
                card3.classList.remove("s4_card_act")
                two()
            }
            else {
                card1.classList.remove("s4_card_act")
                card2.classList.remove("s4_card_act")
                card3.classList.add("s4_card_act")
                three()
            }
        })
        card1.addEventListener("click", (e) => {
            card1.classList.add("s4_card_act")
            card2.classList.remove("s4_card_act")
            card3.classList.remove("s4_card_act")
            one()
        })
        card2.addEventListener("click", (e) => {
            card1.classList.remove("s4_card_act")
            card2.classList.add("s4_card_act")
            card3.classList.remove("s4_card_act")
            two()
        })
        card3.addEventListener("click", (e) => {
            card1.classList.remove("s4_card_act")
            card2.classList.remove("s4_card_act")
            card3.classList.add("s4_card_act")
            three()
        })
        let swith = document.querySelector('#swith')    
        let click = 2
        swith.addEventListener("click",(e) => {
            if(click%2 == 0){
                console.log("da")
                document.querySelector("#s4_price2").innerText="$45"
                document.querySelector("#s4_price3").innerText="$75"
            }
            else{
                document.querySelector("#s4_price2").innerText="$130"
                document.querySelector("#s4_price3").innerText="$210" 
            }
            click ++
        })
       
    })
    return (
        <>
            <div className="section4">
                <p className="section4_title">Best Pricing Plan</p>
                <p className="section4_text">Empowering the Internet Generation. Driving the Communication Revolution. Technology at the speed of life. Empowered by Innovation.</p>
                <div className="section4_trigger_cont">
                    <p>Quarterly</p>
                    <label className="switch">
                        <input type="checkbox" id="swith" />
                        <span className="slider round"></span>
                    </label>
                    <p>Monthly</p>
                </div>
                <input type="range" min="1" max="1000" name="" id="range" className="section4_slider" />
                <div className="section4_card_cont">
                    <div className="section4_card" id="s4_card1">
                        <p className="section4_card_title">
                            BASIC PLAN
                        </p>
                        <p className="section4_card_price">$0</p>
                        <div className="section4_card_list">
                            <div className="section4_card_item">
                                <div>
                                    <div className="section4_card_item_ico"></div>
                                    <p>limited acess library</p>
                                </div>

                                <p>yes</p>
                            </div>
                            <div className="section4_card_item">
                                <div>
                                    <div className="section4_card_item_ico"></div>
                                    <p className="off">100+ HTML UI Elements</p>
                                </div>

                                <p>no</p>
                            </div>
                            <div className="section4_card_item">
                                <div>
                                    <div className="section4_card_item_ico"></div>
                                    <p className="off">Hotline Support 24/7</p>
                                </div>

                                <p>no</p>
                            </div>
                            <div className="section4_card_item">
                                <div>
                                    <div className="section4_card_item_ico"></div>
                                    <p className="off">API & extension support</p>
                                </div>

                                <p>no</p>
                            </div>

                        </div>
                        <div className="section4_card_btn_cont">
                            <label className="section4_card_btn">
                                Buy now
                            </label>
                        </div>
                    </div>
                    <div className="section4_card s4_card_act" id="s4_card2">
                        <p className="section4_card_title">
                            PREMIUM PLAN
                        </p>
                        <p className="section4_card_price" id="s4_price2">$130</p>

                        <div className="section4_card_list">
                            <div className="section4_card_item">
                                <div>
                                    <div className="section4_card_item_ico"></div>
                                    <p>limited acess library</p>
                                </div>

                                <p>yes</p>
                            </div>
                            <div className="section4_card_item">
                                <div>
                                    <div className="section4_card_item_ico"></div>
                                    <p>100+ HTML UI Elements</p>
                                </div>

                                <p>yes</p>
                            </div>
                            <div className="section4_card_item">
                                <div>
                                    <div className="section4_card_item_ico"></div>
                                    <p className="off">Hotline Support 24/7</p>
                                </div>

                                <p>No</p>
                            </div>
                            <div className="section4_card_item">
                                <div>
                                    <div className="section4_card_item_ico"></div>
                                    <p className="off">API & extension support</p>
                                </div>

                                <p>No</p>
                            </div>
                        </div>
                        <div className="section4_card_btn_cont">
                            <label className="section4_card_btn">
                                Buy now
                            </label>
                        </div>
                    </div>
                    <div className="section4_card" id="s4_card3">
                        <p className="section4_card_title" >
                            ULTIMATE PLAN
                        </p>
                        <p className="section4_card_price" id="s4_price3">$210</p>

                        <div className="section4_card_list">
                            <div className="section4_card_item">
                                <div>
                                    <div className="section4_card_item_ico"></div>
                                    <p>limited acess library</p>
                                </div>

                                <p>yes</p>
                            </div>
                            <div className="section4_card_item">
                                <div>
                                    <div className="section4_card_item_ico"></div>
                                    <p>100+ HTML UI Elements</p>
                                </div>

                                <p>yes</p>
                            </div>
                            <div className="section4_card_item">
                                <div>
                                    <div className="section4_card_item_ico"></div>
                                    <p>Hotline Support 24/7</p>
                                </div>

                                <p>yes</p>
                            </div>
                            <div className="section4_card_item">
                                <div>
                                    <div className="section4_card_item_ico"></div>
                                    <p>API & extension support</p>
                                </div>

                                <p>yes</p>
                            </div>

                        </div>
                        <div className="section4_card_btn_cont">
                            <label className="section4_card_btn">
                                Buy now
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section4;