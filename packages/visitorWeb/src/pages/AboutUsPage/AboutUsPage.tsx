import React, { useEffect } from "react";
import styles from "./AboutUsPage.module.scss";
import Header from "@src/components/Header/Header";
import josi from "@src/assets/profile/josi.png";
import gylian from "@src/assets/profile/gylian.png";
import mark from "@src/assets/profile/mark.png";
import ramon from "@src/assets/profile/ramon.png";
import renan from "@src/assets/profile/renan.png";
import alban from "@src/assets/profile/alban.png";

const teamMembers = [
    {
      id: 1,
      photo: josi,
      description: 'Description for team member 1',
    },
    {
      id: 2,
      photo: gylian,
      description: 'Description for team member 2',
    },
    {
        id: 3,
        photo: mark,
        description: 'Description for team member 3',
      },
      {
        id: 4,
        photo: ramon,
        description: 'Description for team member 4',
      },
      {
        id: 5,
        photo: alban,
        description: 'Description for team member 5',
      },
      {
        id: 6,
        photo: renan,
        description: 'Description for team member 6',
      },
  ];

const AboutUsPage = () => {
    return (
        <div>
            <Header />
            <div className={styles.aboutuscontainer}>
                <div className={styles.aboutussection}>
                    <h2>About Us</h2>
                    <div className={styles.logocontainer}>
                    <div className={styles.logo}></div>
                    <p>Short description about your company...</p>
                    </div>
                </div>

                <div className={styles.teamsection}>
                    <h2>The Team</h2>
                    <div className={styles.teammembers}>
                        {teamMembers.map((member) => (
                            <div key={member.id} className={styles.teammember}>
                            <div
                                className={styles.memberphoto}
                                style={{ backgroundImage: `url(${member.photo})` }}
                            > 
                                <p className={styles.memberdescription}>{member.description}</p>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;