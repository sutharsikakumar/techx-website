/**
 * Member directory, shown on /members.
 *
 * To add a member:
 *   1. Drop their photo in /public/images/members/cohort-{n}/{slug}.jpg
 *      (portrait, 4:5, at least 600 × 750).
 *   2. Add an entry to that cohort's `members` list below:
 *        { name: 'Jane Doe', linkedin: 'https://www.linkedin.com/in/janedoe', photo: '/images/members/cohort-8/jane-doe.jpg' }
 *      Leave out `photo` to show the placeholder silhouette.
 *   LinkedIn links are '#' until each member's profile URL is filled in; until then the
 *   tile links to a LinkedIn people search for "{name} UNC".
 *
 * Cohorts can be in any order here; the page sorts them newest first.
 */

export type Member = { name: string; linkedin: string; photo?: string };
export type Cohort = { number: number; members: Member[] };

export const cohorts: Cohort[] = [
  {
    number: 8,
    members: [
      {
        name: 'Maleea Moebes',
        linkedin: '#',
        photo: '/images/members/cohort-8/maleea.jpg',
      },
      {
        name: 'Shom Tailor',
        linkedin: '#',
        photo: '/images/members/cohort-8/shom.png',
      },
      {
        name: 'Josiah Annoh',
        linkedin: '#',
        photo: '/images/members/cohort-8/josiah.png',
      },
      {
        name: 'Nikita Chincholkar',
        linkedin: '#',
        photo: '/images/members/cohort-8/nikita.jpg',
      },
      {
        name: 'Micah Edwards',
        linkedin: '#',
        photo: '/images/members/cohort-8/micah.png',
      },
      {
        name: 'Lyla Goldman',
        linkedin: '#',
        photo: '/images/members/cohort-8/lyla.jpg',
      },
      {
        name: 'Rashmi Ruppa',
        linkedin: '#',
        photo: '/images/members/cohort-8/rashmi.jpg',
      },
      {
        name: 'Avika Mishra',
        linkedin: '#',
        photo: '/images/members/cohort-8/avika.jpg',
      },
      {
        name: 'Ruthwik Dhama',
        linkedin: '#',
        photo: '/images/members/cohort-8/ruthwik.jpg',
      },
      {
        name: 'Sean Chang',
        linkedin: '#',
        photo: '/images/members/cohort-8/sean.png',
      },
    ],
  },
  {
    number: 7,
    members: [
      {
        name: 'Eduard Pugachov',
        linkedin: '#',
        photo: '/images/members/cohort-7/eduard.jpg',
      },
      {
        name: 'Lillian Copplestone',
        linkedin: '#',
        photo: '/images/members/cohort-7/lillian.png',
      },
      {
        name: 'Maxamillian Karia',
        linkedin: '#',
        photo: '/images/members/cohort-7/maxamillian.png',
      },
      {
        name: 'Mokshashree Nemalipuri',
        linkedin: '#',
        photo: '/images/members/cohort-7/mokshashree.png',
      },
      {
        name: 'Robert McCallum',
        linkedin: '#',
        photo: '/images/members/cohort-7/robert.png',
      },
      {
        name: 'Vihaan Kerekatte',
        linkedin: '#',
        photo: '/images/members/cohort-7/vihaan.png',
      },
      {
        name: 'Yutian Gong',
        linkedin: '#',
        photo: '/images/members/cohort-7/yutian.png',
      },
      {
        name: 'Aditya Karthikeyan',
        linkedin: '#',
        photo: '/images/members/cohort-7/aditya.png',
      },
      {
        name: 'Colin Volpe',
        linkedin: '#',
        photo: '/images/members/cohort-7/colin.jpg',
      },
      {
        name: 'Yadunand Sreelesh',
        linkedin: '#',
        photo: '/images/members/cohort-7/yadunand.jpg',
      },
      {
        name: 'Jack Scutari',
        linkedin: '#',
        photo: '/images/members/cohort-7/jack.png',
      },
    ],
  },
  {
    number: 6,
    members: [
      {
        name: 'Ananya Valati',
        linkedin: '#',
        photo: '/images/members/cohort-6/ananya.png',
      },
      {
        name: 'Joseph Sabo',
        linkedin: '#',
        photo: '/images/members/cohort-6/joseph.png',
      },
      {
        name: 'Riya Jain',
        linkedin: '#',
        photo: '/images/members/cohort-6/riya.png',
      },
      {
        name: 'Wakeland Branz',
        linkedin: '#',
        photo: '/images/members/cohort-6/wakeland.png',
      },
      {
        name: 'Aryan Gera',
        linkedin: '#',
        photo: '/images/members/cohort-6/aryan.jpg',
      },
      {
        name: 'Xiyuan Shen',
        linkedin: '#',
        photo: '/images/members/cohort-6/xiyuan.png',
      },
      {
        name: 'Alexandre Tourneux',
        linkedin: '#',
        photo: '/images/members/cohort-6/alexandre.jpg',
      },
      {
        name: 'Meghana Kanamurlapudi',
        linkedin: '#',
        photo: '/images/members/cohort-6/meghana.png',
      },
    ],
  },
  {
    number: 5,
    members: [
      { name: 'Rio Kuchlyan', linkedin: '#' },
      { name: 'Kennedy Cameron', linkedin: '#' },
      { name: 'Adhvytha Srigopal', linkedin: '#' },
      { name: 'Ben Luis', linkedin: '#' },
      { name: 'Justin Han', linkedin: '#' },
      { name: 'Conor Jones', linkedin: '#' },
      { name: 'Sutharsika Kumar', linkedin: '#' },
      { name: 'Betsy George', linkedin: '#' },
      { name: 'Ibrahim Mohsin', linkedin: '#' },
      { name: 'Aditi Nayak', linkedin: '#' },
    ],
  },
  {
    number: 4,
    members: [
      { name: 'Alan Liu', linkedin: '#' },
      { name: 'Nabiha Choudhury', linkedin: '#' },
      { name: 'Sahil Kapadia', linkedin: '#' },
      { name: 'Sven Reyes', linkedin: '#' },
      { name: 'Lucas Moore', linkedin: '#' },
      { name: 'Dmitrii Pavlov', linkedin: '#' },
      { name: 'Krish Vazirani', linkedin: '#' },
      { name: 'Harsehaj Dhami', linkedin: '#' },
      { name: 'Caleb Free', linkedin: '#' },
    ],
  },
  {
    number: 3,
    members: [
      { name: 'Grace Odondi', linkedin: '#' },
      { name: 'Nathan Santiago', linkedin: '#' },
      { name: "Joel D'Silva", linkedin: '#' },
      { name: 'Nicolas Zhang', linkedin: '#' },
      { name: 'Krisha Avula', linkedin: '#' },
      { name: 'Aidan Lee', linkedin: '#' },
      { name: 'Kerry Creech', linkedin: '#' },
      { name: 'Advik Arora', linkedin: '#' },
      { name: 'Owen McAllister', linkedin: '#' },
      { name: 'Kiara Smith', linkedin: '#' },
    ],
  },
  {
    number: 2,
    members: [
      { name: 'Pranav Kosuri', linkedin: '#' },
      { name: 'Luke Briden', linkedin: '#' },
      { name: 'Nicholas Copland', linkedin: '#' },
      { name: 'Neha Bharadwaj', linkedin: '#' },
      { name: 'Minjae Kung', linkedin: '#' },
      { name: 'Sean Blizard', linkedin: '#' },
      { name: 'Sushant Marella', linkedin: '#' },
      { name: 'Mihir Sharma', linkedin: '#' },
      { name: 'Alex Sieni', linkedin: '#' },
      { name: 'Ansh Aryan', linkedin: '#' },
      { name: 'Arya Gavande', linkedin: '#' },
    ],
  },
  {
    number: 1,
    members: [
      { name: 'Kayla Nesbitt', linkedin: '#' },
      { name: 'James Dankwah', linkedin: '#' },
      { name: 'Armaan Punj', linkedin: '#' },
      { name: 'Thomas Smith', linkedin: '#' },
      { name: 'Aryan Choudhary', linkedin: '#' },
      { name: 'Destiny Okonkwo', linkedin: '#' },
      { name: 'Christopher Arraya', linkedin: '#' },
      { name: 'David Villavicencio', linkedin: '#' },
      { name: 'Varun Divi', linkedin: '#' },
      { name: 'Gillian Zech', linkedin: '#' },
      { name: 'Thomas Carriero', linkedin: '#' },
    ],
  },
  {
    number: 0,
    members: [
      { name: 'Farouk Charkas', linkedin: '#' },
      { name: 'Hamza Ishaque', linkedin: '#' },
    ],
  },
];
