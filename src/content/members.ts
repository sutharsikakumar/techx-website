/**
 * Member directory, shown on /members.
 *
 * To add a member:
 *   1. Drop their photo in /public/images/members/cohort-{n}/{slug}.jpg
 *      (portrait, 4:5, at least 600 × 750).
 *   2. Add an entry to that cohort's `members` list below:
 *        { name: 'Jane Doe', linkedin: 'https://www.linkedin.com/in/janedoe', photo: '/images/members/cohort-8/jane-doe.jpg' }
 *      Leave out `photo` to show the placeholder silhouette.
 *   LinkedIn links are '#' until each member's profile URL is filled in.
 *
 * Cohorts can be in any order here; the page sorts them newest first.
 */

export type Member = { name: string; linkedin: string; photo?: string };
export type Cohort = { number: number; members: Member[] };

export const cohorts: Cohort[] = [
  {
    number: 8,
    members: [
      { name: 'Maleea Moebes', linkedin: '#' },
      { name: 'Shom Tailor', linkedin: '#' },
      { name: 'Josiah Annoh', linkedin: '#' },
      { name: 'Nikita Chincholkar', linkedin: '#' },
      { name: 'Micah Edwards', linkedin: '#' },
      { name: 'Lyla Goldman', linkedin: '#' },
      { name: 'Rashmi Ruppa', linkedin: '#' },
      { name: 'Avika Mishra', linkedin: '#' },
      { name: 'Ruthwik Dhama', linkedin: '#' },
    ],
  },
  {
    number: 7,
    members: [
      { name: 'Eduard Pugachov', linkedin: '#' },
      { name: 'Lillian Copplestone', linkedin: '#' },
      { name: 'Maxamillian Karia', linkedin: '#' },
      { name: 'Mokshashree Nemalipuri', linkedin: '#' },
      { name: 'Robert McCallum', linkedin: '#' },
      { name: 'Vihaan Kerekatte', linkedin: '#' },
      { name: 'Yutian Gong', linkedin: '#' },
      { name: 'Aditya Karthikeyan', linkedin: '#' },
      { name: 'Colin Volpe', linkedin: '#' },
      { name: 'Yadunand Sreelesh', linkedin: '#' },
      { name: 'Jack Scutari', linkedin: '#' },
    ],
  },
  {
    number: 6,
    members: [
      { name: 'Ananya Valati', linkedin: '#' },
      { name: 'Joseph Sabo', linkedin: '#' },
      { name: 'Riya Jain', linkedin: '#' },
      { name: 'Wakeland Branz', linkedin: '#' },
      { name: 'Aryan Gera', linkedin: '#' },
      { name: 'Xiyuan Shen', linkedin: '#' },
      { name: 'Alexandre Tourneux', linkedin: '#' },
      { name: 'Meghana Kanamurlapudi', linkedin: '#' },
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
