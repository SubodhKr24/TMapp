import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GuidelinesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aboutarjuna',
  templateUrl: 'aboutarjuna.html',
})
export class AboutArjunaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutArjunaPage');
  }

  items = [
    {
      name: 'We & Our Belief',

      description: 'ARJUNA Group Trust is non-profit NGO founded by IIT alumni with passion to serve the student community.' +
      '\n' +
      'Gita says ‘yoga karmasu kausalam’ that yoga of work brings satisfaction for the self and happiness to everyone else. The balance of personal success and selfless service is what our group strives to live by and teach to student community. We feel blessed with the Vedic heritage of India which is a store house of immense wisdom. We wish to practice and share this wisdom with the purpose of having successful students and a stronger nation.',

      imageUrl: 'http://www.studentthinkbox.com/wp-content/uploads/2017/04/arjuna_logo_desktop_retina_t.png',
    },
    {
      name: 'Vision',

      description: 'A country where youths value and practice the importance of Character, Competence and Devotion; and spread it to the whole world.',
    },
    {
      name: 'Mission',

      description: 'To spread the culture of excellence and ethics amidst the student community with the spirit of selfless service.',
    },
    {
      name: 'Description',

      description: 'Today’s world has no deficiency of facilities, amenities, luxuries; dearth is of selfless service attitude. It is this selfless spirit which the group stands for. Student life is the tender age where the ideologies formed are carried over throughout one’s life. It is very unfortunate that, today’s students are given a very self-centric, egoistic, unrealistic world view. It is not surprising to see, therefore, that the student community is susceptible to vices of all sorts. Wisdom tells us that a student leading life of purity would become a great servant-leader for the world in future.' +
      '\n' +
      'ARJUNA Group is meant to serve the student community by systematically giving them education and training in the values for principle centred living. Purity can’t be sustained without devotion to God. The group, in a secular way, encourages the service to God and humanity.',
    },
    {
      name: 'Logo Description',

      description: 'Plant represents the student. ‘A (hindi font)’ represents the beginning. Beginning of everything is God. Sun  represents  the  wisdom  coming  from God and  the Rain  represents  the  inspiration  given  by  God. Just like a plant grows luxuriantly when there is sufficient sunlight and timely rain; similarly, a student when connected to the ARJUNA Group, will grow in his/her natural position of practicing values of service and devotion.',

      imageUrl: 'http://www.studentthinkbox.com/wp-content/uploads/2017/04/arjuna_logo_desktop_retina_t.png',
    },
    {
      name: 'Story Till Now',
      description: 'ARJUNA stands for service towards the student community. The idea to serve was already springing in the minds of many of us long before we registered ARJUNA or even long before we met each other.' +
      '\n' +
      'The common thing among the founders of ARJUNA was – a deep concern towards the student community of modern India. All of us came to IIT Chennai and met there. And then we started our service. Now our group has students and alumni’s of various IIT’s.' +
      '\n' +
      'We need real leaders who can make a difference in present society and nation at large. Leader is one who has learnt the art of balancing personal success & selfless service. Today’s teens are future leaders. Unfortunately the teens today are amidst numerous challenges. The technology, with all its benefits to humanity is also posing greatest challenges unheard of in human history and guess who are among the most affected one’s – teenage students!',
    }
  ]

}
