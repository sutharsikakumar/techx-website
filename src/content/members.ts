/**
 * Member directory, shown on /members.
 *
 * To add a member:
 *   1. Drop their photo in /public/images/members/cohort-{n}/{slug}.jpg
 *      (portrait, 4:5, at least 600 × 750).
 *   2. Add an entry to that cohort's `members` list below:
 *        { name: 'Jane Doe', linkedin: 'https://www.linkedin.com/in/janedoe', photo: '/images/members/cohort-8/jane-doe.jpg' }
 *      Leave out `photo` to show the placeholder silhouette.
 *      Photos are automatically cropped and shrunk to small WebP files before
 *      `npm run dev` / `npm run build` (scripts/optimize-member-photos.mjs), so
 *      original-size files are fine here.
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
        linkedin: 'https://www.linkedin.com/in/maleea-moebes',
        photo: '/images/members/cohort-8/maleea.jpg',
      },
      {
        name: 'Shom Tailor',
        linkedin: 'https://www.linkedin.com/in/shom-tailor',
        photo: '/images/members/cohort-8/shom.png',
      },
      {
        name: 'Josiah Annoh',
        linkedin: 'https://www.linkedin.com/in/josiah-annoh-',
        photo: '/images/members/cohort-8/josiah.png',
      },
      {
        name: 'Nikita Chincholkar',
        linkedin: 'https://www.linkedin.com/in/nikitachincholkar',
        photo: '/images/members/cohort-8/nikita.jpg',
      },
      {
        name: 'Micah Edwards',
        linkedin: 'https://www.linkedin.com/in/micah-edwards-5a330a2b3',
        photo: '/images/members/cohort-8/micah.png',
      },
      {
        name: 'Lyla Goldman',
        linkedin: 'https://www.linkedin.com/in/lylagoldman',
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
        linkedin: 'https://www.linkedin.com/in/eduard-pugachov',
        photo: '/images/members/cohort-7/eduard.jpg',
      },
      {
        name: 'Lillian Copplestone',
        linkedin: 'https://www.linkedin.com/in/lillian-copplestone',
        photo: '/images/members/cohort-7/lillian.png',
      },
      {
        name: 'Maxamillian Karia',
        linkedin: 'https://www.linkedin.com/in/maximillian-karia-97770737a',
        photo: '/images/members/cohort-7/maxamillian.png',
      },
      {
        name: 'Mokshashree Nemalipuri',
        linkedin: '#',
        photo: '/images/members/cohort-7/mokshashree.png',
      },
      {
        name: 'Robert McCallum',
        linkedin: 'https://www.linkedin.com/in/robert-julian-mccallum',
        photo: '/images/members/cohort-7/robert.png',
      },
      {
        name: 'Vihaan Kerekatte',
        linkedin: 'https://www.linkedin.com/in/vihaan-kerekatte',
        photo: '/images/members/cohort-7/vihaan.png',
      },
      {
        name: 'Yutian Gong',
        linkedin: 'https://www.linkedin.com/in/yutian-gong-unc29',
        photo: '/images/members/cohort-7/yutian.png',
      },
      {
        name: 'Aditya Karthikeyan',
        linkedin: 'https://www.linkedin.com/in/aditya-karthikeyan',
        photo: '/images/members/cohort-7/aditya.png',
      },
      {
        name: 'Colin Volpe',
        linkedin: '#',
        photo: '/images/members/cohort-7/colin.jpg',
      },
      {
        name: 'Yadunand Sreelesh',
        linkedin: 'https://www.linkedin.com/in/yadunand-sreelesh',
        photo: '/images/members/cohort-7/yadunand.jpg',
      },
      {
        name: 'Jack Scutari',
        linkedin: 'https://www.linkedin.com/in/jackscutari',
        photo: '/images/members/cohort-7/jack.png',
      },
    ],
  },
  {
    number: 6,
    members: [
      {
        name: 'Ananya Valati',
        linkedin: 'https://www.linkedin.com/in/ananyavalati',
        photo: '/images/members/cohort-6/ananya.png',
      },
      {
        name: 'Joseph Sabo',
        linkedin: 'https://www.linkedin.com/in/josephsabo29',
        photo: '/images/members/cohort-6/joseph.png',
      },
      {
        name: 'Riya Jain',
        linkedin: 'https://www.linkedin.com/in/riyajain2025',
        photo: '/images/members/cohort-6/riya.png',
      },
      {
        name: 'Wakeland Branz',
        linkedin: 'https://www.linkedin.com/in/wakeland',
        photo: '/images/members/cohort-6/wakeland.png',
      },
      {
        name: 'Aryan Gera',
        linkedin: '#',
        photo: '/images/members/cohort-6/aryan.jpg',
      },
      {
        name: 'Xiyuan Shen',
        linkedin: 'https://www.linkedin.com/in/xiyuan-shen-13a41b2b1',
        photo: '/images/members/cohort-6/xiyuan.png',
      },
      {
        name: 'Alexandre Tourneux',
        linkedin: 'https://www.linkedin.com/in/alexandre-tourneux',
        photo: '/images/members/cohort-6/alexandre.jpg',
      },
      {
        name: 'Meghana Kanamurlapudi',
        linkedin: 'https://www.linkedin.com/in/meghanakanamurlapudi',
        photo: '/images/members/cohort-6/meghana.png',
      },
    ],
  },
  {
    number: 5,
    members: [
      {
        name: 'Rio Kuchlyan',
        linkedin: 'https://www.linkedin.com/in/riokuchlyan',
        photo: '/images/members/cohort-5/rio.jpg',
      },
      {
        name: 'Kennedy Cameron',
        linkedin: '#',
        photo: '/images/members/cohort-5/kennedy.jpg',
      },
      {
        name: 'Adhvytha Srigopal',
        linkedin: 'https://www.linkedin.com/in/adhvythasrigopal',
        photo: '/images/members/cohort-5/adhvytha.png',
      },
      {
        name: 'Ben Luis',
        linkedin: 'https://www.linkedin.com/in/ben-luis-6273a32b2',
        photo: '/images/members/cohort-5/ben.jpg',
      },
      {
        name: 'Justin Han',
        linkedin: 'https://www.linkedin.com/in/justin-l-han',
        photo: '/images/members/cohort-5/justin.jpg',
      },
      {
        name: 'Conor Jones',
        linkedin: '#',
        photo: '/images/members/cohort-5/conor.jpg',
      },
      {
        name: 'Sutharsika Kumar',
        linkedin: 'https://www.linkedin.com/in/sutharsikakumar',
        photo: '/images/members/cohort-5/sutharsika.jpg',
      },
      {
        name: 'Betsy George',
        linkedin: 'https://www.linkedin.com/in/betsy-george-ihotu',
        photo: '/images/members/cohort-5/betsy.jpg',
      },
      {
        name: 'Ibrahim Mohsin',
        linkedin: 'https://www.linkedin.com/in/ibrahim-mohsin-16a1b8261',
        photo: '/images/members/cohort-5/ibrahim.jpg',
      },
      {
        name: 'Aditi Nayak',
        linkedin: 'https://www.linkedin.com/in/aditi-nayak1',
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
        linkedin: 'https://www.linkedin.com/in/nabiha-choudhury',
        photo: '/images/members/cohort-4/nabiha.jpg',
      },
      {
        name: 'Sahil Kapadia',
        linkedin: 'https://www.linkedin.com/in/sahil-kapadia01',
        photo: '/images/members/cohort-4/sahil.jpg',
      },
      {
        name: 'Sven Reyes',
        linkedin: 'https://www.linkedin.com/in/svenreyes',
        photo: '/images/members/cohort-4/sven.jpg',
      },
      {
        name: 'Lucas Moore',
        linkedin: 'https://www.linkedin.com/in/lucas-moore-unc',
        photo: '/images/members/cohort-4/lucas.jpg',
      },
      {
        name: 'Dmitrii Pavlov',
        linkedin: 'https://www.linkedin.com/in/dmitrii-pavlov-852913299',
        photo: '/images/members/cohort-4/dimitrii.jpg',
      },
      {
        name: 'Krish Vazirani',
        linkedin: 'https://www.linkedin.com/in/krishvazirani',
        photo: '/images/members/cohort-4/krish.jpg',
      },
      {
        name: 'Harsehaj Dhami',
        linkedin: 'https://www.linkedin.com/in/harsehaj',
        photo: '/images/members/cohort-4/harsehaj.jpg',
      },
      {
        name: 'Caleb Free',
        linkedin: 'https://www.linkedin.com/in/caleb-free',
        photo: '/images/members/cohort-4/caleb.jpg',
      },
    ],
  },
  {
    number: 3,
    members: [
      {
        name: 'Grace Odondi',
        linkedin: 'https://www.linkedin.com/in/grace-odondi',
        photo: '/images/members/cohort-3/grace.jpg',
      },
      {
        name: 'Nathan Santiago',
        linkedin: 'https://www.linkedin.com/in/nathan-santiago',
        photo: '/images/members/cohort-3/nathan.jpg',
      },
      {
        name: "Joel D'Silva",
        linkedin: 'https://www.linkedin.com/in/joaquimdsilva',
        photo: '/images/members/cohort-3/joel.jpg',
      },
      {
        name: 'Nicolas Zhang',
        linkedin: 'https://www.linkedin.com/in/nicolas-zhang-2a559821b',
        photo: '/images/members/cohort-3/nicolas.jpg',
      },
      {
        name: 'Krisha Avula',
        linkedin: 'https://www.linkedin.com/in/krisha-avula',
        photo: '/images/members/cohort-3/krisha.jpg',
      },
      {
        name: 'Aidan Lee',
        linkedin: 'https://www.linkedin.com/in/aidan-j-lee',
        photo: '/images/members/cohort-3/aiden.jpg',
      },
      {
        name: 'Kerry Creech',
        linkedin: 'https://www.linkedin.com/in/kerry-creech-b36b772aa',
        photo: '/images/members/cohort-3/kerry.png',
      },
      {
        name: 'Advik Arora',
        linkedin: 'https://www.linkedin.com/in/advikarora',
        photo: '/images/members/cohort-3/advik.jpg',
      },
      {
        name: 'Owen McAllister',
        linkedin: 'https://www.linkedin.com/in/owen-mcallister',
        photo: '/images/members/cohort-3/owen.jpg',
      },
      {
        name: 'Kiara Smith',
        linkedin: 'https://www.linkedin.com/in/kiara-smith-b1b518294',
        photo: '/images/members/cohort-3/kiara.jpg',
      },
    ],
  },
  {
    number: 2,
    members: [
      {
        name: 'Pranav Kosuri',
        linkedin: 'https://www.linkedin.com/in/pranav-kosuri',
        photo: '/images/members/cohort-2/pranav.jpg',
      },
      {
        name: 'Luke Briden',
        linkedin: 'https://www.linkedin.com/in/luke-briden',
        photo: '/images/members/cohort-2/luke.jpg',
      },
      {
        name: 'Nicholas Copland',
        linkedin: '#',
        photo: '/images/members/cohort-2/nicholas.jpg',
      },
      {
        name: 'Neha Bharadwaj',
        linkedin: 'https://www.linkedin.com/in/nehab4',
        photo: '/images/members/cohort-2/neha.jpg',
      },
      {
        name: 'Minjae Kung',
        linkedin: 'https://www.linkedin.com/in/minjae',
        photo: '/images/members/cohort-2/minjae.jpg',
      },
      {
        name: 'Sean Blizard',
        linkedin: 'https://www.linkedin.com/in/sean-blizard',
        photo: '/images/members/cohort-2/sean-blizard.jpg',
      },
      {
        name: 'Sushant Marella',
        linkedin: 'https://www.linkedin.com/in/sushant-marella',
        photo: '/images/members/cohort-2/sushant.jpg',
      },
      {
        name: 'Mihir Sharma',
        linkedin: 'https://www.linkedin.com/in/mihirsharma15',
        photo: '/images/members/cohort-2/mihir.png',
      },
      {
        name: 'Alex Sieni',
        linkedin: 'https://www.linkedin.com/in/alex-sieni-172709248',
        photo: '/images/members/cohort-2/alex-sieni.jpg',
      },
      {
        name: 'Ansh Aryan',
        linkedin: 'https://www.linkedin.com/in/ansh-aryan03',
        photo: '/images/members/cohort-2/ansh.jpg',
      },
      {
        name: 'Arya Gavande',
        linkedin: 'https://www.linkedin.com/in/arya-gavande',
        photo: '/images/members/cohort-2/arya-gavande.jpg',
      },
    ],
  },
  {
    number: 1,
    members: [
      {
        name: 'Kayla Nesbitt',
        linkedin: 'https://www.linkedin.com/in/kayla-nesbitt-315b84217',
        photo: '/images/members/cohort-1/kayla.jpg',
      },
      {
        name: 'James Dankwah',
        linkedin: 'https://www.linkedin.com/in/james-dankwah',
        photo: '/images/members/cohort-1/james-dankwah.jpg',
      },
      {
        name: 'Armaan Punj',
        linkedin: 'https://www.linkedin.com/in/armaan-punj',
        photo: '/images/members/cohort-1/armaan.jpg',
      },
      {
        name: 'Thomas Smith',
        linkedin: 'https://www.linkedin.com/in/tssmith0603',
        photo: '/images/members/cohort-1/thomas-smith.jpg',
      },
      {
        name: 'Aryan Choudhary',
        linkedin: 'https://www.linkedin.com/in/aryanc1027',
        photo: '/images/members/cohort-1/aryan-choudhury.jpg',
      },
      {
        name: 'Destiny Okonkwo',
        linkedin: 'https://www.linkedin.com/in/destiny-okonkwo',
        photo: '/images/members/cohort-1/destiny.jpg',
      },
      {
        name: 'Christopher Arraya',
        linkedin: 'https://www.linkedin.com/in/cjarraya',
        photo: '/images/members/cohort-1/chris-arraya.jpg',
      },
      {
        name: 'David Villavicencio',
        linkedin: 'https://www.linkedin.com/in/david-s-villavicencio',
        photo: '/images/members/cohort-1/david-villa.jpg',
      },
      {
        name: 'Varun Divi',
        linkedin: 'https://www.linkedin.com/in/varun-divi',
        photo: '/images/members/cohort-1/varun.jpg',
      },
      {
        name: 'Gillian Zech',
        linkedin: 'https://www.linkedin.com/in/gillian-zech-compling',
        photo: '/images/members/cohort-1/gillian.jpg',
      },
      {
        name: 'Thomas Carriero',
        linkedin: 'https://www.linkedin.com/in/thomas-carriero',
        photo: '/images/members/cohort-1/thomas.jpg',
      },
    ],
  },
  {
    number: 0,
    members: [
      {
        name: 'Farouk Charkas',
        linkedin: 'https://www.linkedin.com/in/faroukcharkas',
        photo: '/images/members/cohort-0/farouk.jpg',
      },
      {
        name: 'Hamza Ishaque',
        linkedin: 'https://www.linkedin.com/in/hamza-ishaque',
        photo: '/images/members/cohort-0/hamza.jpg',
      },
    ],
  },
];
