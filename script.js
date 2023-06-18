const text = "Hello Anveshika!";
const introElement = document.querySelector('.intro');
let index = 0;

function typeWriter() {
  if (index < text.length) {
    introElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100); // Adjust the typing speed here (in milliseconds)
  } else {
    setTimeout(fadeEffect, 5000); // Wait for 5 seconds and trigger fade effect
  }
}

function fadeEffect() {
  introElement.style.opacity = '0';
  introElement.addEventListener('transitionend', createDiaryBox); // Add event listener for transition end
}

function createDiaryBox() {
  introElement.removeEventListener('transitionend', createDiaryBox); // Remove event listener to prevent multiple triggers

  introElement.style.display = 'none';

  const diaryBox = document.createElement('div');
  diaryBox.className = 'diary-box';
  diaryBox.style.opacity = '0'; // Set initial opacity to 0 for fade-in effect

  const contentContainer = document.createElement('div');
  contentContainer.className = 'diary-content';

  const paragraph1 = document.createElement('p');
  paragraph1.className = 'entry-date'; // Add class for updating the date

  const paragraph2 = document.createElement('p');
  paragraph2.textContent = 'Dear Diary,';

  const paragraph3 = document.createElement('p');
  paragraph3.className = 'entry-content'; // Add class for updating the content

  contentContainer.appendChild(paragraph1);
  contentContainer.appendChild(paragraph2);
  contentContainer.appendChild(paragraph3);

  diaryBox.appendChild(contentContainer);
  document.body.appendChild(diaryBox);

  // Trigger the fade-in effect
  setTimeout(() => {
    diaryBox.style.opacity = '1';
    createMultipleDiaryEntries();
  }, 1000);
}

function createMultipleDiaryEntries() {
  const diaryBox = document.querySelector('.diary-box');
  const dateElement = diaryBox.querySelector('.entry-date');
  const contentElement = diaryBox.querySelector('.entry-content');

  const entries = [
       {
      date: 'May 16th, 2022',
      content: 'There was a new girl, her face was hidden, she was not like my current crush but for some reason, still, I felt something, she has a 9-letter name, so I will think of a nickname.',
    },
    {
      date: 'May 18th, 2022',
      content: 'I had a 4-letter suiting nickname but her friends used it before me, it was not unique anymore, so I will think of a new one.',
    },
    {
      date: 'June, 2022',
      content: 'Neglecting my toxicity, she wanted to help me, and I felt very happy.',
    },
    {
      date: 'June, 2022',
      content: 'She is really very kind with everyone. Uff, I want that girl in my life.',
    },
    {
      date: 'June, 2022',
      content: 'She removed her mask, she did not look like how I thought, but it did not create a single effect on how I felt for her.',
    },
    {
      date: 'June, 2022',
      content: 'I Love Her!',
    },
    {
      date: 'July 9th, 2022',
      content: 'I proposed to her, no yes or no, but I think we can grow something in between us.',
    },
    {
      date: 'July, 2022',
      content: 'We were stuck while returning, it was more than an hour, I enjoyed it, we got to know many things about each other.',
    },
    {
      date: 'October 23rd, 2022',
      content: 'She said "I Love You" for the first time!!!',
    },
    {
      date: 'October 27th, 2022',
      content: 'She gave me a little heart expressing her love and gave her first kiss!!!!!!!!!!!',
    },
    {
      date: 'October 29th, 2022',
      content: 'Everything is going to fall apart 😭, but I will try my best to save things. I cannot lose her.',
    },
    {
      date: 'February 19th, 2023',
      content: 'Today we meet for the final time at the coaching. Everything in between us is alright, and I hope our love continues to get stronger.',
    },
    {
      date: 'July 9th, 2023',
      content: 'Sure our love still goes on 😊, we completed a year together with fights, tears, pain, and laughter, and I hope we do continue this forever.',
    },
  ];

  entries.forEach((entry, index) => {
    const delay = (index + 1) * 5000; // Delay each entry by 5 seconds

    setTimeout(() => {
      updateDiaryEntry(dateElement, contentElement, entry.date, entry.content);

      if (index === entries.length - 1) {
        setTimeout(() => {
          diaryBox.style.opacity = '0'; // Fade out the last entry

          setTimeout(() => {
            displayAnniversaryMessage(); // Display "Happy Anniversary!" message after fade out
          }, 1000); // Wait 1 second before showing the message
        }, 2000); // Wait 2 seconds before fading out the last entry
      }
    }, delay);
  });
}

function displayAnniversaryMessage() {
  const anniversaryMessage = document.createElement('div');
  anniversaryMessage.className = 'anniversary-message';
  anniversaryMessage.textContent = 'Happy 1st Anniversary!';

  document.body.appendChild(anniversaryMessage);

  createConfetti();

  setTimeout(() => {
    anniversaryMessage.style.animation = 'zoomOut 5s ease-in-out forwards';
    removeConfetti();
    setTimeout(() => {
      createLoveContainer(); // Create the love container after the anniversary message
    }, 1000); // Wait 1 second before creating the love container
  }, 15000);
}

