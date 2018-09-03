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
  selector: 'page-guidelines',
  templateUrl: 'guidelines.html',
})
export class GuidelinesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuidelinesPage');
  }

  items = [
    {
      name: '1. Time and Management',

      description: 'A small fire does not give much heat and a weak desire does not produce great results. Time management is the natural outcome of sense of urgency. Student life is a tender phase. It lays the foundation for the rest of the life. Students often say “There’s so much stress. There’s too much to do. How do I choose? I seem to be working hard but don’t get good results. Time is beyond sense perception. Vedas very logically explain variety of topics, ‘time’ being one of them. Time is considered the energy of God. In Vedic view, one does not try to control time nor does he try to control the outcome of one’s actions, because both of them are impossible. Rather one invests time in the best possible actions which guarantee one a good result eventually.' +
      '\n' +
      'Time management does not mean to increase the number of activities you do  in the same amount of time or to complete all tasks  in your ‘To do’ list. Time management means to select the most important tasks - those which affect your success the most - and to  intelligently invest time in them. It means to consciously and carefully exercise your God given choice of investing your time. An average student who develops this habit of clearly setting up priorities and investing his time in completing important tasks	will quickly outdo the “brilliant” one’s who have great intellect but procrastinate.',

      imageUrl: 'https://i.ytimg.com/vi/WSQk5jPJjOY/hqdefault.jpg',
    },
    {
      name: '2. Planning and Prioritizing',

      description: 'Imagine a bank that credits your account with Rs. 86,400 each morning, but has a policy that you have to use all the money on that day itself. It does not carry over a balance from one day to the next. What would you do? You would probably exhaust every single rupee, every single day, before the closing time. Similarly everyday you are credited 86,400 seconds to spend.Do you spend it as wisely as you would have spent the money? Just as a small child cannot spend money properly, one without the skill of planning and prioritizing things cannot spend time properly.' +
      '\n' +
      'To study without clear, specific goals and objectives to be achieved is like driving a car without knowing the destination to reach. Also, studying without having a study plan is like driving a car blind-folded. One who fails to plan, plans to fail.' +
      '\n' +
      'Another common misconception is thinking that being busy is being productive. Barry Werner proclaims “The essence of self discipline is to do the important thing rather than the urgent thing”. The “Time management matrix” that follows, further clarifies it.' +
      'Quadrant I is comprised of urgent and important activities(eg.If you have a test tomorrow). For those who are well planned Quadrant I shrinks. For others it expands to unmanageable limits and overwhelms them.' +
      'Quadrant III is about unproductive ‘busy-ness’ and often leads to Quadrant IV which is a quadrant of sheer waste of time.' +
      'One should therefore always try to come to Quadrant II, which is where most of the activities of a successful and well-planned person lies. Now, knowing the importance of planning, let’s see what all factors a good plan considers/covers. For your plans to be effective over a long term you have to take care of all dimensions of your life.' +
      '1. Physical - taking care of diet, health, staying fit' +
      '2. Career (Studies/Intellectual) - to perform to the best of one’s abilities according to one’s natural propensity' +
      '3. Relationships (Emotional) - To experience and share care and support' +
      '4. Spiritual - To commit to spiritual and ethical values  and love and serve selflessly.',

      imageUrl: 'https://i.pinimg.com/originals/50/4f/6d/504f6d458b8223d2573c1b5edf15bb85.jpg',
    },
    {
      name: '3. Procrastination - #1 Time Killer!',

      description: 'Making right priorities in life is the most crucial choice. Your priorities will give shape to your future. However, adhering to the priorities, is one of the most difficult elements of time management. When you don’t follow your priorities, you postpone the important tasks, and that means you tend to procrastinate. Procrastination is the greatest trouble a student faces in Time management. A student may know what is important for him, he may tell others his priorities and yet he may procrastinate and fail to act on them.' +
      '\n' +
      'DISCOMFORT TRIGGERS PROCRASTINATION' +
      'Studies (or thought of studies) ------> Feeling of discomfort ------> Engage into some other activity.' +
      'Each time you procrastinate, you reinforce a feeling of dislike towards the higher priority activity. Another danger with procrastination is that it builds up a lot of pressure on the students. You put yourself in a situation where you have less time to complete the task. Students who procrastinate are also more prone to take up bad habits. Due to stress and repeated failures in life, students become discouraged and morose.' +
      '\n' +
      'EXTERNAL REASONS TO PROCRASTINATE :  Fear of outcome, Perfectionism, rebellion, lack of Interest, laziness.' +
      '\n' +
      'COMFORT ZONE to RESPONSIBILITY ZONE :' +
      'Arjuna, a mighty warrior of Pandava dynasty, a legendry hero in the military science of archery, was in the battle field of Kuruksetra. The war was about to begin. However, the misgivings and misconceptions of Arjuna suddenly made him to think against his duties. He decided to not engage in the war. Was he not prepared? Were the plans for the war not drafted? Was there no strategy? All of this was in place. But essentially, Arjuna was procrastinating. All the misconceptions of Arjuna were forming his mental attitude and limiting him to the zone of comfort due to which he was procrastinating. Like comfort zone, Responsibility zone is also a sub-conscious state of thoughts. It is a pattern of our activities and behavior which drive us to remain duty bound. When the spiritual pricinples govern one’s thoughts, then even in trying situations one sticks to his responsibility. The strong will power, which is a gift of aligning oneself with God’s laws or the spiritual ideals, keeps one on track with his priorities.',

      imageUrl: 'http://www.samsunggalaxysvii.com/wp-content/uploads/2014/08/Radha-Krishna-Janmashtami-wallpapers1.jpg?x48466',
    },
    {
      name: 'Section 4',
      description: 'In connection with this verse, which is a quotation from Çrémad-Bhägavatam (11.23.57), Çréla Bhaktisiddhänta Sarasvaté Öhäkura says that of the sixty-four items required for rendering devotional service, acceptance of the symbolic marks of sannyäsa is a regulative principle. If one accepts the sannyäsa order, his main business is to devote his life completely to the service of Mukunda, Kåñëa. If one does not completely devote his mind and body to the service of the Lord, he does not actually become a sannyäsé. It is not simply a matter of changing dress. In Bhagavad-gétä (6.1) it is also stated, anäçritaù karma-phalaà käryaà karma karoti yaù/ sa sannyäsé ca yogé ca: one who works devotedly for the satisfaction of Kåñëa is a sannyäsé. The dress is not sannyäsa, but the attitude of service to Kåñëa is.',
      imageUrl: 'http://wallpapers.iskcondesiretree.com/wp-content/uploads/2012/06/005-Sri_Radha_Madhava_Close_up-640x480.jpg',
    }
  ]

}
