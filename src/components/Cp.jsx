import React from "react";
import MultiActionAreaCard from "./Cpcard";
function Cp() {
    return (
        <section id="blog">
            <div className="container flex">
                <div className="header waypoint" data-animation="slide-in-left">COMPETITIVE-PROGRAMMING</div>
                <div className="header-bar waypoint" data-animation="slide-in-left" data-delay=".5s" style={{marginBottom: "40px"}}></div>
                <div className="header" data-animation="slide-in-left" style={{marginBottom: "60px"}}>PROFILES</div>

            </div>
            <div className="row" style={{ width: "100%", alignContent: "center" }}>
                    <div className="col" style={{ width: "100%", paddingLeft: "12%", paddingRight: "1.5%" }}>
                        <MultiActionAreaCard imgSrc="https://codeforces.org/s/0/images/codeforces-telegram-square.png" title="Codeforces" source="https://codeforces.com/profile/CosAlpha" />
                    </div>
                    <div className="col" style={{ width: "100%", paddingRight: "1.5%" }}>
                        <MultiActionAreaCard imgSrc="https://static.startuptalky.com/2021/04/codechef-logo-startuptalky.jpg" title="Codechef" source="https://www.codechef.com/users/deep_0926" />
                    </div>
                    <div className="col" style={{ width: "100%", paddingRight: "1.5%" }}>
                        <MultiActionAreaCard imgSrc="https://res.cloudinary.com/practicaldev/image/fetch/s--kUEOA4be--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/8r9jdj2n3fg87raqdnsk.png" title="Atcoder"  source="https://atcoder.jp/users/costheta" />
                    </div>
                    <div className="col" style={{ width: "100%", paddingRight: "10%" }}>
                        <MultiActionAreaCard imgSrc="https://leetcode.com/static/images/LeetCode_Sharing.png" title="Leetcode" source="https://leetcode.com/costheta/" />
                    </div>
                </div>
        </section>

    )
}

export default Cp;