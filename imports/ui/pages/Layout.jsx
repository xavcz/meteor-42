import React from 'react';

import MessagesContainer from '../containers/MessagesContainer.jsx';
import CurrentUserContainer from '../containers/CurrentUserContainer.jsx';

export default Layout = () => {
  return (
    <div className="home page page-id-361 page-template-default site-bg">
      <div className="site-statusbar">
        <div className="container">
          <div className="pull-right">
            <nav className="subs-access pull-left">
              <a href="http://hacklearnmake.com/">{ '{ Hack, Learn } = Make' }</a>
            </nav>
            <nav className="subs-access pull-left">
              &nbsp;|&nbsp;
              <a href="https://github.com/xavcz/meteor-42">GitHub repository</a>
            </nav>
          </div>
        </div>
      </div>
      <div className="container">
        <header id="masthead" className="site-header" role="banner">
          <div className="row">
            <hgroup className="span4 offset1">
              <h1 className="site-title"><a href="http://www.hacklearnmake.com/" title="42 / {hack, learn} = make" rel="home"><img src="http://www.42.fr/wp-content/themes/42/img/logo42-site.gif" alt="42 / born2code" /></a></h1>
              <h2 className="site-description">La réponse à la vie, l'univers et tout le reste</h2>
            </hgroup>
            <nav id="site-mainmenu" className="span7">
              <h1>Welcome to Meteor!</h1>
            </nav>
            <nav id="site-social-access" className="site-social-access">
              <ul id="menu-reseaux-sociaux" className="menu">
                <li id="menu-item-428" className="twitter menu-item menu-item-type-custom menu-item-object-custom menu-item-428"><a href="https://twitter.com/xav_cz">t</a></li>
                <li id="menu-item-429" className="facebook menu-item menu-item-type-custom menu-item-object-custom menu-item-429"><a href="http://facebook.com/xavizalote">f</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <div id="site-homecontent" className="site-content">
          <div id="content" role="main">
            <article>
              <div className="row">
                <h2 className="span7 offset3">Meteor Demo @ La Base</h2>
              </div>

              <div className="row">
                <section id="site-front-signinmetas" className="span3 offset3">

                  <MessagesContainer />

                </section>
                <section id="site-front-signin" className="span5">

                  <CurrentUserContainer />

                </section>
              </div>
            </article>
          </div>
        </div>

        <footer role="contentinfo" id="colophon">
          <div className="row">
            <div className="subs-info span12">
              Copyright &copy; 42 2013 - Ils ont bien fait leur travail avec leur WordPress<br />
              Mais maintenant c'est un projet <a href="http://meteor.com">Meteor</a>, forké par <a href="http://hacklearnmake.com">Xavier Cazalot</a><br />
              Design <a href="http://www.resonne.fr">resonne.fr</a>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
};