function createConfetti() {
  const confettiContainer = document.createElement('div');
  confettiContainer.className = 'confetti-container';

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDelay = `${Math.random() * 5}s`;
    confetti.style.animationDuration = `${Math.random() * 5 + 5}s`;

    const colorIndex = Math.floor(Math.random() * 4) + 1;
    confetti.style.backgroundColor = `var(--confetti-color-${colorIndex})`;

    confettiContainer.appendChild(confetti);
  }

  document.body.appendChild(confettiContainer);
}

function removeConfetti() {
  const confettiContainer = document.querySelector('.confetti-container');
  confettiContainer.style.animation = 'zoomOut 5s ease-in-out forwards';

  setTimeout(() => {
    confettiContainer.remove();
    const anniversaryMessage = document.querySelector('.anniversary-message');
    anniversaryMessage.remove();
  }, 5000);
}

function updateDiaryEntry(dateElement, contentElement, date, content) {
  dateElement.textContent = date;
  contentElement.textContent = content;
}

function createLoveContainer() {
  const loveContainer = document.createElement('div');
  loveContainer.id = 'love-container';

  const loveContent = document.createElement('div');
  loveContent.id = 'love-content';

  const loveMessage = document.createElement('p');
  loveMessage.textContent = `Can you believe it??? <br> We have completed a whole year together! <br> I never thought I would be so lucky to find a girl like you. 😊 <br> Since you came into my life, you have never left, even after knowing about my anger issues and past. <br> Instead, you happily helped me get over everything and become better every day. <br> My soul is so connected to you; it is hard to even imagine how things in my life would be without you. <br> I have a large amount of love, care, and trust in you which my words and actions might not be able to express. <br> But honestly, I truly mean it every time I say 'I Love You 💘'. <br> We have had many fights with each other in just a year and may have more in the days to come. <br> There might also be times when we will be extremely angry and upset with each other. <br> But I promise always to make you feel loved and happy whenever you may need. <br> I will always stand alongside you and support/help you. <br> There might also be times when we might get bored; it is okay and natural. <br> But I know, as you promised, that you'll never forget me 🙂 and nor will I. <br> I'll always keep in touch with you no matter what. <br> You're someone I never wanna lose.  <br> Congratulations on completing this lovable journey of a year with me, and I hope we continue with a lot of fun and laughter ahead too, my dear Anveshika! 💖🌟<br>  P.S. Always remember to share any problem with me, I might not always be able to help but, I'll sure make you feel better 🤗. <br> So as I said I'll propose to you in a new way, I'm going to, but don't take it very seriously (you can if you want but do it in the correct way! I'm not looking forward to freaking you out!!!). It is just a virtual symbol of our bond, love, care, and promises.`;

  const proposalButton = document.createElement('button');
  proposalButton.textContent = 'Click to get proposed again 😙';

  loveContent.appendChild(loveMessage);
  loveContent.appendChild(proposalButton);
  loveContainer.appendChild(loveContent);
  document.body.appendChild(loveContainer);

  proposalButton.addEventListener('click', handleProposalButtonClick);
}

function handleProposalButtonClick() {
  const loveContainer = document.getElementById('love-container');
  const loveContent = document.getElementById('love-content');

  loveContent.style.animation = 'fade-out 1s ease-in-out forwards';

  const image = document.createElement('img');
  image.src = 'case.png';
  image.className = 'proposal-image';
  document.body.appendChild(image);

  const note = document.createElement('div');
  note.className = 'proposal-note';
  note.innerHTML =
    'This is just an image of a ring, so this is not a real engagement 😅 (F.Y.I) <br> But still as a little game 😁: <br> - Do You accept me as a boy you will forever love (along Jung Kook)? <br> - Do You Accept me with all my flaws & make a promise to make me a better person? <br> - Do You Take the responsibility to take care of me? <br> - Will you always remain the same girl as you are now, with me forever? <br> - Will you always share all of your problems with me & take appropriate care of yourself too? <br> If You accept all of the conditions, then you may click the ring and proceed further.';
  document.body.appendChild(note);

  setTimeout(() => {
    loveContainer.remove();
    image.style.animation = 'slide-in 1s ease-in-out forwards';
    note.style.animation =
      'slide-in 1s ease-in-out forwards, fade-in 1s ease-in-out forwards';
  }, 1000);

  let imageClicked = false;

  function handleImageClick() {
    if (!imageClicked) {
      const existingMessageContainer = document.querySelector('.message-container');
      if (existingMessageContainer) {
        existingMessageContainer.remove();
      }

      const messageContainer = document.createElement('div');
      messageContainer.className = 'message-container';

      const messageText = document.createElement('p');
      messageText.innerHTML = `I'm very happy to complete a whole year & that you accepted me however I am, but I don't know this yet 😅.<br>
    So Head Over to our <a href="https://www.instagram.com/direct/t/17844315449757721/">Instagram chat</a> and say this - Happy 1 year with me, Dumbo!<br>
    To make me know that I have to be happier<br>
    And I Love You a lot and Thank You for all that you've given me since your arrival in my life! <br>
    and here is your ring, my life: <br>
    <img src="ring.png" alt="Ring Image" style="max-width: 30%; height: auto;">`;

      messageContainer.appendChild(messageText);
      document.body.appendChild(messageContainer);

      image.remove();
      note.remove();
      imageClicked = true;
    }
  }

  image.addEventListener('click', handleImageClick);
}

typeWriter();