import React from "react";

function FreeTimeSection() {
    return (
        <div className="freetime-section">
            <div className="freetime-text">
                <h1>What I Enjoy in my Free Time</h1>
                <h2>Associations</h2>
            </div>

            <div className="assoc-image">
                <div className="freetime-item">
                    <img src="images/bell206.jpg" alt="bell206" />
                    <h3>Flygvapenmuseum Helikopter</h3>
                    <p>Myself infront of the Agusta-Bell 206 JetRager in the care of FVMH, a non-profit association in Sweden.</p>
                </div>
                <div className="freetime-item">
                    <img src="images/lineup.jpg" alt="lineup" />
                    <h3>Flygvapenmuseum Helikopter</h3>
                    <p>Two of the helicopters in our (FVMH) care, both Hughes 269C/Schweizer 300.</p>
                </div>
                <div className="freetime-item">
                    <img src="images/cobra.jpg" alt="cobra" />
                    <h3>American Aviation Heritage Foundation</h3>
                    <p>A US Cobra AH-1 in the care of AAHF, a non-profit association in the United States.</p>
                </div>
            </div>

            <div className="freetime-text">
                <p>This is primarily what I do that is aviation related. I am much more of an active member in FVMH
                    due to the fact that it is based in Sweden. I take more of a supportive role in AAHF. My roles in
                    FVMH is to look the part as we are striving to preserve Swedish military avaiation history, and
                    to do my part in keeping the helicopters safe to fly by performing preflight checks, among other
                    things. I am also taking my PPL.</p>
                <h2>Sports</h2>
            </div>

            <div className="sport-image">
                <div className="freetime-item">
                    <img src="images/selfie.jpg" alt="selfie" />
                    <h3>Myself Playing for Västerås Roedeers</h3>
                    <p>I was ecstatic after scoring my first touchdown.</p>
                </div>
                <div className="freetime-item">
                    <img src="images/team.jpg" alt="team" />
                    <h3>Västerås Team Photo</h3>
                    <p>We had several
                        injuries so we went to this away game in Gothenburg with very few players. It was an
                        uphill battle but we pulled through with a dominant win by working together and playing
                        for the person next to us.</p>
                </div>
            </div>

            <div className="freetime-text">
                <p>I have always enjoyed team sports, I have played football and basketball in the past, now I am
                    playing American football for Uppsala 86ers, though I spent my first season in Gävle Red Devils. I
                    was on loan to Västerås Roedeers during the fall of 2024. I enjoy these team sports as it allows for
                    a high level of teamwork in a different sense than getting tasks done in the context of a job or
                    project, while still focusing on the same core concepts; working together as a team to get the job
                    done. I also really enjoy the sense of brotherhood that stems from team sports where everyone takes
                    care of and encourages one another.
                </p>
            </div>
        </div>
    );
}

export default FreeTimeSection;
