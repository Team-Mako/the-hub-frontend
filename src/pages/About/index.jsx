import React, { Component } from 'react';
import { FaLinkedin, FaGithub, FaBehance } from 'react-icons/fa';
import CallToAction from '../../components/CallToAction';
import api from '../../services/api';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      members: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('team-member');
    this.setState({ members: response.data });
  }

  render() {
    const { members } = this.state;

    function showBio(bio, id) {
      document.querySelector('.about__bio').innerHTML = `<p>${bio}</p>`;
      document.querySelector('.about__bio').style.opacity = 1;
      // Change name color to accent color
      document.querySelector(`.about__memberTile:nth-child(${id})>h3`).style.color = '#0b7a75';
    }

    function hideBio(id) {
      document.querySelector('.about__bio').innerHTML = '';
      document.querySelector('.about__bio').style.opacity = 0;
      // Change name color back to original color
      document.querySelector(`.about__memberTile:nth-child(${id})>h3`).style.color = 'black';
    }

    return (
      <>
        <main className="about">

          <div className="about__innerDiv">

            <div className="about__leftDiv">
              <span>
                <h1>Meet the Team</h1>
                <p>The hub is brought to you by the 8 creative designers + passionate developers in Vancouver. </p>
              </span>
            </div>

            <div className="about__membersDiv">

              {members.map((member) => (
                <div key={member.id} to="/" className="about__memberTile">

                  <img src={require(`../../assets/uploads/${member.facePic}`)} alt="" onMouseOver={() => showBio(member.bio, member.id)} onFocus={() => showBio(member.bio, member.id)} onMouseOut={() => hideBio(member.id)} onBlur={() => hideBio(member.id)} />

                  <h3>{member.fullName}</h3>

                  <p>{member.title}</p>

                  <span>
                    <a href={member.linkedIn} aria-label="Link to linkedIn"><FaLinkedin /></a>

                    { member.behance ? <a href={member.behance} aria-label="Link to behance"><FaBehance /></a> : <a href={member.github} aria-label="Link to github"><FaGithub /></a>}
                  </span>
                </div>
              ))}

              {/* Logo tile (Where bio shows up) */}
              <div className="about__logo">
                <div className="about__bio" />
              </div>

            </div>

          </div>

        </main>

        <CallToAction />
      </>
    );
  }
}

export default About;
