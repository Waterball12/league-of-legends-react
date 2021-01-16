import React, {Component} from 'react';
import {MDBCol, MDBMask, MDBRow, MDBView} from "mdbreact";

class Home extends Component {
    render() {
        return (
            <div className="my-5 px-5 pb-5">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
            League of Legends
            </h2>
            <div className="mb-5" />
            <MDBRow>
            <MDBCol lg="5">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <img
                    className="img-fluid  w-100 h-100"
                    src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/LolGameInfo-Harbinger/en_US/d576d7c13d8e442ab8a53032afaec526287b076f/assets/assets/images/gi-modes-sr-the-battle-for-the-rift.jpg"
                    alt=""
                />
                <a href="#!">
                    <MDBMask overlay="white-slight" />
                </a>
                </MDBView>
            </MDBCol>
            <MDBCol lg="7">
                <h3 className="font-weight-bold mb-3 p-0">
                    <strong>The Battle for the Rift</strong>
                </h3>
                    <p>
                        The largest map in League of Legends, Summoner's Rift is mirrored diagonally and
                        features three lanes into the enemy base. Each lane is 
                        defended by three turrets and an inhibitor, while the nexus is protected by a 
                        pair of turrets. Both sides of the map boast expansive jungles containing powerful buffs, and
                        the central river is home to two boss monsters and a scuttle crab that provide team-wide benefits.
                    </p>
            </MDBCol>
            </MDBRow>
            <hr className="my-5" />
            <MDBRow>
            <MDBCol lg="7">
                <h3 className="font-weight-bold mb-3 p-0">
                <strong>The Battle for the Shadow Isles</strong>
                </h3>
                <p>
                    A smaller map than Summoner’s Rift, the Twisted Treeline is configured horizontally,
                    with two lanes flanking a neutral area. Two turrets are placed along
                    the length of each lane, and the nexus is defended by a single turret. 
                    Teams are composed of three champions apiece, and each champion spawns with a substantial sum of gold.
                    The reduced map size and accelerated level curve makes for a shorter game length and higher kill scores.
                </p>
            </MDBCol>
            <MDBCol lg="5">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <img
                    className="img-fluid  w-100 h-100"
                    src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/LolGameInfo-Harbinger/en_US/d576d7c13d8e442ab8a53032afaec526287b076f/assets/assets/images/modes-tt.jpg"
                    alt=""
                />
                <a href="#!">
                    <MDBMask overlay="white-slight" />
                </a>
                </MDBView>
            </MDBCol>
            </MDBRow>
            <hr className="my-5" />
            <MDBRow>
            <MDBCol lg="5">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <img
                    className="img-fluid w-100 h-100"
                    src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/LolGameInfo-Harbinger/en_US/d576d7c13d8e442ab8a53032afaec526287b076f/assets/assets/images/modes-ha.jpg"
                    alt=""
                />
                <a href="#!">
                    <MDBMask overlay="white-slight" />
                </a>
                </MDBView>
            </MDBCol>
            <MDBCol lg="7">
                <h3 className="font-weight-bold mb-3 p-0">
                <strong>The Battle for the Abyss</strong>
                </h3>
                <p>
                    The only single-lane battlefield available in League of Legends, 
                    the Howling Abyss features two bases arranged at either end of a bridge. 
                    This bridge is defended by two turrets and an inhibitor, while the nexus is protected by
                    a pair of turrets. With no neutral territory to distract from the task at hand, the Howling
                    Abyss features some of the most frequent and intense team fights of any map.
                </p>
            </MDBCol>
            </MDBRow>
        </div>
        );
    }
}

export default Home;
