import React, { Component } from 'react';
import { NavigationBar } from './components/Navbar';
import './App.css';
import logoUrl from './resources/safteklogo-old.png';
import siteBanner from './resources/saftek-banner.png';
import rtLockJpg from './resources/rt-lock.jpg';
import * as RBS from '../node_modules/react-bootstrap/';

class App extends Component {
  render() {
    return (
      <div className="app">
        <RBS.Image src={siteBanner} alt="" fluid={true} />
        <NavigationBar
          navItems={['בית', 'מוצרים', 'צור קשר', 'תמיכה', 'מי אנחנו']}
          logoUrl={'test' || logoUrl}
          companyName="Saftek"
          userForm={false}
        />
        <RBS.Jumbotron
          fluid={true}
          className="jumbo-header bg-color-regular font-over-dark"
          id="מי אנחנו"
        >
          <h1>הבטחון שלהם, השליטה שלך</h1>
          <section>
            <p>
              חברת ספטק הינה חברה בעלת ניסיון הרב ביותר במערכות נעילה לבתי מלון
              ולבתי אבות.
            </p>
            שילוב של הון אנושי מקצועי, תודעת שירות גבוהה ומוצרים איכותיים מבית
            <a href="https://www.dormakaba.com/us-en">
              <b> KABA SAFLOK </b>
            </a>
            <p>מביאים אליך את שיא הטכנולוגיה בתחום עם פשטות הפעלה ותחזוקה .</p>
            <p>
              ספטק שמה לה כיעד להיות חברה מובילה בתחום ורואה אותך הלקוח שותף
              לדרך.
            </p>
            <p>
              שירות מקצועי, אמינות, יעילות ומצוינות ילוו אותך לאורך השנים.
              עלויות התפעול של מנעולי KABA SAFLOK הינן נמוכות במאות אחוזים מכל
              מערכת מתחרה בזכות אמינות הציוד, חסכון באנרגיה וכרטיסי חדרים במחיר
              הוגן.
            </p>
            <p>אתה מוזמן להצטרף לעשרות הלקוחות שבחרו בנו.</p>
          </section>
        </RBS.Jumbotron>
        <RBS.Jumbotron
          fluid={true}
          className="jumbo-header bg-color-dark font-over-dark"
          id="מוצרים"
        >
          <h1>המוצרים שלנו</h1>
          <RBS.Carousel interval={3000}>
            <RBS.CarouselItem>
              <RBS.Jumbotron
                fluid={true}
                className="jumbo-c-item bg-color-dark font-over-dark"
              >
                <h2>מנעול ה RT</h2>
              </RBS.Jumbotron>
            </RBS.CarouselItem>
            <RBS.CarouselItem>
              <RBS.Jumbotron
                fluid={true}
                className="jumbo-c-item bg-color-dark font-over-dark"
              >
                <h2>מנעול ה RT</h2>
              </RBS.Jumbotron>
            </RBS.CarouselItem>
            <RBS.CarouselItem>
              <RBS.Jumbotron
                fluid={true}
                className="jumbo-c-item bg-color-dark font-over-dark"
              >
                <h2>מנעול ה RT</h2>
                <RBS.Image src={rtLockJpg} />
              </RBS.Jumbotron>
            </RBS.CarouselItem>
          </RBS.Carousel>
        </RBS.Jumbotron>
      </div>
    );
  }
}

export default App;
