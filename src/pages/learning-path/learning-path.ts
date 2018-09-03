import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LearningPathPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-learning-path',
  templateUrl: 'learning-path.html',
})
export class LearningPathPage {
  chapterDetails: any[];
  QAs: any[];
  PAs: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var imageFolder = 'assets/ch-imgs/';
    var iconFolder = 'assets/ch-icons/';

    this.QAs = [
      {
        Qs: ["Hari bol", "Gaur Hari", "Radha Krishna", "Krishna Balaram"], //Questions
        Os: [["Hari", "Bol"], ["Gaur", "Hari"], ["Radha", "Krishna"], ["Krishna", "Balaram"]], //Options
        As: ["Hari", "Gaur", "Radha", "Balaram"], //Answers
        index: 0 //Chapter
      },
      {
        Qs: ["Hari bol", "Gaur Nitai"], //Questions
        Os: [["Hari", "Bol"], ["Gaur", "Nitai"]], //Options
        As: ["Hari", "Nitai"], //Answers
        index: 1
      },
      {
        Qs: ["Hari bol"], //Questions
        Os: [["Hari", "Bol"]], //Options
        As: ["Hari"], //Answers
        index: 2
      },
      {
        Qs: ["Hari bol"], //Questions
        Os: [["Hari", "Bol"]], //Options
        As: ["Hari"], //Answers
        index: 3
      },
      {
        Qs: ["Hari bol"], //Questions
        Os: [["Hari", "Bol"]], //Options
        As: ["Hari"], //Answers
        index: 4
      },
      {
        Qs: ["Hari bol"], //Questions
        Os: [["Hari", "Bol"]], //Options
        As: ["Hari"], //Answers
        index: 5
      }
    ];

    this.PAs = [];

