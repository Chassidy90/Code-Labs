import { Injectable } from '@angular/core';

export interface Game {
  category: string,
  name: string,
  description: string,
  imageURL: string,
  type:string
}

@Injectable({
  providedIn: 'root',
})
export class GameService {
  games: Game[] = [
    {
      category: 'Hand-Management-Games',
      name: 'Uno',
      description: 'Players race to empty their hands and catch opposing players with cards left in theirs, which score points. In turns, players attempt to play a card by matching its color, number, or word to the topmost card on the discard pile. If unable to play, players draw a card from the draw pile, and if still unable to play, they pass their turn. Wild and special cards spice things up a bit.',
      imageURL: 'https://th.bing.com/th/id/OIP.SQhxDtWhroEgyi4neO78cAHaD4?w=328&h=180&c=7&r=0&o=5&pid=1.7',
      type: 'old',
    },
    {
      category: 'Hand-Management-Games',
      name: 'Scout',
      description: 'SCOUT is a ladder-climbing game in which cards have two potential values, players may not rearrange their hand of cards, and players may pass their turn to take a card from the current high set of cards into their hand.',
      imageURL: 'https://cf.geekdo-images.com/cf0xxkevbwTGF3VUZymKjg__itemrep/img/SBOXfC-WOg_Iko_2lHw3VMymsow=/fit-in/246x300/filters:strip_icc()/pic6398727.png',
      type: 'new',
    },
    {
      category: 'Hand-Management-Games',
      name: 'Skip-Bo',
      description: 'Each player is dealt a stockpile of 30 cards. The winner will be whoever manages to empty their stockpile first. Cards are played onto four shared building piles in numerical sequence from 1 to 12. On each turn, a player draws until they have five cards in their hand, and then plays cards from: their hand, a top card of their discard piles, or their stockpile. At the end of their turn, a player must discard onto one of their four personal discard piles. Strategy involves the organizing of cards into the discard piles, care in not setting up the next players for good plays, knowing when to play from which option, and especially the timing of playing a valuable "Skip-bo" wildcard',
      imageURL: 'https://cf.geekdo-images.com/K747P83EEOELWmajg3gdIA__itemrep/img/hsc6ZPFSeau6PFS1qbtic7FXQX8=/fit-in/246x300/filters:strip_icc()/pic5134553.jpg',
      type: 'old',
    },
    {
      category: 'Hand-Management-Games',
      name: 'Lost Cities',
      description: '',
      imageURL: 'https://th.bing.com/th/id/OIP.DjhuJd3JumpZznt8bf8uJQHaCS?w=305&h=108&c=7&r=0&o=5&pid=1.7',
      type: 'new',
    },
    {
      category: 'Hand-Management-Games',
      name: 'Jaipur',
      description: 'You are one of the two most powerful traders in the city of Jaipur, the capital of Rajasthan, but thats not enough for you because only the merchant with two "seals of excellence" will have the privilege of being invited to the Maharaja s court. You are therefore going to have to do better than your direct competitor by buying, exchanging, and selling at better prices, all while keeping an eye on both your camel herds.',
      imageURL: 'https://cdn11.bigcommerce.com/s-vwb3hwm6im/images/stencil/1920w/products/1338/535/original__21113.1594419359.jpg?c=1',
      type: 'new',
    },
    {
      category: 'Set Collection',
      name: 'Canasta',
      description: 'Classic rummy where you aim to meld same-rank cards into high-scoring canastas',
      imageURL: 'https://th.bing.com/th/id/OIP.6AzaZ3Td_kQWVUgc2xntgwHaHa?w=193&h=193&c=7&r=0&o=5&pid=1.7',
      type: 'old',
    },
    {
      category: 'Set Collection',
      name: 'Rummy',
      description: 'Race to get rid of the cards in your hands by playing matched sets to the table!',
      imageURL: 'https://th.bing.com/th/id/OIP.unombJakC5njmTehLD7zNAHaE8?w=260&h=180&c=7&r=0&o=5&pid=1.7',
      type: 'old',
    },
    {
      category: 'Set Collection',
      name: 'Ticket To Ride',
      description: 'With elegantly simple gameplay, Ticket to Ride can be learned in under 15 minutes. Players collect cards of various types of train cars they then use to claim railway routes in North America. The longer the routes, the more points they earn. Additional points come to those who fulfill Destination Tickets – goal cards that connect distant cities; and to the player who builds the longest continuous route',
      imageURL: 'https://th.bing.com/th/id/OIP.MWIPZzsurIB9WLZes85waQHaFj?w=255&h=191&c=7&r=0&o=5&pid=1.7',
      type: 'new',
    },
    {
      category: 'Set Collection',
      name: 'Sushi Go',
      description: 'Sushi Go! takes the card-drafting mechanism of Fairy Tale and 7 Wonders and distills it into a twenty-minute game that anyone can play. The dynamics of "draft and pass" are brought to the fore, while keeping the rules to a minimum. As you see the first few hands of cards, you must quickly assess the make-up of the round and decide which type of sushi you will go for. Then, each turn you will need to weigh which cards to keep and which to pass on. The different scoring combinations allow for some clever plays and nasty blocks. Round to round, you must also keep your eye on the goal of having the most pudding cards at the end of the game',
      imageURL: 'https://th.bing.com/th/id/OIP.pj4EHJU4_V5Hx7Hv2eapFAHaHH?w=200&h=193&c=7&r=0&o=5&pid=1.7',
      type: 'new',
    },
    {
      category: 'Set Collection',
      name: 'Royals',
      description: 'In Royals, players take on the roles of the great noble houses of the 17th century, fighting for supremacy in Europe at that time. With the help of the right country cards, they occupy influential positions and obtain bonuses for this in the form of victory points. The higher the rank of the title associated with the position, the more country cards required. Already-occupied positions can be contested by playing intrigue cards.',
      imageURL: 'https://cf.geekdo-images.com/Un-yHPPUaH7IpTfiG7ffkw__itemrep/img/M1wnBTum_4jnmRE3dIMASUk-g8c=/fit-in/246x300/filters:strip_icc()/pic3021582.jpg',
      type: 'new',
    },
    {
      category: 'War/Area Control',
      name: 'Risk',
      description: 'Will you conquer the world in this multi-player push-your-luck wargame?',
      imageURL: 'https://th.bing.com/th/id/OIP.yYlQtVqxsC0pfkRt_pibKAHaFj?w=277&h=208&c=7&r=0&o=5&pid=1.7',
      type: 'old',
    },
    {
      category: 'War/Area Control',
      name: 'Axis & Allies',
      description: 'It depicts WWII on a grand scale, full global level. Up to five players can play on two different teams. The Axis which has Germany and Japan, and the Allies which has the USA, the United Kingdom, and the USSR. A full map of the world is provided, broken up in various chunks similar to Risk. The game comes with gobs of plastic miniatures that represent various military units during WWII. Players have at their disposal infantry, armor, fighters, bombers, battleships, aircraft carriers, submarines, troop transports, anti-air guns, and factories. All of the units perform differently and many have special functions. Players have to work together with their teammates in order to coordinate offenses and decide how best to utilize their production points. Players also have the option of risking production resources on the possibility of developing a super technology that might turn the tide of war.',
      imageURL: 'https://cf.geekdo-images.com/pWUe-w4DpXdcmH6GqbZqCw__itemrep/img/NfcWlfpNPWd9-AKDLRFHK8GZ-xI=/fit-in/246x300/filters:strip_icc()/pic24006.jpg',
      type: 'old',
    },
    {
      category: 'War/Area Control',
      name: 'Cosmic Encounter',
      description: 'Players represent alien races that are seeking to spread themselves onto five foreign worlds. To accomplish this, they make challenges against other players and enlist the aid of interested parties. But alien powers, which are unique to each race, give players ways to bend or outright break some rule in the game.',
      imageURL: 'https://cf.geekdo-images.com/S8cE-Ld7XP5sVz-upKJ-Bg__itemrep/img/1jghBEL53dxF3twlsYyNTNWTPp0=/fit-in/246x300/filters:strip_icc()/pic1521633.jpg',
      type: 'old',
    },
    {
      category: 'War/Area Control',
      name: 'Undaunted',
      description: 'Undaunted: Normandy is a deck-building game that places you and your opponent in command of American or German forces, fighting through a series of missions critical to the outcome of World War II. Use your cards to seize the initiative, bolster your forces, or control your troops on the battlefield. Strong leadership can turn the tide of battle in your favor, but reckless decisions could prove catastrophic as every casualty you take removes a card from your deck. Take charge amidst the chaos of battle, hold fast in the face of opposition, and remain undaunted.',
      imageURL: 'https://cf.geekdo-images.com/iCd6hMGDzsQ_UXh00iKsJA__itemrep/img/LR0HO28eZ1_RJ-LzH5pylC2lkPU=/fit-in/246x300/filters:strip_icc()/pic4602347.jpg',
      type: 'new',
    },
    {
      category: 'War/Area Control',
      name: 'The Godfather',
      description: 'In short, the game is a streamlined, confrontational worker placement game filled with murder and intrigue. You play as competing mafia families who are vying for economic control of the organized crime networks of New York City, deploying your thugs, your don, your wife, and your heir on the board to shake down businesses and engage in area-control turf wars.The game also features drive-by shootings in which enemy tokens are removed from the board and placed face-down in the river.',
      imageURL: 'https://cf.geekdo-images.com/umGE4fOLYylHloIvw5bitA__itemrep/img/QzNC3UI614S7Fg49w_pA19SBEms=/fit-in/246x300/filters:strip_icc()/pic3364797.jpg',
      type: 'new',
    },
    {
      category: 'War/Area Control',
      name: 'Root',
      description: 'Root is a game of adventure and war in which 2 to 4 players battle for control of a vast wilderness. In Root, players drive the narrative, and the differences between each role create an unparalleled level of interaction and replayability. ',
      imageURL: 'https://th.bing.com/th/id/OIP.x5xwdIrzzPjpPzw09WsihQHaEl?w=301&h=186&c=7&r=0&o=5&pid=1.7',
      type: 'new',
    },
    {
      category: 'War/Area Control',
      name: 'Memoir 44',
      description: 'Memoir 44 includes over 15 different battle scenarios and features a double-sided hex game board for both beach landings and countryside combat. Each scenario mimics the historical terrain, troop placements and objectives of each army. Commanders deploy troops through Command and Tactic cards, applying the unique skills of his units -- infantry, paratrooper, tank, artillery, and even resistance fighters -- to their greatest strength.',
      imageURL: 'https://th.bing.com/th/id/OIP.Dacy8xJ6Odp5EIpoU0FyywHaHa?w=197&h=196&c=7&r=0&o=5&pid=1.7',
      type: 'new',
    },
    {
      category: 'Deduction',
      name: 'Clue',
      description: 'Catch the culprit of a crime by identifying who did it, with what, and where.',
      imageURL: 'https://th.bing.com/th/id/OIP.UC_7ykp_SFIuliZwRj4CiwHaE8?w=292&h=195&c=7&r=0&o=5&pid=1.7',
      type: 'old',
    },
    {
      category: 'Deduction',
      name: 'Battleship',
      description: 'Each player deploys his ships (of lengths varying from 2 to 5 squares) secretly on a square grid. Then each player shoots at the other players grid by calling a location. The defender responds by "Hit!" or "Miss!". You try to deduce where the enemy ships are and sink them. First to do so wins.',
      imageURL: 'https://cf.geekdo-images.com/tz4NBJ-dnzenmAaZiQsh-A__imagepage/img/OgHAC1eEU-eVNKO7W7pJn_jxQ5M=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6000.jpg',
      type: 'old',
    },
    {
      category: 'Deduction',
      name: 'Picture Perfect',
      description: 'How do you take the perfect picture of a group of people if you only have one try? Each character has different wishes. Some want to be at the front of the picture; some want to stand next to another; and some really do not want to be next to that one particular person by any means. Do your best to make everyone happy – even if you do not actually know all the characters preferences',
      imageURL: 'https://cf.geekdo-images.com/_kJpXHMlDAwxCIlbKJEKkg__imagepage/img/FUtb1rrb4U__tzYZitscETy1_eI=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6433351.jpg',
      type: 'new',
    },
    {
      category: 'Deduction',
      name: 'Bang: The Dice Game',
      description: 'BANG! The Dice Game keeps the core of the Bang! card game in place. At the start of the game, players each take a role card that secretly places them on a team: the Sheriff and deputies, outlaws, and renegades. The Sheriff and deputies need to kill the outlaws, the outlaws win by killing the Sheriff, and the renegades want to be the last players alive in the game.',
      imageURL: 'https://cf.geekdo-images.com/o4gciMvbEEaTnAlswYIHkQ__imagepage/img/gUH0L5gMJTZl4-GF-qYeyD_ZrdE=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1833756.jpg',
      type: 'new',
    },
    {
      category: 'Deduction',
      name: 'Deception: Murder in Hong Kong',
      description: 'In the game, players take on the roles of investigators attempting to solve a murder case – but there is a twist. The killer is one of the investigators! Each player has a role and teams are randomly assigned at the start of play and include the unique roles of Forensic Scientist, Witness, Investigator, Murderer, and Accomplice. While the Investigators attempt to deduce the truth, the murderer and his/her team must deceive and mislead. This is a battle of wits!',
      imageURL: 'https://cf.geekdo-images.com/1COY3oeK9aN2_XNimKaNww__itemrep/img/cAOvicFEw8eQs6D9b2G4E7MTp00=/fit-in/246x300/filters:strip_icc()/pic3033330.jpg',
      type: 'new',
    },
    {
      category: 'Economic/Negotiation',
      name: 'Monopoly',
      description: 'Players take the part of land owners, attempting to buy and then develop their land. Income is gained by other players visiting their properties and money is spent when they visit properties belonging to other players. When times get tough, players may have to mortgage their properties to raise cash for fines, taxes and other misfortunes.',
      imageURL: 'https://th.bing.com/th/id/OIP.rM_UHo_HD8OI3soNRfFcXwAAAA?w=154&h=180&c=7&r=0&o=5&pid=1.7',
      type: 'old',
    },
    {
      category: 'Economic/Negotiation',
      name: 'The Game of Life',
      description: 'This game attempts to mirror life events many people go through from going to college, raising a family, buying a home, working and retiring. The intent of the game is to have the most assets at the end of the game, assets are earned primarily by working and earning tokens with dollar amounts on them. Additionally the first person to complete the course gets additional money tokens.',
      imageURL: 'https://cf.geekdo-images.com/-kBhrNVAXbhOjoUyr9iU8Q__imagepage/img/qwUPmc5g1CLe4cCrwv8FqcoklmU=/fit-in/900x600/filters:no_upscale():strip_icc()/pic279073.jpg',
      type: 'old',
    },
    {
      category: 'Economic/Negotiation',
      name: 'Careers',
      description: 'Careers is a game where the players set their own victory conditions. A player may choose to pursue Fame, Happiness, Money, or a combination of all three. The limitation being that the total number of "points" earned in the 3 categories must total 60. eg. 60 Happiness, 0 Fame, 0 Money; 20 of each; or any other combination. The players endeavor to fulfill their goal by going through any number of different "occupation paths". All paths have some prerequisite for entry, and benefits accrue from going through any of the paths more than once. The different occupations are designed to be suited to different strategies, eg. Hollywood is good for fame points, while "Going to Sea" is good for happiness. In the end it is the player (or team of players) who gets to their pre-set goal first who will be the winner, and achieve everything they ever wanted in life.',
      imageURL: 'https://cf.geekdo-images.com/TXlZ-Mlx4nMSiyU9Iftg7g__imagepage/img/ZnYMiWyh7zXt_K0uJbXu9j-nL2U=/fit-in/900x600/filters:no_upscale():strip_icc()/pic170131.jpg',
      type: 'old',
    },
    {
      category: 'Economic/Negotiation',
      name: '7 Wonders',
      description: 'You are the leader of one of the 7 great cities of the Ancient World. Gather resources, develop commercial routes, and affirm your military supremacy. Build your city and erect an architectural wonder which will transcend future times.',
      imageURL: 'https://cf.geekdo-images.com/RvFVTEpnbb4NM7k0IF8V7A__imagepage/img/zruHYxY2_jx-796WgsDj7hitidQ=/fit-in/900x600/filters:no_upscale():strip_icc()/pic860217.jpg',
      type: 'new',
    },
    {
      category: 'Economic/Negotiation',
      name: 'Century: Spice Road',
      description: 'In Century: Spice Road, players are caravan leaders who travel the famed silk road to deliver spices to the far reaches of the continent for fame and glory.The last round is triggered once a player has claimed their fifth victory point card, then whoever has the most victory points wins. ',
      imageURL: 'https://cf.geekdo-images.com/0_KEDk4lCvryf1Ju3YQJxA__itemrep/img/PIGqkIIFQ2YAAe7XzKWArEPVjoc=/fit-in/246x300/filters:strip_icc()/pic3339551.jpg',
      type: 'new',
    },
    {
      category: 'Economic/Negotiation',
      name: 'Catan',
      description: 'In CATAN (formerly The Settlers of Catan), players try to be the dominant force on the island of Catan by building settlements, cities, and roads. On each turn, dice are rolled to determine what resources the island produces. Players build by spending resources that are depicted by the resource cards; each land type, with the exception of the unproductive desert, produces a specific resource. When a player has gathered 10 points, he announces his total and claims the win. ',
      imageURL: 'https://cf.geekdo-images.com/W3Bsga_uLP9kO91gZ7H8yw__itemrep/img/IzYEUm_gWFuRFOL8gQYqGm5gU6A=/fit-in/246x300/filters:strip_icc()/pic2419375.jpg',
      type: 'new',
    },
    {
      category: 'Word',
      name: 'Scrabble',
      description: 'In this classic word game, players use their seven drawn letter-tiles to form words on the gameboard. Each word laid out earns points based on the commonality of the letters used, with certain board spaces giving bonuses. But a word can only be played if it uses at least one already-played tile or adds to an already-played word. This leads to slightly tactical play, as potential words are rejected because they would give an opponent too much access to the better bonus spaces',
      imageURL: 'https://th.bing.com/th/id/OIP.4wPQaQ2wNvPiCJl0CcWQrgHaFp?w=258&h=197&c=7&r=0&o=5&pid=1.7',
      type: 'old',
    },
    {
      category: 'Word',
      name: 'Boggle',
      description: 'Boggle is a timed word game in which players have 3 minutes to find as many connected words as possible from the face up letters resting in a 16 cube grid. When the timer runs out, players compare their lists of words and remove any words found by multiple players. Points are then awarded for remaining words, depending on how many letters are in the word',
      imageURL: 'https://th.bing.com/th/id/OIP.gr6IrD_6ohhSORs7c-1WrAHaE7?w=296&h=197&c=7&r=0&o=5&pid=1.7',
      type: 'old',
    },
    {
      category: 'Word',
      name: 'Taboo',
      description: 'Taboo is a party word game. Players take turns describing a word or phrase on a drawn card to their partner without using five common additional words or phrases also on the card. The opposing partners watch a timer and use a buzzer to stop the game, buzz the player describing if one of the five off-limits words or phrases is used, or if the describing player makes any gestures. The describing team gets a point for each card they guess successfully and the opposing team gets a point for each card they pass on, make gestures on, or lose for saying one of the off-limits words or phrases.',
      imageURL: 'https://cf.geekdo-images.com/e8wVvax1VqQkgCu_AST5Aw__itemrep/img/kCAyJ3Op3W6Af7VZYfp0muh3DVM=/fit-in/246x300/filters:strip_icc()/pic212946.jpg',
      type: 'old',
    },
    {
      category: 'Word',
      name: 'Just One',
      description: 'Just One is a cooperative party game in which you play together to discover as many mystery words as possible. Find the best clue to help your teammate. Be unique, as all identical clues will be cancelled!',
      imageURL: 'https://cf.geekdo-images.com/ocAuKT9hp99yBY77e4uuPg__itemrep/img/z0G8pfPvUewTm8apjBQHq0qkwAw=/fit-in/246x300/filters:strip_icc()/pic5137279.jpg',
      type: 'new',
    },
    {
      category: 'Word',
      name: 'Unspeakable Words',
      description: 'In Unspeakable Words, based on the works of H.P. Lovecraft, use your hand of cards to form words to score, determined by the number of angles in the letters. But you must be careful, because every misstep could cost you, since you must test the strength of your mind against each word’s point value by rolling a 20-sided die. Succeed, and you’re safe, for now...fail, however, and you take one step closer to madness! ',
      imageURL: 'https://th.bing.com/th/id/OIP.-O5z5VQovd_f2E1lX7GudgHaG-?w=224&h=211&c=7&r=0&o=5&pid=1.7',
      type: 'new',
    },
    {
      category: 'Word',
      name: 'Paperback',
      description: 'Word-building meets deck-building in the unique game Paperback. Players start with a deck of letter cards and wild cards. Each hand they form words, and purchase more powerful letters based on how well their word scored. Most letters have abilities that activate when they are used in a word, such as drawing more cards or double letter score. Players buy wilds to gain victory points.',
      imageURL: 'https://cf.geekdo-images.com/iZl2U-2BjftbWfLw5y25Vg__itemrep/img/q0jh-ilPLYilMgq_LUePnruriKM=/fit-in/246x300/filters:strip_icc()/pic7069377.jpg',
      type: 'new',
    },
    {
      category: 'Drawing/Party',
      name: 'Pictionary',
      description: 'Guess what you team is drawing so you can Win, Lose, or Draw.',
      imageURL: 'https://th.bing.com/th/id/OIP.rXY_iYiglGu1N0eqA3WzCwHaDF?w=294&h=145&c=7&r=0&o=5&pid=1.7',
      type: 'old',
    },
    {
      category: 'Drawing/Party',
      name: 'Scattegories',
      description: 'List as many words as you can that begin with a certain letter before time runs out.',
      imageURL: 'https://cf.geekdo-images.com/eIL4hvMb7ZPgizc7BZOh-g__itemrep/img/ZP9ziIGKJd5ZCJ1NfBceuFpg7TA=/fit-in/246x300/filters:strip_icc()/pic4994410.jpg',
      type: 'old',
    },
    {
      category: 'Drawing/Party',
      name: 'Balderdash',
      description: 'Balderdash contains several cards with real words nobody has heard of. After one of those words has been read aloud, players try to come up with definitions that at least sound plausible, because points are later awarded for every opposing player who guessed that your definition was the correct one.',
      imageURL: 'https://cf.geekdo-images.com/T7xV1J1ExLk0GcSYOAlmHQ__imagepage/img/qUb0-NbrLs90EQ874uXNLRVVvTk=/fit-in/900x600/filters:no_upscale():strip_icc()/pic181032.jpg',
      type: 'old',
    },
    {
      category: 'Drawing/Party',
      name: 'Tattoo Stories',
      description: 'Tattoo Stories is a drawing party game in which your art skills don’t matter. In a series of quick-paced tattoo competitions, win the most points by making up tattoos and telling the best stories. Compete to get your tattoo and story selected.',
      imageURL: 'https://cf.geekdo-images.com/ia0wZiPthpIhV45JWEZMDA__imagepage/img/qI8HuLyCJiz8Hh46VkyZSjuVMLo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4656081.png',
      type: 'new',
    },
    {
      category: 'Drawing/Party',
      name: 'Telestrations',
      description: 'Guess what they drew, then draw what they guessed, and see how funny the changes get.',
      imageURL: 'https://cf.geekdo-images.com/oc3u6OQpJkf9TvDw4iI9xA__itemrep/img/f-hzQAafIdz-Po3uC_U4hZp-RnY=/fit-in/246x300/filters:strip_icc()/pic4991936.jpg',
      type: 'new',
    },
    {
      category: 'Drawing/Party',
      name: 'Cash N Guns',
      description: 'Do you have the nerves for a Mexican standoff? Walk away rich or end up on the floor. In an abandoned warehouse a gangster band is splitting its loot, but they can’t get an agreement on the split! It’s time to let the guns talk and soon everyone is aiming at everyone. The richest surviving gangster wins the game!',
      imageURL: 'https://th.bing.com/th/id/OIP.c2gN6U78xlIhCmHi6Pp9HwHaFj?w=244&h=183&c=7&r=0&o=5&pid=1.7',
      type: 'new',
    },
    {
      category: 'Push You Luck',
      name: 'Cant Stop',
      description: 'Roll dice to claim three columns. Risk everything earned this turn with each roll',
      imageURL: 'https://cf.geekdo-images.com/nMitZr9Lu4Ux7LLqBy7Z8A__itemrep/img/VTp3Is-x92JR0IcHJIG8QDL22EQ=/fit-in/246x300/filters:strip_icc()/pic6875169.png',
      type: 'old',
    },
    {
      category: 'Push Your Luck',
      name: 'Blackjack',
      description: 'Push your luck to get as close as you can to 21. But do not go over or you are done!',
      imageURL: 'https://th.bing.com/th/id/OIP.4DLWR78c3TMbQs8wGYSTXwHaHa?w=174&h=180&c=7&r=0&o=5&pid=1.7',
      type: 'old',
    },
    {
      category: 'Push Your Luck',
      name: 'Port Royal',
      description: 'The 120-card deck depicts a coin on the back of each card — with players earning and paying coins throughout the game — and different items on the card fronts. On a turn, a player can first draw as many cards as he likes, one at a time from the deck, placing them in the harbor. When one player has at least twelve influence points  the game is played to the end of the round, giving everyone the same number of turns, then the player with the most influence points wins. ',
      imageURL: 'https://th.bing.com/th/id/OIP.L2-IeBR93Whdv-LMsDQVCAHaJm?w=110&h=180&c=7&r=0&o=5&pid=1.7',
      type: 'new',
    },
    {
      category: 'Push Your Luck',
      name: 'Zombie Dice',
      description: 'In Zombie Dice, you are a zombie. You want braaains – more brains than any of your zombie buddies. The 13 custom dice are your victims. Push your luck to eat their brains, but stop rolling before the shotgun blasts end your turn! Whoever collects 13 brains first wins.',
      imageURL: 'https://cf.geekdo-images.com/iPy584JMAJYrupqRdQp8gA__itemrep/img/-eoNaJ0RxYQ0vxngXn-HnMU_PY4=/fit-in/246x300/filters:strip_icc()/pic4991962.jpg',
      type: 'new',
    },
    {
      category: 'Push Your Luck',
      name: 'Quacks of Quedlinburg',
      description: 'In The Quacks of Quedlinburg, players are charlatans — or quack doctors — each making their own secret brew by adding ingredients one at a time. Take care with what you add, though, for a pinch too much of this or that will spoil the whole mixture!',
      imageURL: 'https://cf.geekdo-images.com/pH5LgRL4mNRon-2NsSDb1Q__itemrep/img/qe9ywOTxtPr_n4DoXZgEY-C2qU0=/fit-in/246x300/filters:strip_icc()/pic6137509.png',
      type: 'new',
    },
    {
      category: '',
      name: '',
      description: '',
      imageURL: '',
      type: '',
    },
    {
      category: '',
      name: '',
      description: '',
      imageURL: '',
      type: '',
    },
    {
      category: '',
      name: '',
      description: '',
      imageURL: '',
      type: '',
    },
    {
      category: '',
      name: '',
      description: '',
      imageURL: '',
      type: '',
    },
    {
      category: '',
      name: '',
      description: '',
      imageURL: '',
      type: '',
    },
    {
      category: '',
      name: '',
      description: '',
      imageURL: '',
      type: '',
    },
    {
      category: '',
      name: '',
      description: '',
      imageURL: '',
      type: '',
    },
    {
      category: '',
      name: '',
      description: '',
      imageURL: '',
      type: '',
    },
    {
      category: '',
      name: '',
      description: '',
      imageURL: '',
      type: '',
    },
    {
      category: '',
      name: '',
      description: '',
      imageURL: '',
      type: '',
    },



  ];

  // search(keyword: string) {
  //   return this.games.filter((g) => {

  //   });
  // }

  getOldGames() {
    return this.games.slice().filter((game) => {
      if (game.type === 'old') {
        return game
      }
    });
  }

  getNewGames() {
    return this.games.slice().filter((game) => {
      if (game.type === 'new') {
        return game
      }
    });
  }


}
