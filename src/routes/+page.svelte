<script>
  import { onMount } from 'svelte';
  let showModal = false;
  let confettiActive = false;
  let vibeCheckProgress = 0;
  let progressInterval;

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

  // Generate a random dad joke
  const dadJokes = [
    'Why do programmers prefer dark mode? Because light attracts bugs!',
    'I told my wife she was drawing her eyebrows too high. She looked surprised!',
    'What do you call a fake noodle? An impasta!',
    "Why don't scientists trust atoms? Because they make up everything!",
    'How do you organize a space party? You planet!',
  ];
  const randomJoke = dadJokes[Math.floor(Math.random() * dadJokes.length)];
</script>

<main>
  <div class="container">
    <h1 class="rainbow-header">Vibe Stack Developer</h1>

    <button on:click={handleClick}>Vibe Check Me</button>

    {#if showModal}
      <div class="modal-overlay" on:click={closeModal}>
        <div class="modal" on:click|stopPropagation>
          <div class="modal-content">
            {#if vibeCheckProgress < 100}
              <h2 class="scanning-text">VIBE SCANNING IN PROGRESS...</h2>
              <div class="progress-container">
                <div class="progress-bar" style="width: {vibeCheckProgress}%"></div>
              </div>
              <p class="scanning-details">Analyzing swagger levels... {vibeCheckProgress}%</p>
            {:else}
              <div class="emoji-rain">
                {#each Array(10) as _, i}
                  <span class="emoji" style="animation-delay: {i * 0.2}s;">
                    {['😎', '🔥', '✨', '🚀', '🤣', '👑'][i % 6]}
                  </span>
                {/each}
              </div>

              <h2 class="big-text wobble">VIBE CHECK PASSED!</h2>
              <div class="certificate">
                <p>This certifies that you are</p>
                <h3 class="super-vibe">SUPER VIBEY</h3>
                <p class="small-text">Keep on vibin'</p>
              </div>

              <div class="dad-joke-container">
                <p class="dad-joke">"{randomJoke}"</p>
                <p class="small-text">- Dad Bot</p>
              </div>

              <button class="fun-button close-button" on:click={closeModal}>
                <span class="button-text">Close</span>
              </button>
            {/if}
          </div>
        </div>

        {#if confettiActive}
          <div class="confetti-container">
            {#each Array(50) as _, i}
              <div
                class="confetti"
                style="
                  left: {Math.random() * 100}%; 
                  animation-delay: {Math.random() * 3}s;
                  background-color: {['#fd6c6c', '#5bff7f', '#ffff5b', '#5b8fff', '#ff5bff'][
                  i % 5
                ]};
                  width: {5 + Math.random() * 10}px;
                  height: {5 + Math.random() * 10}px;
                "
              ></div>
            {/each}
          </div>
        {/if}
      </div>
    {/if}
  </div>
</main>

<style>
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

  /* Modal styles */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal {
    background-color: var(--background);
    border-radius: 8px;
    width: 90%;
    max-width: 600px;
    padding: 2rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  .modal-content {
    text-align: center;
  }

  .big-text {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    background: linear-gradient(90deg, #ff0080, #7928ca, #0070f3);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: gradient 3s ease infinite;
    background-size: 200% 200%;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .close-button {
    margin-top: 1.5rem;
    background-color: #e74c3c;
  }

  .close-button:hover {
    background-color: #c0392b;
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

  /* Fun new additions */
  .scanning-text {
    font-size: 2rem;
    font-weight: bold;
    color: #ff5722;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .progress-container {
    width: 100%;
    height: 30px;
    background-color: #e0e0e0;
    border-radius: 15px;
    margin: 20px 0;
    overflow: hidden;
  }

  .progress-bar {
    height: 100%;
    background: linear-gradient(90deg, #ff0080, #7928ca, #0070f3);
    background-size: 200% 200%;
    animation: gradient 2s ease infinite;
    transition: width 0.3s ease-in-out;
  }

  .scanning-details {
    font-family: monospace;
    color: #4caf50;
  }

  .wobble {
    animation: wobble 1s ease infinite;
  }

  @keyframes wobble {
    0%,
    100% {
      transform: translateX(0);
    }
    15% {
      transform: translateX(-15px) rotate(-5deg);
    }
    30% {
      transform: translateX(10px) rotate(3deg);
    }
    45% {
      transform: translateX(-10px) rotate(-3deg);
    }
    60% {
      transform: translateX(5px) rotate(2deg);
    }
    75% {
      transform: translateX(-5px) rotate(-1deg);
    }
  }

  .confetti-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1001;
  }

  .confetti {
    position: absolute;
    top: -10px;
    animation: fall 4s linear forwards;
  }

  @keyframes fall {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(100vh) rotate(720deg);
      opacity: 0;
    }
  }

  .certificate {
    border: 3px dashed gold;
    margin: 20px auto;
    padding: 15px;
    max-width: 400px;
    background: linear-gradient(135deg, #fffde7, #fff9c4);
  }

  .super-vibe {
    font-size: 2.5rem;
    color: #ff4081;
    font-family: 'Comic Sans MS', cursive;
    margin: 10px 0;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .dad-joke-container {
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    padding: 15px;
    margin: 20px 0;
  }

  .dad-joke {
    font-style: italic;
    font-size: 1.1rem;
  }

  .small-text {
    font-size: 0.8rem;
    opacity: 0.7;
  }

  .emoji-rain {
    height: 40px;
    position: relative;
    margin-bottom: 20px;
  }

  .emoji {
    position: absolute;
    font-size: 2rem;
    animation: emojiDrop 2s ease-in infinite;
  }

  @keyframes emojiDrop {
    0% {
      transform: translateY(-40px);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateY(40px);
      opacity: 0;
    }
  }

  .fun-button {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .fun-button:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
  }

  .fun-button:hover:before {
    animation: shimmer 1s infinite;
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }

  .button-text {
    position: relative;
    z-index: 1;
  }

  .close-button {
    margin-top: 1.5rem;
    background-color: #e74c3c;
  }

  .close-button:hover {
    background-color: #c0392b;
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
</style>
