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
      {
        name: 'Rio Kuchlyan',
        linkedin: '#',
        photo: '/images/members/cohort-5/rio.jpg',
      },
      {
        name: 'Kennedy Cameron',
        linkedin: '#',
        photo: '/images/members/cohort-5/kennedy.jpg',
      },
      {
        name: 'Adhvytha Srigopal',
        linkedin: '#',
        photo: '/images/members/cohort-5/adhvytha.png',
      },
      {
        name: 'Ben Luis',
        linkedin: '#',
        photo: '/images/members/cohort-5/ben.jpg',
      },
      {
        name: 'Justin Han',
        linkedin: '#',
        photo: '/images/members/cohort-5/justin.jpg',
      },
      {
        name: 'Conor Jones',
        linkedin: '#',
        photo: '/images/members/cohort-5/conor.jpg',
      },
      {
        name: 'Sutharsika Kumar',
        linkedin: '#',
        photo: '/images/members/cohort-5/sutharsika.jpg',
      },
      {
        name: 'Betsy George',
        linkedin: '#',
        photo: '/images/members/cohort-5/betsy.jpg',
      },
      {
        name: 'Ibrahim Mohsin',
        linkedin: '#',
        photo: '/images/members/cohort-5/ibrahim.jpg',
      },
      {
        name: 'Aditi Nayak',
        linkedin: '#',
        photo: '/images/members/cohort-5/aditi.jpg',
      },
    ],
  },
  {
    number: 4,
    members: [
      {
        name: 'Alan Liu',
        linkedin: '#',
        photo: '/images/members/cohort-4/alan.jpg',
      },
      {
        name: 'Nabiha Choudhury',
        linkedin: '#',
        photo: '/images/members/cohort-4/nabiha.jpg',
      },
      {
        name: 'Sahil Kapadia',
        linkedin: '#',
        photo: '/images/members/cohort-4/sahil.jpg',
      },
      {
        name: 'Sven Reyes',
        linkedin: '#',
        photo: '/images/members/cohort-4/sven.jpg',
      },
      {
        name: 'Lucas Moore',
        linkedin: '#',
        photo: '/images/members/cohort-4/lucas.jpg',
      },
      {
        name: 'Dmitrii Pavlov',
        linkedin: '#',
        photo: '/images/members/cohort-4/dimitrii.jpg',
      },
      {
        name: 'Krish Vazirani',
        linkedin: '#',
        photo: '/images/members/cohort-4/krish.jpg',
      },
      {
        name: 'Harsehaj Dhami',
        linkedin: '#',
        photo: '/images/members/cohort-4/harsehaj.jpg',
      },
      {
        name: 'Caleb Free',
        linkedin: '#',
        photo: '/images/members/cohort-4/caleb.jpg',
      },
    ],
  },
  {
    number: 3,
    members: [
      {
        name: 'Grace Odondi',
        linkedin: '#',
        photo: '/images/members/cohort-3/grace.jpg',
      },
      {
        name: 'Nathan Santiago',
        linkedin: '#',
        photo: '/images/members/cohort-3/nathan.jpg',
      },
      { name: "Joel D'Silva", linkedin: '#' },
      {
        name: 'Nicolas Zhang',
        linkedin: '#',
        photo: '/images/members/cohort-3/nicolas.jpg',
      },
      {
        name: 'Krisha Avula',
        linkedin: '#',
        photo: '/images/members/cohort-3/krisha.jpg',
      },
      {
        name: 'Aidan Lee',
        linkedin: '#',
        photo: '/images/members/cohort-3/aiden.jpg',
      },
      {
        name: 'Kerry Creech',
        linkedin: '#',
        photo: '/images/members/cohort-3/kerry.png',
      },
      {
        name: 'Advik Arora',
        linkedin: '#',
        photo: '/images/members/cohort-3/advik.jpg',
      },
      {
        name: 'Owen McAllister',
        linkedin: '#',
        photo: '/images/members/cohort-3/owen.jpg',
      },
      {
        name: 'Kiara Smith',
        linkedin: '#',
        photo: '/images/members/cohort-3/kiara.jpg',
      },
    ],
  },
  {
    number: 2,
    members: [
      {
        name: 'Pranav Kosuri',
        linkedin: '#',
        photo: '/images/members/cohort-2/pranav.jpg',
      },
      {
        name: 'Luke Briden',
        linkedin: '#',
        photo: '/images/members/cohort-2/luke.jpg',
      },
      {
        name: 'Nicholas Copland',
        linkedin: '#',
        photo: '/images/members/cohort-2/nicholas.jpg',
      },
      {
        name: 'Neha Bharadwaj',
        linkedin: '#',
        photo: '/images/members/cohort-2/neha.jpg',
      },
      {
        name: 'Minjae Kung',
        linkedin: '#',
        photo: '/images/members/cohort-2/minjae.jpg',
      },
      {
        name: 'Sean Blizard',
        linkedin: '#',
        photo: '/images/members/cohort-2/sean-blizard.jpg',
      },
      {
        name: 'Sushant Marella',
        linkedin: '#',
        photo: '/images/members/cohort-2/sushant.jpg',
      },
      {
        name: 'Mihir Sharma',
        linkedin: '#',
        photo: '/images/members/cohort-2/mihir.png',
      },
      {
        name: 'Alex Sieni',
        linkedin: '#',
        photo: '/images/members/cohort-2/alex-sieni.jpg',
      },
      {
        name: 'Ansh Aryan',
        linkedin: '#',
        photo: '/images/members/cohort-2/ansh.jpg',
      },
      {
        name: 'Arya Gavande',
        linkedin: '#',
        photo: '/images/members/cohort-2/arya-gavande.jpg',
      },
    ],
  },
  {
    number: 1,
    members: [
      {
        name: 'Kayla Nesbitt',
        linkedin: '#',
        photo: '/images/members/cohort-1/kayla.jpg',
      },
      {
        name: 'James Dankwah',
        linkedin: '#',
        photo: '/images/members/cohort-1/james-dankwah.jpg',
      },
      {
        name: 'Armaan Punj',
        linkedin: '#',
        photo: '/images/members/cohort-1/armaan.jpg',
      },
      {
        name: 'Thomas Smith',
        linkedin: '#',
        photo: '/images/members/cohort-1/thomas-smith.jpg',
      },
      {
        name: 'Aryan Choudhary',
        linkedin: '#',
        photo: '/images/members/cohort-1/aryan-choudhury.jpg',
      },
      {
        name: 'Destiny Okonkwo',
        linkedin: '#',
        photo: '/images/members/cohort-1/destiny.jpg',
      },
      {
        name: 'Christopher Arraya',
        linkedin: '#',
        photo: '/images/members/cohort-1/chris-arraya.jpg',
      },
      {
        name: 'David Villavicencio',
        linkedin: '#',
        photo: '/images/members/cohort-1/david-villa.jpg',
      },
      {
        name: 'Varun Divi',
        linkedin: '#',
        photo: '/images/members/cohort-1/varun.jpg',
      },
      {
        name: 'Gillian Zech',
        linkedin: '#',
        photo: '/images/members/cohort-1/gillian.jpg',
      },
      {
        name: 'Thomas Carriero',
        linkedin: '#',
        photo: '/images/members/cohort-1/thomas.jpg',
      },
    ],
  },
  {
    number: 0,
    members: [
      {
        name: 'Farouk Charkas',
        linkedin: '#',
        photo: '/images/members/cohort-0/farouk.jpg',
      },
      {
        name: 'Hamza Ishaque',
        linkedin: '#',
        photo: '/images/members/cohort-0/hamza.jpg',
      },
    ],
  },
];