    this.chapterDetails = [
  		{
        title: 'Time and Management',
        image: imageFolder + 'time and management.png',
        icon: iconFolder + 'time and management.png',

        material: "A small fire does not give much heat and a weak desire does not produce great results.Time management is the natural outcome of sense of urgency.Student life is a tender phase. It lays the foundation for the rest of the life. Students often say “There’s so much stress. There’s too much to do. How do I choose? I seem to be working hard but don’t get good results.Time is beyond sense perception. Vedas very logically explain variety of topics, ‘time’ being one of them. Time is considered the energy of God. In Vedic view, one does not try to control time nor does he try to control the outcome of one’s actions, because both of them are impossible. Rather one invests time in the best possible actions which guarantee one a good result eventually.Time management does not mean to increase the number of activities you do  in the same amount of time or to complete all tasks  in your ‘To do’ list. Time management means to select the most important tasks - those which affect your success the most - and to  intelligently invest time in them. It means to consciously and carefully exercise your God given choice of investing your time. An average student who develops this habit of clearly setting up priorities and investing his time in completing important tasks    will quickly outdo the “brilliant” one’s who have great intellect but procrastinate.</q><q>A small fire does not give much heat and a weak desire does not produce great results.Time management is the natural outcome of sense of urgency.Student life is a tender phase. It lays the foundation for the rest of the life. Students often say “There’s so much stress. There’s too much to do. How do I choose? I seem to be working hard but don’t get good results.Time is beyond sense perception. Vedas very logically explain variety of topics, ‘time’ being one of them. Time is considered the energy of God. In Vedic view, one does not try to control time nor does he try to control the outcome of one’s actions, because both of them are impossible. Rather one invests time in the best possible actions which guarantee one a good result eventually.Time management does not mean to increase the number of activities you do  in the same amount of time or to complete all tasks  in your ‘To do’ list. Time management means to select the most important tasks - those which affect your success the most - and to  intelligently invest time in them. It means to consciously and carefully exercise your God given choice of investing your time. An average student who develops this habit of clearly setting up priorities and investing his time in completing important tasks    will quickly outdo the “brilliant” one’s who have great intellect but procrastinate.",

        QAset: this.QAs[0],
        PAset: this.PAs[0],
        index: 0
      },
  		{
        title: 'Planning and Prioritizing',
        image: imageFolder + 'planning and prioritizing.png',
        icon: iconFolder + 'planning and prioritizing.png',

        material: "Imagine a bank that credits your account with Rs. 86,400 each morning, but has a policy that you have to use all the money on that day itself. It does not carry over a balance from one day to the next. What would you do? You would probably exhaust every single rupee, every single day, before the closing time. Similarly everyday you are credited 86,400 seconds to spend.Do you spend it as wisely as you would have spent the money? Just as a small child cannot spend money properly, one without the skill of planning and prioritizing things cannot spend time properly.To study without clear, specific goals and objectives to be achieved is like driving a car without knowing the destination to reach. Also, studying without having a study plan is like driving a car blind-folded. One who fails to plan, plans to fail.Another common misconception is thinking that being busy is being productive. Barry Werner proclaims “The essence of self discipline is to do the important thing rather than the urgent thing”. The “Time management matrix” that follows, further clarifies it.Quadrant I is comprised of urgent and important activities(eg.If you have a test tomorrow). For those who are well planned Quadrant I shrinks. For others it expands to unmanageable limits and overwhelms them.Quadrant III is about unproductive ‘busy-ness’ and often leads to Quadrant IV which is a quadrant of sheer waste of time.One should therefore always try to come to Quadrant II, which is where most of the activities of a successful and well-planned person lies. Now, knowing the importance of planning, let’s see what all factors a good plan considers/covers. For your plans to be effective over a long term you have to take care of all dimensions of your life.Physical - taking care of diet, health, staying fitCareer (Studies/Intellectual) - to perform to the best of one’s abilities according to one’s natural propensityRelationships (Emotional) - To experience and share care and supportSpiritual - To commit to spiritual and ethical values  and love and serve selflessly.",

        QAset: this.QAs[1],
        PAset: this.PAs[1],
        index: 1
      },
  		{
        title: 'Procrastination',
        image: imageFolder + 'procrastination.png',
        icon: iconFolder + 'procrastination.png',

        material: "Making right priorities in life is the most crucial choice. Your priorities will give shape to your future. However, adhering to the priorities, is one of the most difficult elements of time management. When you don’t follow your priorities, you postpone the important tasks, and that means you tend to procrastinate. Procrastination is the greatest trouble a student faces in Time management. A student may know what is important for him, he may tell others his priorities and yet he may procrastinate and fail to act on them.DISCOMFORT TRIGGERS PROCRASTINATIONStudies (or thought of studies) ------> Feeling of discomfort ------> Engage into some other activity.Each time you procrastinate, you reinforce a feeling of dislike towards the higher priority activity. Another danger with procrastination is that it builds up a lot of pressure on the students. You put yourself in a situation where you have less time to complete the task. Students who procrastinate are also more prone to take up bad habits. Due to stress and repeated failures in life, students become discouraged and morose.EXTERNAL REASONS TO PROCRASTINATE :  Fear of outcome, Perfectionism, rebellion, lack of Interest, laziness.COMFORT ZONE to RESPONSIBILITY ZONE :Arjuna, a mighty warrior of Pandava dynasty, a legendry hero in the military science of archery, was in the battle field of Kuruksetra. The war was about to begin. However, the misgivings and misconceptions of Arjuna suddenly made him to think against his duties. He decided to not engage in the war. Was he not prepared? Were the plans for the war not drafted? Was there no strategy? All of this was in place. But essentially, Arjuna was procrastinating. All the misconceptions of Arjuna were forming his mental attitude and limiting him to the zone of comfort due to which he was procrastinating. Like comfort zone, Responsibility zone is also a sub-conscious state of thoughts. It is a pattern of our activities and behavior which drive us to remain duty bound. When the spiritual pricinples govern one’s thoughts, then even in trying situations one sticks to his responsibility. The strong will power, which is a gift of aligning oneself with God’s laws or the spiritual ideals, keeps one on track with his priorities.",

        QAset: this.QAs[2],
        PAset: this.PAs[2],
        index: 2
      },
  		{
        title: 'Goals',
        image: imageFolder + 'goals.png',
        icon: iconFolder + 'goals.png',

        material: "Immediate goals are those which deal with the imminent concerns of life. Imminent concerns are what most people are usually worried about like good marks, good health, good job, tasty food, entertainment, etc. Mostly these concerns are related to Career, Physical Health or Relationship dimensions of life. Intermediate goals, deal with the ethical dimension which is a subset of spiritual dimension of life. In order to have steady performance in long-term you need to be disciplined and ethically strong. Ultimate goal of life is what you dedicate your whole life to it gives you the purpose for which you live. Ultimate goal deals with the spiritual dimension of life. The ultimate goal of life connects you to the deepest values you hold sacred and it gives meaning to the immediate or intermediate goals of life.Goals require plans to achieve. Goals are different from merely the dreams. You have to make an end-to-end plan. An elaborate plan with details of what to do in the next few years, months, weeks and days is called end-to-end plan. In cases you are not able to make end-to-end plan, you have to make a forward plan such as “I will exercise 15 minutes a day for the next 6 months in order to become fit.”Laws of executing plansDO ONE THING AT A TIME : No multi-tasking. When you are studying a subject, keep yourself aloof from everything else. Just focus on your subject. Most students habitually multi-task between studying and using electronic gadgets like smart-phones or laptops. Some may study while watching television. Remember that multi-tasking only serves as a distraction.KEEP TIME BOUND STUDY SESSIONS : Without being time bound, we may delay our endeavors for no good reason. Keeping time limits can bring some stimulus for studying.FOCUS ON THE EFFORT NOT ON THE RESULTS : The deadline should never be kept for the results, deadline should be kept for the efforts. You can decide, and study for two hours. I will not attend to phone. I will not eat anything in between. I will not day dream, etc. This is focus on effort.TRYING TOO HARD CAN BLOCK YOUR PROGRESS : Trying to focus too much for long makes us get stuck and blocks creativity Scientists say that brain has two modes in which it functions the focus mode and the diffuse mode. If the focus mode of our brain is activated for long time, then we get stuck! Our ability to further absorb any new information or to think in new ways reduces. This is called ‘Einstellung effect’ . So, the way to act for efficiency is: Focused work - Relaxation -Focused work. Another important thing is, most students want to work with the pattern: Relax-Focus-Relax but that does not work. It is not that you relax first, it is that you first focus intensely.USE SPACED REPETITION FOR EFFECTIVE LEARNING : Spaced repetition is a technique for efficient memorization and practice of skills where instead of doing a lot of memorization quickly, the effort is spread out over time. Instead of making many attempts all at once, one should repeat the learning attempts after some space or time duration.DEVELOP YOUR PERSONAL REFERENCE FILE : After a few days of study, I suggest, that you take time out and recall the different important concepts which you have learnt and record them in a file.To form one’s character, right type of association is the most critical factor. One of the most significant reason why the teenagers face ethical problems is due to abundant bad association all around them. To realize immediate goals of life and to overcome the six anarthas, one needs satsanga or association of those who want to follow the spiritual ideals. Satsanga provides the right environment and a support system for a sincere student to overcome his internal weaknesses. Satsanga also provides an inspiration to struggle against the lower animalistic propensities.The 4D IMPACT summarizes the impact of sadhana and satsanga in the student’s life.1stD: DISCRIMINATION : Too often, every one of us, face a situation where we have to make a decision. Which career option to pursue after Xth board? Which coaching institute to select? Should you be-friend a particular student or not? Which hostel to stay? Should you study late nights or early mornings? Which books to refer? Life is filled with such decisions. Sadhana gives you this most needed clarity by building your discrimination ability required for decision-making.2ndD: DETERMINATION : It is not enough to know what is right, it is more important to remain steady and follow the right. Commonly noted testing times are those when you are passing through a trouble or a failure. When you fail in your attempts you may undergo depression and you may forego further attempts due to weak determination. Satsanga group gives us association of people who share our struggles during these testing times and inspire us to stay determined.3rdD: DEDICATION: Often during a long battle with a formidable enemy, even the strongest soldier may become weak.In the same manner, our determination though strong, may still quiver while facing a prolonged difficult time. It is especially true for students having two years long preparation time or facing a difficult exam. In such a case a force greater than just raw determination is necessary to stay fixed on goals. And that force is Dedication. Dedication means having a strong sense of purpose in life and to stay firmly fixed to that purpose. Analyze your purpose. Sadhana and Satsanga helps a person to overcome the anarthas (unwanted things) gradually, and thereby to become pure in his/her motives. Through this re-gained purity of intentions, one changes his purpose from being selfish to acting selflessly.4thD: DEVOTION: In order to continue endeavor for achieving goals, one needs a motivation. We have just discussed that strongest motivation comes when we do selfless tasks. But what sustains this motivation? One needs to find happiness somewhere in-order to continue with determination even through the tough phases.An expert businessman carefully analyzes his investment options to invest in the best one. And so, an intelligent person whose goal is to maximize his happiness should analyze the various sources of happiness and find out the best one. There are four types of happiness : sensual, egoistic, emotional, spiritual in the order of their quality of happiness.",

        QAset: this.QAs[3],
        PAset: this.PAs[3],
        index: 3
      },
  		{
        title: 'Endless Motivation',
        image: imageFolder + 'endless motivation.png',
        icon: iconFolder + 'endless motivation.png',

        material: "Types of motivationExtrinsic motivation : It comes from fear of parents and teachers, peer pressure, controlled study environment, desire for money, comforts, prestige.Intrinsic motivation : It comes from interest in the subject, duty towards parents, society, nation, desire to serve God and humanity.Research (Deci & Ryan, 1991; NIx, Ryan, Manly & Deci, 1999 etc.,) has consistently shown that there is a direct relationship with motivation and productivity with intrinsic motivation boosting productivity and extrinsic motivation lowering productivity almost always.Art of work is also described in the Bhagavad Gita as follows.Individual responsibility : You have a right to perform prescribed work.Dependent enjoyer : You are not entitled to the results of the work.Shared doership : You are not the cause of the results of your work.Work as reward : Developing intrinsic motivation and not being attached to not doing your prescribed work.Misunderstood spirituality distracts. - Is it true that spirituality means renunciation? What advice did Lord Krishna give to Arjuna? Did he ask him to renounce on to work with devotion? Did Arjuna become a renunciate after hearing Bhagavad Gita? The truth is that personal understanding of God leads to “path of devotional service”. Path of devotional service is not about renouncing everything but about engaging everything in the service of God.",

        QAset: this.QAs[4],
        PAset: this.PAs[4],
        index: 4
      },
  		{
        title: 'Last Chapter',
        image: imageFolder + 'endless motivation.png',
        icon: iconFolder + 'endless motivation.png',

        material: "Hari bol",

        QAset: this.QAs[5],
        PAset: this.PAs[5],
        index: 5
      }
  	];
  }

  openChapter(i) {
    switch(i) {
      case 0:
        this.navCtrl.push('ChapterPagesPage',{dataItem: this.chapterDetails[0]});
        break;
      case 1:
        this.navCtrl.push('ChapterPagesPage',{dataItem: this.chapterDetails[1]});
        break;
      case 2:
        this.navCtrl.push('ChapterPagesPage',{dataItem: this.chapterDetails[2]});
        break;
      case 3:
        this.navCtrl.push('ChapterPagesPage',{dataItem: this.chapterDetails[3]});
        break;
      case 4:
        this.navCtrl.push('ChapterPagesPage',{dataItem: this.chapterDetails[4]});
        break;
      case 5:
        this.navCtrl.push('ChapterPagesPage',{dataItem: this.chapterDetails[5]});
        break;
      default:
        break;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LearningPathPage');
  }
}
