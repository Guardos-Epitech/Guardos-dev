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
      description: '4th year Epitech student from Germany',
    },
    {
      id: 2,
      photo: gylian,
      description: '4th year Epitech student from Germany',
    },
    {
        id: 3,
        photo: mark,
        description: '4th year Epitech student from Germany',
      },
      {
        id: 4,
        photo: ramon,
        description: '4th year Epitech student from Germany',
      },
      {
        id: 5,
        photo: alban,
        description: '4th year Epitech student from France',
      },
      {
        id: 6,
        photo: renan,
        description: '4th year Epitech student from France',
      },
  ];

  const description = `Guardos is your trusted companion in the world of dining, 
  specially crafted for individuals with food intolerances and specific culinary preferences. 
  Our innovative platform empowers you to effortlessly discover restaurants in your vicinity 
  that cater to your unique dietary needs. 
  Whether you're gluten-free, vegan, or have other dietary restrictions, 
  Guardos ensures that your dining experience is tailored to your tastes. 
  Say goodbye to the hassle of searching for suitable options – with Guardos, 
  finding the perfect restaurant that aligns with your preferences is just a click away. 
  Enjoy a seamless and delightful dining experience with Guardos, 
  where your food choices are always respected and celebrated.`;

  const teamdescription = `Our journey began during our time as students, 
  brought together by a shared passion for making a positive impact. 
  What unites us is not only our academic pursuits but a common understanding 
  of the challenges posed by food intolerances. 
  Whether personally affected or witnessing the struggles of friends and family, we recognized the need for change.
  Driven by empathy and a desire to contribute, we formed a team committed to making a difference in the lives of 
  those dealing with food intolerances. 
  Our diverse backgrounds and skills converge with a singular purpose — to create solutions that enhance the quality of life 
  for individuals affected by dietary restrictions. 
  Together, we embark on a journey to empower and support our community, one innovative idea at a time.`;

const AboutUsPage = () => {
    return (
        <div>
            <Header />
            <div className={styles.aboutuscontainer}>
                <div className={styles.aboutussection}>
                    <h2>About Us</h2>
                    <div className={styles.logocontainer}>
                    <div className={styles.logo}></div>
                    <p>{description}</p>
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
                    <div className={styles.teamdescription}>
                      <p>{teamdescription}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;