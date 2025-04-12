<script>
  export let vibeCheckProgress = 0;
  export let confettiActive = false;
  export let currentJoke = '';
  export let closeModal;

  // Add a new custom event to get a new joke
  function getNewJoke() {
    const event = new CustomEvent('newJoke');
    window.dispatchEvent(event);
  }

  // Create proper arrays for iteration to avoid Svelte warnings
  const emojis = [...Array(10).keys()];
  const confettiPieces = [...Array(50).keys()];
  const emojiList = ['😎', '🔥', '✨', '🚀', '🤣', '👑'];
  const confettiColors = ['#fd6c6c', '#5bff7f', '#ffff5b', '#5b8fff', '#ff5bff'];

  // Local component props and methods can be added here if needed
</script>

<div
  class="modal-overlay"
  on:click={closeModal}
  on:keydown={e => e.key === 'Escape' && closeModal()}
  role="button"
  tabindex="0"
  aria-label="Close modal overlay"
>
  <div
    class="modal"
    on:click|stopPropagation
    on:keydown={e => e.stopPropagation()}
    role="dialog"
    aria-modal="true"
    tabindex="-1"
  >
    <div class="modal-content">
      {#if vibeCheckProgress < 100}
        <h2 class="scanning-text">VIBE SCANNING IN PROGRESS...</h2>
        <div class="progress-container">
          <div class="progress-bar" style="width: {vibeCheckProgress}%"></div>
        </div>
        <p class="scanning-details">Analyzing swagger levels... {vibeCheckProgress}%</p>
      {:else}
        <div class="emoji-rain">
          {#each emojis as i}
            <span class="emoji" style="animation-delay: {i * 0.2}s;">
              {emojiList[i % emojiList.length]}
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
          <div class="joke-header">
            <p class="dad-joke">"{currentJoke}"</p>
            <button
              class="refresh-button"
              on:click={getNewJoke}
              title="Get another joke"
              aria-label="Get another joke"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M23 4v6h-6"></path>
                <path d="M1 20v-6h6"></path>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10"></path>
                <path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14"></path>
              </svg>
            </button>
          </div>
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
      {#each confettiPieces as i}
        <div
          class="confetti"
          style="
            left: {Math.random() * 100}%; 
            animation-delay: {Math.random() * 3}s;
            background-color: {confettiColors[i % confettiColors.length]};
            width: {5 + Math.random() * 10}px;
            height: {5 + Math.random() * 10}px;
          "
        ></div>
      {/each}
    </div>
  {/if}
</div>

<style>
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

  .joke-header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .dad-joke {
    font-style: italic;
    font-size: 1.1rem;
  }

  .refresh-button {
    background: none;
    border: none;
    cursor: pointer;
    color: #3498db;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    padding: 4px;
    transition: all 0.3s ease;
  }

  .refresh-button:hover {
    background-color: rgba(52, 152, 219, 0.1);
    transform: rotate(30deg);
  }

  .small-text {
    font-size: 0.8rem;
    opacity: 0.7;
  }

  .emoji-rain {
    height: 80px;
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
      transform: translateY(80px);
      opacity: 0;
    }
  }

  .fun-button {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    background-color: #3498db;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 1rem;
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
</style>
