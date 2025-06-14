import * as React from 'react';
import { Waypoint } from 'react-waypoint';
import { StaticImage } from 'gatsby-plugin-image';

const TeamSection = ({lineAnimation, useWndowWidth}) => {
    return (
        <div id="team" className="team-profiles">
            <div className="container">
                <Waypoint onEnter={() => lineAnimation("lineHorizontal", "lineVertical", "line-animation-l", "line-animation-r")} onLeave={() => lineAnimation("lineHorizontal", "lineVertical", "line-animation-l", "line-animation-r")} bottomOffset={useWndowWidth() > 767.20 ? 80 : 0}>
                    <div className="row mb-5">
                        <div className="col-md-3">
                            <div className="profile-first">
                                <StaticImage src="../images/James_Hill_img.png" alt="James Hill - Osiris Resources" />
                                <span id="lineHorizontal" className="accent-line line-horizontal"></span>
                                <span id="lineVertical" className="accent-line line-vertical"></span>
                            </div>
                        </div>
                        <div className="col-md-9 profile-text">
                            <div className="profile-text-container">
                                <h5>James Hill</h5>
                                <h6 className="mb-5">Director</h6>
                                <p>Osiris Resources was started by James who recognised the need for an expert consultancy in a growingly saturated and niche market. James has worked directly for SME’s and large corporations delivering talent solutions for the Telco market and also has experience delivering business operations and running enterprise sales programmes.</p>
                                <p>He is passionate about maintaining and building further an already existing ecosystem in the Telecoms and Computer Networking industry.</p>
                            </div>
                        </div>
                    </div>
                </Waypoint>
                <Waypoint onEnter={() => lineAnimation("lineLeft", "lineRight", "line-animation-l", "line-animation-r")} onLeave={() => lineAnimation("lineLeft", "lineRight", "line-animation-l", "line-animation-r")} bottomOffset={useWndowWidth() > 767.20 ? 150 : 0}>
                    <div className="row mt-5 mb-5">
                        <div className="col-md-3 order-md-2">
                            <div className="profile-middle">
                                {/* <StaticImage src="../images/_img.png" alt="- Osiris Resources" /> */}
                                <span id="lineLeft" className="accent-line line-left"></span>
                                <span id="lineRight" className="accent-line line-right"></span>
                            </div>
                        </div>
                        <div className="col-md-9 order-md-1 profile-text">
                            <div className="profile-text-container">
                                <h5>Paul Leszczynski</h5>
                                <h6 className="mb-5">Talent Sourcer</h6>
                                <p>Paul has worked with Osiris Resources for nearly two years sourcing talents on all projects that we have. He has built up an excellent specific network globally amongst all the top companies in the sectors that we are in.</p>
                                <p>A family man Paul's work ethic is second to none and when not talent sourcing he also can take laptops apart and put them back together along with car engines.</p>
                            </div>
                        </div>
                    </div>
                </Waypoint>
                <Waypoint onEnter={() => lineAnimation("lineHorizontalLast", "lineVerticalLast", "line-animation-r", "line-animation-l")} onLeave={() => lineAnimation("lineHorizontalLast", "lineVerticalLast", "line-animation-r", "line-animation-l")} bottomOffset={useWndowWidth() > 767.20 ? 150 : 0}>
                    <div className="row mt-5">
                        <div className="col-md-3">
                            <div className="profile-last">
                                <StaticImage src="../images/Nick_Randall_img.png" alt="Nick Randall - Osiris Resources" />
                                <span id="lineHorizontalLast" className="accent-line line-horizontal-last"></span>
                                <span id="lineVerticalLast" className="accent-line line-vertical-last"></span>
                            </div>
                        </div>
                        <div className="col-md-9 profile-text">
                            <div className="profile-text-container">
                                <h5>Nick Randall</h5>
                                <h6 className="mb-5">Non Exec Director</h6>
                                <p>Nick advises Osiris Resources, helping us with mentoring, coaching and general business management. He is CEO of NetMinded, a Bristol-based Networking start-up. Osiris Resources enjoys working with innovative companies such as NetMinded.</p>
                                <p>Our passion is supporting and championing the general Telco / Networking ecosystem. It is this passion and experience that makes us different. </p>
                            </div>
                        </div>
                    </div>
                </Waypoint>
            </div>
        </div>
    )
}

export default TeamSection;
