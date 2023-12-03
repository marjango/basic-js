const { describe } = require('node:test');
const assert = require('node:assert');
const { test } = require('../lib');
const { isNotThrowingErrors } = require('../lib');
const { createDreamTeam } = require('../src/dream-team.js');

describe('Dream team', () => {
  // Presence requirement
  describe('function presence', () => {
    test('function createDreamTeam exists', () => {
      assert.strictEqual(typeof createDreamTeam, 'function');
    });
  });

  // Functional requirements
  describe('base requirements', () => {
    test('should return sequence from pre-sorted array', () => {
      assert.strictEqual(createDreamTeam(['Amelia', 'Grace', 'Lily', 'Ruby']), 'AGLR');
    });

    test('should return sorted sequence', () => {
      assert.strictEqual(
        createDreamTeam([
          'Peter',
          'Adam',
          'Gary',
          'Bobby',
          'Philip',
          'Andrea',
          'Evelyn',
          'Evelyn',
          'Kimberly',
          'Denise',
        ]),
        'AABDEEGKPP',
      );
      assert.strictEqual(
        createDreamTeam([
          'Eric',
          'Donald',
          'Justin',
          'Katherine',
          'Ethan',
          'Charles',
          'Frances',
          'Kimberly',
          'Noah',
          'Paul',
        ]),
        'CDEEFJKKNP',
      );
      assert.strictEqual(
        createDreamTeam([
          'Ann',
          'Nancy',
          'Nicholas',
          'Alexander',
          'Charles',
          'Johnny',
          'Philip',
          'Jeffrey',
          'Kenneth',
          'Raymond',
        ]),
        'AACJJKNNPR',
      );
      assert.strictEqual(
        createDreamTeam([
          'Ann',
          'Christian',
          'Douglas',
          'Justin',
          'Eugene',
          'Kayla',
          'Anthony',
          'Brian',
          'Adam',
          'Benjamin',
        ]),
        'AAABBCDEJK',
      );
      assert.strictEqual(
        createDreamTeam([
          'Alan',
          'Gregory',
          'Peter',
          'Nicole',
          'George',
          'Helen',
          'Denise',
          'Amy',
          'Danielle',
          'Heather',
        ]),
        'AADDGGHHNP',
      );
      assert.strictEqual(
        createDreamTeam([
          'Joan',
          'Gregory',
          'Abigail',
          'Brittany',
          'Nicole',
          'Sophia',
          'Joyce',
          'Juan',
          'Julie',
          'Joan',
        ]),
        'ABGJJJJJNS',
      );
      assert.strictEqual(
        createDreamTeam(['Alice', 'Joe', 'Janet', 'Pamela', 'Jacob', 'Larry', 'Diana', 'Gerald', 'Douglas', 'Keith']),
        'ADDGJJJKLP',
      );
      assert.strictEqual(
        createDreamTeam([
          'Karen',
          'Andrea',
          'Brandon',
          'Lawrence',
          'Megan',
          'Alexis',
          'Ann',
          'Kathryn',
          'Sharon',
          'Jonathan',
        ]),
        'AAABJKKLMS',
      );
      assert.strictEqual(
        createDreamTeam([
          'Kayla',
          'Bryan',
          'Sharon',
          'Anna',
          'Bruce',
          'Bobby',
          'Lauren',
          'Kathleen',
          'Joshua',
          'Andrew',
        ]),
        'AABBBJKKLS',
      );
      assert.strictEqual(
        createDreamTeam([
          'Carolyn',
          'Olivia',
          'Gary',
          'Ethan',
          'Dorothy',
          'Kelly',
          'Sean',
          'Jose',
          'Christopher',
          'Judy',
        ]),
        'CCDEGJJKOS',
      );
      assert.strictEqual(
        createDreamTeam([
          'Dylan',
          'Keith',
          'Madison',
          'Ralph',
          'Olivia',
          'Raymond',
          'Megan',
          'Frank',
          'Daniel',
          'Carol',
        ]),
        'CDDFKMMORR',
      );
      assert.strictEqual(
        createDreamTeam([
          'Gregory',
          'Kayla',
          'Kevin',
          'Benjamin',
          'Randy',
          'Sandra',
          'Alan',
          'Patrick',
          'Angela',
          'Katherine',
        ]),
        'AABGKKKPRS',
      );
      assert.strictEqual(
        createDreamTeam([
          'Evelyn',
          'Wayne',
          'Ryan',
          'Abigail',
          'Theresa',
          'Jack',
          'Austin',
          'Willie',
          'Judith',
          'Stephen',
        ]),
        'AAEJJRSTWW',
      );
      assert.strictEqual(
        createDreamTeam([
          'Teresa',
          'Austin',
          'Betty',
          'Evelyn',
          'Samantha',
          'Noah',
          'Christina',
          'Christian',
          'Anthony',
          'Jose',
        ]),
        'AABCCEJNST',
      );
      assert.strictEqual(
        createDreamTeam([
          'Ann',
          'Sean',
          'Kathleen',
          'Harold',
          'Beverly',
          'Anna',
          'Lawrence',
          'Diane',
          'Jesse',
          'Amber',
        ]),
        'AAABDHJKLS',
      );
      assert.strictEqual(
        createDreamTeam([
          'Austin',
          'Jordan',
          'Olivia',
          'Joyce',
          'Eugene',
          'Noah',
          'Zachary',
          'Emily',
          'Megan',
          'Nathan',
        ]),
        'AEEJJMNNOZ',
      );
      assert.strictEqual(
        createDreamTeam(['Diane', 'Denise', 'Olivia', 'Nancy', 'Ashley', 'Bruce', 'Maria', 'Megan', 'Gerald', 'Megan']),
        'ABDDGMMMNO',
      );
      assert.strictEqual(
        createDreamTeam([
          'Pamela',
          'Ryan',
          'Stephen',
          'Anthony',
          'Beverly',
          'Evelyn',
          'Amanda',
          'Jesse',
          'Ruth',
          'Joshua',
        ]),
        'AABEJJPRRS',
      );
      assert.strictEqual(
        createDreamTeam([
          'Christian',
          'Sophia',
          'Sandra',
          'Jerry',
          'Gregory',
          'Jonathan',
          'Joshua',
          'Theresa',
          'Rebecca',
          'Rose',
        ]),
        'CGJJJRRSST',
      );
      assert.strictEqual(
        createDreamTeam([
          'Lori',
          'Jack',
          'Nathan',
          'Kathryn',
          'Sharon',
          'Joan',
          'Stephanie',
          'Donna',
          'Christina',
          'Donald',
        ]),
        'CDDJJKLNSS',
      );
      assert.strictEqual(
        createDreamTeam(['Diana', 'Philip', 'Joe', 'Nicole', 'Nicholas', 'Aaron', 'Jane', 'Eric', 'Andrew', 'Jose']),
        'AADEJJJNNP',
      );
      assert.strictEqual(
        createDreamTeam([
          'Kayla',
          'Keith',
          'Dennis',
          'Carolyn',
          'Diane',
          'Timothy',
          'Sandra',
          'Laura',
          'Bryan',
          'Heather',
        ]),
        'BCDDHKKLST',
      );
      assert.strictEqual(
        createDreamTeam([
          'Diana',
          'Frances',
          'Emma',
          'Christopher',
          'Kathleen',
          'Lori',
          'Brittany',
          'Cynthia',
          'Dorothy',
          'Grace',
        ]),
        'BCCDDEFGKL',
      );
      assert.strictEqual(
        createDreamTeam([
          'Grace',
          'Sharon',
          'Ethan',
          'Jonathan',
          'Emily',
          'Nicholas',
          'Victoria',
          'Lawrence',
          'Beverly',
          'Victoria',
        ]),
        'BEEGJLNSVV',
      );
      assert.strictEqual(
        createDreamTeam(['Bobby', 'Kevin', 'Teresa', 'Betty', 'Lori', 'Joyce', 'Scott', 'Johnny', 'Cheryl', 'Ronald']),
        'BBCJJKLRST',
      );
      assert.strictEqual(
        createDreamTeam([
          'Patrick',
          'Gerald',
          'Sophia',
          'Nicholas',
          'Jesse',
          'Zachary',
          'Nicole',
          'Aaron',
          'George',
          'Nathan',
        ]),
        'AGGJNNNPSZ',
      );
      assert.strictEqual(
        createDreamTeam([
          'Russell',
          'Willie',
          'Sophia',
          'Gabriel',
          'Jane',
          'Gabriel',
          'Samuel',
          'Jesse',
          'Timothy',
          'Eugene',
        ]),
        'EGGJJRSSTW',
      );
      assert.strictEqual(
        createDreamTeam([
          'Henry',
          'Peter',
          'Amber',
          'Jordan',
          'Lauren',
          'Andrew',
          'Emma',
          'Gregory',
          'Kayla',
          'Deborah',
        ]),
        'AADEGHJKLP',
      );
      assert.strictEqual(
        createDreamTeam([
          'Dennis',
          'Kimberly',
          'Bryan',
          'Kyle',
          'Gregory',
          'Ruth',
          'Christina',
          'Vincent',
          'Noah',
          'Cheryl',
        ]),
        'BCCDGKKNRV',
      );
      assert.strictEqual(
        createDreamTeam([
          'Ryan',
          'Keith',
          'Deborah',
          'Jerry',
          'Gerald',
          'Janet',
          'Jacqueline',
          'Philip',
          'Heather',
          'Harold',
        ]),
        'DGHHJJJKPR',
      );
      assert.strictEqual(
        createDreamTeam([
          'Christina',
          'Austin',
          'Alice',
          'Beverly',
          'Margaret',
          'Jordan',
          'Janet',
          'Gregory',
          'Betty',
          'Cynthia',
        ]),
        'AABBCCGJJM',
      );
      assert.strictEqual(
        createDreamTeam([
          'Madison',
          'Walter',
          'Nancy',
          'Gloria',
          'Kevin',
          'Gabriel',
          'Helen',
          'Juan',
          'Sandra',
          'Brenda',
        ]),
        'BGGHJKMNSW',
      );
      assert.strictEqual(
        createDreamTeam([
          'Peter',
          'Heather',
          'Philip',
          'Hannah',
          'Amy',
          'Mark',
          'Karen',
          'Betty',
          'Karen',
          'Christina',
        ]),
        'ABCHHKKMPP',
      );
      assert.strictEqual(
        createDreamTeam([
          'Natalie',
          'Jordan',
          'Jordan',
          'Christine',
          'Ashley',
          'Shirley',
          'Gary',
          'Cynthia',
          'Juan',
          'Theresa',
        ]),
        'ACCGJJJNST',
      );
      assert.strictEqual(
        createDreamTeam(['Kathleen', 'Bruce', 'Nancy', 'Evelyn', 'Carl', 'Judy', 'Natalie', 'Keith', 'Jack', 'Grace']),
        'BCEGJJKKNN',
      );
      assert.strictEqual(
        createDreamTeam([
          'Sandra',
          'Stephen',
          'Angela',
          'Frances',
          'Amber',
          'Diana',
          'Ronald',
          'Louis',
          'Judy',
          'Jack',
        ]),
        'AADFJJLRSS',
      );
      assert.strictEqual(
        createDreamTeam([
          'Andrea',
          'Carol',
          'Katherine',
          'Evelyn',
          'Donald',
          'Stephanie',
          'Sharon',
          'Aaron',
          'Jose',
          'Evelyn',
        ]),
        'AACDEEJKSS',
      );
      assert.strictEqual(
        createDreamTeam([
          'Marilyn',
          'Adam',
          'Charles',
          'Lisa',
          'Bryan',
          'Aaron',
          'Marie',
          'Christine',
          'Nicole',
          'Catherine',
        ]),
        'AABCCCLMMN',
      );
      assert.strictEqual(
        createDreamTeam([
          'Theresa',
          'Jeffrey',
          'Justin',
          'Brenda',
          'Sharon',
          'Teresa',
          'Janet',
          'Jack',
          'Gerald',
          'Amber',
        ]),
        'ABGJJJJSTT',
      );
      assert.strictEqual(
        createDreamTeam([
          'Rachel',
          'Samantha',
          'Alan',
          'Carol',
          'Jeremy',
          'Bruce',
          'Carol',
          'Steven',
          'Christopher',
          'Jacqueline',
        ]),
        'ABCCCJJRSS',
      );
      assert.strictEqual(
        createDreamTeam([
          'Lawrence',
          'Noah',
          'Paul',
          'Megan',
          'Carol',
          'Kathryn',
          'Ralph',
          'Eugene',
          'Timothy',
          'Janet',
        ]),
        'CEJKLMNPRT',
      );
      assert.strictEqual(
        createDreamTeam([
          'Patrick',
          'Gabriel',
          'Amber',
          'Jacqueline',
          'Katherine',
          'Kelly',
          'Christian',
          'Evelyn',
          'Billy',
          'Lauren',
        ]),
        'ABCEGJKKLP',
      );
      assert.strictEqual(
        createDreamTeam([
          'Olivia',
          'Stephen',
          'Tyler',
          'Nicole',
          'Jordan',
          'Ruth',
          'Lisa',
          'Kathleen',
          'Jordan',
          'Angela',
        ]),
        'AJJKLNORST',
      );
      assert.strictEqual(
        createDreamTeam([
          'Peter',
          'Brian',
          'Ashley',
          'Patrick',
          'Austin',
          'Lisa',
          'Margaret',
          'Austin',
          'Nancy',
          'Eric',
        ]),
        'AAABELMNPP',
      );
      assert.strictEqual(
        createDreamTeam([
          'Jeffrey',
          'Mark',
          'Nicholas',
          'Hannah',
          'Lauren',
          'Evelyn',
          'Mark',
          'Adam',
          'Catherine',
          'Samuel',
        ]),
        'ACEHJLMMNS',
      );
      assert.strictEqual(
        createDreamTeam([
          'Frances',
          'Karen',
          'Laura',
          'Jonathan',
          'Andrew',
          'Debra',
          'Philip',
          'Jonathan',
          'Peter',
          'Donna',
        ]),
        'ADDFJJKLPP',
      );
      assert.strictEqual(
        createDreamTeam([
          'Scott',
          'Mark',
          'Lawrence',
          'Theresa',
          'Logan',
          'Ronald',
          'Sara',
          'Jeremy',
          'Alexander',
          'Ryan',
        ]),
        'AJLLMRRSST',
      );
      assert.strictEqual(
        createDreamTeam([
          'Carol',
          'Ethan',
          'Katherine',
          'Amanda',
          'Olivia',
          'Marilyn',
          'Jean',
          'Madison',
          'Karen',
          'Cynthia',
        ]),
        'ACCEJKKMMO',
      );
      assert.strictEqual(
        createDreamTeam([
          'Nathan',
          'Sophia',
          'Cheryl',
          'Nathan',
          'Austin',
          'Dorothy',
          'Jesse',
          'Marilyn',
          'Gary',
          'Carl',
        ]),
        'ACCDGJMNNS',
      );
      assert.strictEqual(
        createDreamTeam([
          'Carolyn',
          'Gabriel',
          'Henry',
          'Madison',
          'Heather',
          'Lori',
          'Cheryl',
          'Benjamin',
          'Jean',
          'Cynthia',
        ]),
        'BCCCGHHJLM',
      );
      assert.strictEqual(
        createDreamTeam([
          'Angela',
          'Denise',
          'Kayla',
          'Eugene',
          'Tyler',
          'Jeffrey',
          'Kathryn',
          'Stephen',
          'Ethan',
          'Jeremy',
        ]),
        'ADEEJJKKST',
      );
      assert.strictEqual(
        createDreamTeam([
          'Edward',
          'Carl',
          'Joyce',
          'Cheryl',
          'Gary',
          'Henry',
          'Philip',
          'Christina',
          'Edward',
          'Nicholas',
        ]),
        'CCCEEGHJNP',
      );
      assert.strictEqual(
        createDreamTeam([
          'Emma',
          'Danielle',
          'Albert',
          'Justin',
          'Edward',
          'Douglas',
          'Alexander',
          'Alan',
          'Terry',
          'Mark',
        ]),
        'AAADDEEJMT',
      );
      assert.strictEqual(
        createDreamTeam([
          'Austin',
          'Eric',
          'Catherine',
          'Theresa',
          'Kathleen',
          'Nicole',
          'Alexis',
          'Nathan',
          'Jacob',
          'Johnny',
        ]),
        'AACEJJKNNT',
      );
      assert.strictEqual(
        createDreamTeam([
          'Bruce',
          'Mark',
          'Marilyn',
          'Kyle',
          'Carolyn',
          'Marie',
          'Kenneth',
          'Lawrence',
          'Matthew',
          'Christine',
        ]),
        'BCCKKLMMMM',
      );
      assert.strictEqual(
        createDreamTeam([
          'Emma',
          'Christian',
          'Alan',
          'Beverly',
          'Nathan',
          'Peter',
          'Catherine',
          'Brenda',
          'Andrea',
          'Logan',
        ]),
        'AABBCCELNP',
      );
      assert.strictEqual(
        createDreamTeam([
          'Raymond',
          'Bruce',
          'Emily',
          'Jacob',
          'Nancy',
          'Lori',
          'Kathryn',
          'Vincent',
          'Raymond',
          'Janet',
        ]),
        'BEJJKLNRRV',
      );
      assert.strictEqual(
        createDreamTeam(['Kayla', 'Karen', 'Dylan', 'Debra', 'Kayla', 'Janet', 'Lauren', 'Louis', 'Hannah', 'Nathan']),
        'DDHJKKKLLN',
      );
      assert.strictEqual(
        createDreamTeam([
          'Carolyn',
          'Logan',
          'Mark',
          'Maria',
          'Bryan',
          'Laura',
          'Danielle',
          'Michelle',
          'Eric',
          'Debra',
        ]),
        'BCDDELLMMM',
      );
      assert.strictEqual(
        createDreamTeam([
          'Nicole',
          'George',
          'Charles',
          'Megan',
          'Andrea',
          'Judy',
          'Peter',
          'Matthew',
          'Helen',
          'Christina',
        ]),
        'ACCGHJMMNP',
      );
      assert.strictEqual(
        createDreamTeam([
          'Sandra',
          'Shirley',
          'Katherine',
          'Kyle',
          'Katherine',
          'Sean',
          'Jonathan',
          'Alice',
          'Adam',
          'Kyle',
        ]),
        'AAJKKKKSSS',
      );
      assert.strictEqual(
        createDreamTeam([
          'Dylan',
          'Arthur',
          'Laura',
          'Betty',
          'Anthony',
          'Stephanie',
          'Alan',
          'Marie',
          'Samantha',
          'Adam',
        ]),
        'AAAABDLMSS',
      );
      assert.strictEqual(
        createDreamTeam([
          'Danielle',
          'Albert',
          'Jesse',
          'Grace',
          'Vincent',
          'Margaret',
          'Alan',
          'Jose',
          'Emily',
          'Heather',
        ]),
        'AADEGHJJMV',
      );
      assert.strictEqual(
        createDreamTeam(['Ann', 'Louis', 'Kevin', 'Jeffrey', 'Jerry', 'Gary', 'Louis', 'Andrew', 'Janice', 'Austin']),
        'AAAGJJJKLL',
      );
      assert.strictEqual(
        createDreamTeam([
          'Frank',
          'Carolyn',
          'Stephen',
          'Shirley',
          'Carl',
          'Anthony',
          'Madison',
          'Anna',
          'Roger',
          'Jerry',
        ]),
        'AACCFJMRSS',
      );
      assert.strictEqual(
        createDreamTeam([
          'Christopher',
          'Zachary',
          'Frank',
          'Michelle',
          'Cynthia',
          'Nathan',
          'Deborah',
          'Hannah',
          'Jane',
          'Gary',
        ]),
        'CCDFGHJMNZ',
      );
      assert.strictEqual(
        createDreamTeam([
          'Kelly',
          'Austin',
          'Frances',
          'Frances',
          'Christian',
          'Douglas',
          'Andrew',
          'Andrew',
          'Diana',
          'Raymond',
        ]),
        'AAACDDFFKR',
      );
      assert.strictEqual(
        createDreamTeam(['Cynthia', 'Sharon', 'Jesse', 'Eric', 'Abigail', 'Judy', 'Jonathan', 'Joe', 'Cynthia', 'Ann']),
        'AACCEJJJJS',
      );
      assert.strictEqual(
        createDreamTeam(['Theresa', 'Cynthia', 'Kayla', 'Evelyn', 'Aaron', 'Joshua', 'Kyle', 'Dylan', 'Betty', 'Ann']),
        'AABCDEJKKT',
      );
      assert.strictEqual(
        createDreamTeam([
          'Deborah',
          'Ruth',
          'Betty',
          'Stephanie',
          'Anna',
          'Judy',
          'Jeremy',
          'Abigail',
          'Ronald',
          'Christine',
        ]),
        'AABCDJJRRS',
      );
      assert.strictEqual(
        createDreamTeam([
          'George',
          'Brian',
          'Christine',
          'Charles',
          'Bruce',
          'Philip',
          'Johnny',
          'Steven',
          'Brandon',
          'Mark',
        ]),
        'BBBCCGJMPS',
      );
      assert.strictEqual(
        createDreamTeam([
          'Kathleen',
          'Zachary',
          'Ryan',
          'Martha',
          'Marilyn',
          'Laura',
          'Bruce',
          'Olivia',
          'Donald',
          'Deborah',
        ]),
        'BDDKLMMORZ',
      );
      assert.strictEqual(
        createDreamTeam([
          'Julia',
          'Marie',
          'Lawrence',
          'Melissa',
          'Mark',
          'Teresa',
          'Alice',
          'Scott',
          'Edward',
          'Gregory',
        ]),
        'AEGJLMMMST',
      );
      assert.strictEqual(
        createDreamTeam([
          'Johnny',
          'Margaret',
          'Sharon',
          'Julie',
          'Gloria',
          'Danielle',
          'Cheryl',
          'Betty',
          'Joe',
          'Stephen',
        ]),
        'BCDGJJJMSS',
      );
      assert.strictEqual(
        createDreamTeam([
          'Ruth',
          'Johnny',
          'Noah',
          'Nicholas',
          'Jesse',
          'Hannah',
          'Shirley',
          'Bobby',
          'Roy',
          'Raymond',
        ]),
        'BHJJNNRRRS',
      );
      assert.strictEqual(
        createDreamTeam([
          'Mark',
          'Catherine',
          'Alan',
          'Aaron',
          'Betty',
          'Kathryn',
          'Jesse',
          'Christine',
          'Danielle',
          'Evelyn',
        ]),
        'AABCCDEJKM',
      );
      assert.strictEqual(
        createDreamTeam([
          'Patrick',
          'Daniel',
          'Bryan',
          'Rebecca',
          'Debra',
          'Angela',
          'Juan',
          'Kelly',
          'Olivia',
          'Diana',
        ]),
        'ABDDDJKOPR',
      );
      assert.strictEqual(
        createDreamTeam(['Raymond', 'Kevin', 'Roy', 'Paul', 'Laura', 'Samuel', 'Jack', 'Sara', 'Julia', 'Janice']),
        'JJJKLPRRSS',
      );
      assert.strictEqual(
        createDreamTeam([
          'Willie',
          'Debra',
          'Daniel',
          'Vincent',
          'Carolyn',
          'Jason',
          'Brenda',
          'Joe',
          'Brandon',
          'Lawrence',
        ]),
        'BBCDDJJLVW',
      );
      assert.strictEqual(
        createDreamTeam([
          'Philip',
          'Tyler',
          'Jacob',
          'Samantha',
          'Beverly',
          'Doris',
          'Jordan',
          'Melissa',
          'Brittany',
          'Nicole',
        ]),
        'BBDJJMNPST',
      );
      assert.strictEqual(
        createDreamTeam([
          'Karen',
          'Theresa',
          'Marie',
          'Jacob',
          'Douglas',
          'Evelyn',
          'Sharon',
          'George',
          'Madison',
          'Kayla',
        ]),
        'DEGJKKMMST',
      );
      assert.strictEqual(
        createDreamTeam(['Jose', 'Daniel', 'Emma', 'Nancy', 'Janice', 'Martha', 'Jane', 'Betty', 'Nicholas', 'Kyle']),
        'BDEJJJKMNN',
      );
      assert.strictEqual(
        createDreamTeam([
          'Vincent',
          'Karen',
          'Bruce',
          'Nancy',
          'Christina',
          'Edward',
          'Amber',
          'Debra',
          'George',
          'Lori',
        ]),
        'ABCDEGKLNV',
      );
      assert.strictEqual(
        createDreamTeam(['Ethan', 'Donna', 'Vincent', 'Timothy', 'Edward', 'Eric', 'Hannah', 'Henry', 'Lori', 'Joyce']),
        'DEEEHHJLTV',
      );
      assert.strictEqual(
        createDreamTeam([
          'Kathleen',
          'Julie',
          'Noah',
          'Dylan',
          'Sandra',
          'Heather',
          'Diana',
          'Melissa',
          'Aaron',
          'Terry',
        ]),
        'ADDHJKMNST',
      );
      assert.strictEqual(
        createDreamTeam([
          'Paul',
          'Roger',
          'Marilyn',
          'Victoria',
          'Amber',
          'Vincent',
          'Sandra',
          'Benjamin',
          'Sean',
          'Kyle',
        ]),
        'ABKMPRSSVV',
      );
      assert.strictEqual(
        createDreamTeam([
          'Helen',
          'Deborah',
          'Bradley',
          'Sandra',
          'Michelle',
          'Shirley',
          'Theresa',
          'Brenda',
          'Lisa',
          'Anna',
        ]),
        'ABBDHLMSST',
      );
      assert.strictEqual(
        createDreamTeam([
          'Donald',
          'Bruce',
          'Edward',
          'Kimberly',
          'Randy',
          'Rebecca',
          'Alice',
          'Katherine',
          'Alan',
          'Samantha',
        ]),
        'AABDEKKRRS',
      );
      assert.strictEqual(
        createDreamTeam([
          'Frank',
          'Jonathan',
          'Ethan',
          'Helen',
          'Jordan',
          'Ashley',
          'Bradley',
          'Jane',
          'Gregory',
          'Pamela',
        ]),
        'ABEFGHJJJP',
      );
      assert.strictEqual(
        createDreamTeam(['Lauren', 'Sean', 'Laura', 'Nancy', 'Roy', 'Samuel', 'Hannah', 'Sandra', 'Shirley', 'Eugene']),
        'EHLLNRSSSS',
      );
      assert.strictEqual(
        createDreamTeam([
          'Abigail',
          'Vincent',
          'Jacob',
          'Sean',
          'Brian',
          'Donna',
          'Bryan',
          'Stephen',
          'Ruth',
          'Gabriel',
        ]),
        'ABBDGJRSSV',
      );
      assert.strictEqual(
        createDreamTeam([
          'Catherine',
          'Walter',
          'Rachel',
          'Brandon',
          'Lori',
          'Kimberly',
          'Keith',
          'Brandon',
          'Johnny',
          'Anna',
        ]),
        'ABBCJKKLRW',
      );
      assert.strictEqual(
        createDreamTeam([
          'Laura',
          'Stephanie',
          'Lisa',
          'Steven',
          'Rebecca',
          'Dorothy',
          'Peter',
          'Matthew',
          'Logan',
          'Frank',
        ]),
        'DFLLLMPRSS',
      );
      assert.strictEqual(
        createDreamTeam([
          'Brenda',
          'Terry',
          'Karen',
          'Deborah',
          'Samantha',
          'Roy',
          'Helen',
          'Victoria',
          'Adam',
          'Michelle',
        ]),
        'ABDHKMRSTV',
      );
      assert.strictEqual(
        createDreamTeam([
          'Martha',
          'Melissa',
          'Terry',
          'Pamela',
          'Lawrence',
          'Russell',
          'Stephen',
          'Heather',
          'Walter',
          'Amy',
        ]),
        'AHLMMPRSTW',
      );
      assert.strictEqual(
        createDreamTeam(['Kayla', 'Brian', 'Logan', 'Sharon', 'Ruth', 'Jean', 'Joyce', 'Sara', 'Diana', 'Edward']),
        'BDEJJKLRSS',
      );
      assert.strictEqual(
        createDreamTeam([
          'Keith',
          'Donna',
          'Lawrence',
          'Sophia',
          'Jack',
          'Kyle',
          'Andrew',
          'Natalie',
          'Deborah',
          'Noah',
        ]),
        'ADDJKKLNNS',
      );
      assert.strictEqual(
        createDreamTeam([
          'Sophia',
          'Margaret',
          'Maria',
          'Wayne',
          'Julie',
          'Samantha',
          'Deborah',
          'Diana',
          'Bruce',
          'Jacob',
        ]),
        'BDDJJMMSSW',
      );
      assert.strictEqual(
        createDreamTeam([
          'Kevin',
          'Timothy',
          'Jeffrey',
          'Albert',
          'Laura',
          'Karen',
          'Steven',
          'Diana',
          'Sandra',
          'Emma',
        ]),
        'ADEJKKLSST',
      );
    });

    test("empty team shouldn't lead to error", function () {
      const res = isNotThrowingErrors.call(this, [() => createDreamTeam([])]);
      assert.strictEqual(res, true);
    });
  });

  describe('functional requirements ', () => {
    test('should handle whitespaces', () => {
      assert.strictEqual(
        createDreamTeam([
          '   William Alston ',
          ' Paul Benacerraf',
          '  Ross Cameron',
          '       Gilles Deleuze',
          '  Arda Denkel ',
          '  Michael Devitt',
          '  Kit Fine',
          ' Nelson Goodman',
          'David Kolb',
          '   Saul Kripke',
          '  Trenton Merricks',
          '  Jay Rosenberg',
        ]),
        'ADGJKMNPRSTW',
      );
    });
    test('should handle lowercase', () => {
      assert.strictEqual(
        createDreamTeam([
          'amelia',
          'ruby',
          'lily',
          'grace',
          'millie',
          'daisy',
          'freya',
          'erin',
          'megan',
          'jasmine',
          'brooke',
        ]),
        'ABDEFGJLMMR',
      );
    });
    test('should return false on wrong type', () => {
      assert.strictEqual(createDreamTeam(3), false);
      assert.strictEqual(createDreamTeam(3.312312), false);
      assert.strictEqual(createDreamTeam(false), false);
      assert.strictEqual(createDreamTeam(null), false);
      assert.strictEqual(createDreamTeam(undefined), false);
      assert.strictEqual(createDreamTeam({ foo: 'bar' }), false);
    });
    test('should ignore non-string values', () => {
      assert.strictEqual(
        createDreamTeam([
          'Amelia',
          null,
          undefined,
          'Ruby',
          'Lily',
          11,
          'Grace',
          22,
          'Millie',
          'Daisy',
          true,
          'Freya',
          false,
          'Erin',
          new Set([1, 2, 3, 4, 5]),
          'Megan',
          {
            John: 'Smith',
          },
          'Jasmine',
          1,
          2,
          3,
          4,
          5,
          'Brooke',
        ]),
        'ABDEFGJLMMR',
      );
    });
    test('should handle non-standard cases', () => {
      assert.strictEqual(
        createDreamTeam([
          ['David Abram'],
          ['Robin Attfield'],
          'Thomas Berry',
          ['Paul R.Ehrlich'],
          'donna Haraway',
          ' BrIaN_gOodWiN  ',
          {
            0: 'Serenella Iovino',
          },
          'Erazim Kohak',
          '  val_plumwood',
        ]),
        'BDETV',
      );
    });
  });
});
