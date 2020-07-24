import React from 'react';
import { FaLinkedin, FaGithub, FaBehance } from 'react-icons/fa';
import CallToAction from '../../components/CallToAction';
import { Gustavo, Marina, Leonart, Taichi, Liz, Julia, Yuvraj, Mandeep } from '../../components/Assets';

const Team = () => {
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
              <p>Collaboration is our middle name.<br />We are a group of different career background,
                life-long learners ready to solve any problem.
              </p>
            </span>
          </div>

          <div className="about__membersDiv">

            <div className="about__memberTile">

              <img src={Gustavo} alt="Team Member Avatar" onMouseOver={() => showBio('Bio', 1)} onFocus={() => showBio('Bio', 1)} onMouseOut={() => hideBio(1)} onBlur={() => hideBio(1)} />

              <h3>Gustavo</h3>

              <p>Brand & Lead Designer</p>

              <span>
                <a href="https://linkedin.com/in/gpalladini" aria-label="Link to linkedIn" rel="noopener noreferrer" title="LinkedIn" target="_blank"><FaLinkedin /></a>
                <a href="https://gp.art.br" aria-label="Link to behance" title="Behance" rel="noopener noreferrer" target="_blank"><FaBehance /></a>
              </span>

            </div>

            <div className="about__memberTile">

              <img src={Marina} alt="Team Member Avatar" onMouseOver={() => showBio('Bio', 2)} onFocus={() => showBio('Bio', 2)} onMouseOut={() => hideBio(2)} onBlur={() => hideBio(2)} />

              <h3>Marina</h3>

              <p>Lead UI/UX Designer</p>

              <span>
                <a href="https://linkedin.com/in/lemos-marina" aria-label="Link to linkedIn" title="LinkedIn" rel="noopener noreferrer" target="_blank"><FaLinkedin /></a>
                <a href="https://behance.net/lemos_marina" aria-label="Link to behance" title="Behance" rel="noopener noreferrer" target="_blank"><FaBehance /></a>
              </span>

            </div>

            <div className="about__memberTile">

              <img src={Leonart} alt="Team Member Avatar" onMouseOver={() => showBio('Full-Stack Web Developer and a Nerd who likes to create modules even when you don\'t need!', 3)} onFocus={() => showBio('Full-Stack Web Developer and a Nerd who likes to create modules even when you don\'t need!', 3)} onMouseOut={() => hideBio(3)} onBlur={() => hideBio(3)} />

              <h3>Leonart</h3>

              <p>Full-Stack Lead Developer</p>

              <span>
                <a href="https://linkedin.com/in/leonartgutz/" aria-label="Link to linkedIn" title="LinkedIn" rel="noopener noreferrer" target="_blank"><FaLinkedin /></a>
                <a href="https://github.com/leonartgutz" aria-label="Link to github" title="GitHub" rel="noopener noreferrer" target="_blank"><FaGithub /></a>
              </span>

            </div>

            <div className="about__memberTile">

              <img src={Julia} alt="Team Member Avatar" onMouseOver={() => showBio('Bio', 4)} onFocus={() => showBio('Bio', 4)} onMouseOut={() => hideBio(4)} onBlur={() => hideBio(4)} />

              <h3>Julia</h3>

              <p>Project Manager</p>

              <span>
                <a href="https://linkedin.com/in/julia-francese" aria-label="Link to linkedIn" title="LinkedIn" rel="noopener noreferrer" target="_blank"><FaLinkedin /></a>
              </span>

            </div>

            <div className="about__memberTile">

              <img src={Liz} alt="Team Member Avatar" onMouseOver={() => showBio('Bio', 5)} onFocus={() => showBio('Bio', 5)} onMouseOut={() => hideBio(5)} onBlur={() => hideBio(5)} />

              <h3>Liz</h3>

              <p>Front-End Developer</p>

              <span>
                <a href="https://linkedin.com/in/lizcostafernandes" aria-label="Link to linkedIn" title="LinkedIn" rel="noopener noreferrer" target="_blank"><FaLinkedin /></a>
                <a href="https://github.com/lizbrito" aria-label="Link to github" title="GitHub" rel="noopener noreferrer" target="_blank"><FaGithub /></a>
              </span>

            </div>

            <div className="about__memberTile">

              <img src={Taichi} alt="Team Member Avatar" onMouseOver={() => showBio('Bio', 6)} onFocus={() => showBio('Bio', 6)} onMouseOut={() => hideBio(6)} onBlur={() => hideBio(6)} />

              <h3>Taichi</h3>

              <p>Front-End Developer & QA</p>

              <span>
                <a href="https://linkedin.com/in/taichimurai" aria-label="Link to linkedIn" title="LinkedIn" rel="noopener noreferrer" target="_blank"><FaLinkedin /></a>
                <a href="https://github.com/epmt6528" aria-label="Link to github" title="GitHub" rel="noopener noreferrer" target="_blank"><FaGithub /></a>
              </span>

            </div>

            <div className="about__memberTile">

              <img src={Yuvraj} alt="Team Member Avatar" onMouseOver={() => showBio('Bio', 7)} onFocus={() => showBio('Bio', 7)} onMouseOut={() => hideBio(7)} onBlur={() => hideBio(7)} />

              <h3>Yuvraj</h3>

              <p>Content Designer</p>

              <span>
                <a href="https://linkedin.com/in/yuvraj-tonk" aria-label="Link to linkedIn" title="LinkedIn" rel="noopener noreferrer" target="_blank"><FaLinkedin /></a>
                <a href="https://behance.net/yuvrajsingh31" aria-label="Link to behance" title="Behance" rel="noopener noreferrer" target="_blank"><FaBehance /></a>
              </span>

            </div>

            <div className="about__memberTile">

              <img src={Mandeep} alt="Team Member Avatar" onMouseOver={() => showBio('Bio', 8)} onFocus={() => showBio('Bio', 8)} onMouseOut={() => hideBio(8)} onBlur={() => hideBio(8)} />

              <h3>Mandeep</h3>

              <p>Content Designer</p>

              <span>
                <a href="https://linkedin.com/in/mandeep-kaur09" aria-label="Link to linkedIn" title="LinkedIn" rel="noopener noreferrer" target="_blank"><FaLinkedin /></a>
                <a href="https://behance.net/mandeepkaur09" aria-label="Link to behance" title="Behance" rel="noopener noreferrer" target="_blank"><FaBehance /></a>
              </span>

            </div>

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
};

export default Team;
