<script lang="ts">
  import { onMount } from 'svelte';
  import VibeModal from '$lib/components/VibeModal.svelte';
  import MacbookIcon from '../lib/icons/MacbookIcon.svelte';
  import VSCodeIcon from '../lib/icons/VSCodeIcon.svelte';
  import CopilotIcon from '../lib/icons/CopilotIcon.svelte';

  let showModal = false;
  let confettiActive = false;
  let vibeCheckProgress = 0;
  let progressInterval: ReturnType<typeof setInterval>;
  let currentJoke = '';

  // Function to get a random joke
  function getRandomJoke() {
    return dadJokes[Math.floor(Math.random() * dadJokes.length)];
  }

  // Handler for new joke requests
  function handleNewJoke() {
    currentJoke = getRandomJoke();
  }

  onMount(() => {
    // Add event listener for new joke requests
    window.addEventListener('newJoke', handleNewJoke);

    // Clean up the event listener when component is destroyed
    return () => {
      window.removeEventListener('newJoke', handleNewJoke);
    };
  });

  function handleClick() {
    // Start the vibe check progress
    vibeCheckProgress = 0;
    showModal = true;

    // Simulate a progress check
    progressInterval = setInterval(() => {
      vibeCheckProgress += 1;
      if (vibeCheckProgress >= 100) {
        clearInterval(progressInterval);
        completeVibeCheck();
      }
    }, 20);
  }

  function completeVibeCheck() {
    confettiActive = true;

    // Generate a new random joke each time the check completes
    currentJoke = getRandomJoke();

    // Reset confetti after a while
    setTimeout(() => {
      confettiActive = false;
    }, 5000);
  }

  function closeModal() {
    showModal = false;
    confettiActive = false;
    clearInterval(progressInterval);
  }

  // Dad jokes array
  const dadJokes = [
    'Why do programmers prefer dark mode? Because light attracts bugs!',
    'I told my wife she was drawing her eyebrows too high. She looked surprised!',
    'What do you call a fake noodle? An impasta!',
    "Why don't scientists trust atoms? Because they make up everything!",
    'How do you organize a space party? You planet!',
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
    "What's the best thing about Switzerland? I don't know, but the flag is a big plus!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "Why couldn't the bicycle stand up by itself? It was two tired!",
    'Did you hear about the claustrophobic astronaut? He just needed a little space!',
    'Why did the scarecrow win an award? Because he was outstanding in his field!',
    "I would tell you a construction joke, but I'm still working on it!",
    'Why did the coffee file a police report? It got mugged!',
  ];
</script>

<main>
  <div class="container">
    <h1 class="rainbow-header">Vibe Stack Developer</h1>

    <button class="vibe-button" on:click={handleClick}>Vibe Check Me</button>

    <h2>What is Vibe Coding?</h2>
    <p>
      <strong>Vibe coding</strong> is the art of software development where your intuition and natural
      language guide the creation process more than rigid syntax and technical specifications.
    </p>
    <p>
      In the age of AI, coding is evolving from meticulously writing every line to expressing your
      intention and collaborating with AI to manifest it.
    </p>
    <p>
      Rather than obsessing over semicolons and brackets, vibe coding emphasizes communicating the
      essence of what you want to build. It's about setting the right tone, describing your vision
      clearly, and letting AI tools help translate your ideas into functional code.
    </p>
    <p>
      Vibe coding isn't about replacing traditional programming skills—it's about augmenting them
      with conversational approaches that make development more accessible and intuitive. It's
      coding by feel, by intention, by vibe.
    </p>
    <p>
      <em
        >Welcome to the future where building software is becoming as natural as having a
        conversation.</em
      >
    </p>

    <h2>Vibe Coder Tools</h2>
    <ul>
      <li>
        <MacbookIcon /> MacBook Pro
      </li>
      <li>
        <VSCodeIcon /> Visual Studio Code
      </li>
      <li>
        <CopilotIcon /> GitHub Copilot
      </li>
    </ul>

    {#if showModal}
      <VibeModal {vibeCheckProgress} {confettiActive} {currentJoke} {closeModal} />
    {/if}
  </div>
</main>

<style>
  main {
    padding: 2em;
    max-width: 800px;
    margin: 0 auto;
    font-family:
      -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
  }

  h1 {
    color: var(--primary);
    font-size: 2.5em;
    margin-bottom: 0.5em;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  button {
    background-color: #3498db;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 1rem;
  }

  button:hover {
    background-color: #2980b9;
  }

  .rainbow-header {
    animation: rainbowText 2s linear infinite;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 2.5rem;
    text-shadow:
      0 0 5px rgba(255, 255, 255, 0.8),
      0 0 10px currentColor;
    transform-origin: center;
  }

  /* Add a subtle pulse effect for extra flash */
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.03);
    }
    100% {
      transform: scale(1);
    }
  }

  .rainbow-header {
    animation:
      rainbowText 2s linear infinite,
      pulse 1.5s ease-in-out infinite;
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }

  @keyframes rainbowText {
    0% {
      color: #ff0000;
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.7);
    }
    16% {
      color: #ff8000;
      text-shadow: 0 0 10px rgba(255, 128, 0, 0.7);
    }
    32% {
      color: #ffff00;
      text-shadow: 0 0 10px rgba(255, 255, 0, 0.7);
    }
    48% {
      color: #00ff00;
      text-shadow: 0 0 10px rgba(0, 255, 0, 0.7);
    }
    64% {
      color: #00ffff;
      text-shadow: 0 0 10px rgba(0, 255, 255, 0.7);
    }
    80% {
      color: #a020f0;
      text-shadow: 0 0 10px rgba(160, 32, 240, 0.7);
    }
    100% {
      color: #ff0000;
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.7);
    }
  }

  .rainbow-header {
    animation: rainbowText 2s linear infinite;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 2.5rem;
    text-shadow:
      0 0 5px rgba(255, 255, 255, 0.8),
      0 0 10px currentColor;
    transform-origin: center;
  }

  /* Add a subtle pulse effect for extra flash */
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.03);
    }
    100% {
      transform: scale(1);
    }
  }

  .rainbow-header {
    animation:
      rainbowText 2s linear infinite,
      pulse 1.5s ease-in-out infinite;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  ul li {
    font-size: 1.2rem;
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  p strong {
    color: var(--primary);
  }

  p em {
    font-style: italic;
    color: var(--secondary);
  }
</style>
