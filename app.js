// State management
let currentLessonIndex = 0;
let completedLessons = new Set();
let quizAnswers = {};
let learnerName = '';
let showingQuiz = false;

// Initialize app
function init() {
  loadProgress();
  renderLessonList();
  
  // Check if returning user
  if (learnerName && completedLessons.size > 0) {
    // Could auto-show learn page for returning users
  }
}

// Navigation
function showLandingPage() {
  document.getElementById('landing-page').classList.remove('hidden');
  document.getElementById('learn-page').classList.add('hidden');
  document.getElementById('certificate-page').classList.add('hidden');
}

function showLearnPage() {
  document.getElementById('landing-page').classList.add('hidden');
  document.getElementById('learn-page').classList.remove('hidden');
  document.getElementById('certificate-page').classList.add('hidden');
  renderLesson(currentLessonIndex);
}

function showCertificatePage() {
  document.getElementById('landing-page').classList.add('hidden');
  document.getElementById('learn-page').classList.add('hidden');
  document.getElementById('certificate-page').classList.remove('hidden');
  
  document.getElementById('cert-name').textContent = learnerName || 'Web3 Learner';
  document.getElementById('cert-date').textContent = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Start learning flow
function startLearning() {
  try {
    console.log('Start Learning clicked');
    
    // Check if lessons are loaded
    if (typeof lessons === 'undefined' || !lessons || lessons.length === 0) {
      throw new Error('Lessons not loaded. Please refresh the page.');
    }
    
    const nameInput = document.getElementById('learner-name');
    const name = nameInput ? nameInput.value.trim() : '';
    
    if (name) {
      learnerName = name;
      saveProgress();
    } else {
      learnerName = 'Web3 Learner';
    }
    
    currentLessonIndex = 0;
    console.log('Navigating to learn page...');
    showLearnPage();
  } catch (error) {
    console.error('Error in startLearning:', error);
    const errorMsg = document.getElementById('error-msg');
    if (errorMsg) {
      errorMsg.textContent = error.message || 'An error occurred. Please refresh the page and try again.';
      errorMsg.classList.remove('hidden');
    } else {
      alert(error.message || 'An error occurred. Please refresh the page and try again.');
    }
  }
}

// Render lesson list sidebar
function renderLessonList() {
  const listContainer = document.getElementById('lesson-list');
  listContainer.innerHTML = '';
  
  lessons.forEach((lesson, index) => {
    const isCompleted = completedLessons.has(lesson.id);
    const isCurrent = index === currentLessonIndex;
    
    const button = document.createElement('button');
    button.className = `w-full text-left p-3 rounded-lg transition-all ${
      isCurrent 
        ? 'bg-cyan-500 text-white' 
        : isCompleted 
          ? 'bg-white/10 text-blue-100 hover:bg-white/20' 
          : 'bg-white/5 text-blue-300 hover:bg-white/10'
    }`;
    
    button.innerHTML = `
      <div class="flex items-center gap-3">
        <div class="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs ${
          isCompleted ? 'bg-green-500' : isCurrent ? 'bg-white/20' : 'bg-white/10'
        }">
          ${isCompleted ? '✓' : index + 1}
        </div>
        <div class="flex-1 min-w-0">
          <div class="text-sm font-medium truncate">${lesson.title}</div>
        </div>
      </div>
    `;
    
    button.onclick = () => {
      currentLessonIndex = index;
      renderLesson(index);
    };
    
    listContainer.appendChild(button);
  });
  
  updateProgress();
}

// Render lesson content
function renderLesson(index) {
  currentLessonIndex = index;
  showingQuiz = false;
  
  const lesson = lessons[index];
  const contentContainer = document.getElementById('lesson-content');
  
  contentContainer.innerHTML = `
    ${lesson.content}
    
    <div class="mt-12 pt-8 border-t border-white/10">
      <h2 class="text-2xl font-semibold mb-6">Test Your Knowledge</h2>
      <button 
        onclick="showQuiz()"
        class="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
      >
        Take Quiz →
      </button>
    </div>
    
    <div class="mt-8 flex justify-between items-center">
      <button 
        onclick="previousLesson()"
        class="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all ${index === 0 ? 'invisible' : ''}"
      >
        ← Previous
      </button>
      <button 
        onclick="nextLesson()"
        class="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all ${index === lessons.length - 1 ? 'invisible' : ''}"
      >
        Next →
      </button>
    </div>
  `;
  
  renderLessonList();
  contentContainer.scrollTop = 0;
}

// Show quiz
function showQuiz() {
  showingQuiz = true;
  const lesson = lessons[currentLessonIndex];
  const quiz = lesson.quiz;
  const contentContainer = document.getElementById('lesson-content');
  
  const previousAnswer = quizAnswers[lesson.id];
  
  contentContainer.innerHTML = `
    <h1 class="text-3xl md:text-4xl font-bold mb-8">Quick Quiz</h1>
    
    <div class="bg-white/5 border border-white/20 rounded-xl p-8">
      <h2 class="text-xl font-semibold mb-6">${quiz.question}</h2>
      
      <div class="space-y-3" id="quiz-options">
        ${quiz.options.map((option, idx) => `
          <button 
            onclick="selectAnswer(${idx})"
            class="quiz-option w-full text-left p-4 rounded-lg border border-white/20 hover:border-cyan-400 hover:bg-white/5 transition-all"
            data-index="${idx}"
          >
            <div class="flex items-center gap-3">
              <div class="flex-shrink-0 w-6 h-6 rounded-full border-2 border-white/40"></div>
              <div class="flex-1">${option}</div>
            </div>
          </button>
        `).join('')}
      </div>
      
      <div id="quiz-feedback" class="mt-6 hidden"></div>
      
      <div class="mt-8 flex gap-4">
        <button 
          onclick="renderLesson(${currentLessonIndex})"
          class="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
        >
          ← Back to Lesson
        </button>
        <button 
          id="submit-quiz"
          onclick="submitQuiz()"
          class="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-lg transition-all opacity-50 cursor-not-allowed"
          disabled
        >
          Submit Answer
        </button>
      </div>
    </div>
  `;
  
  contentContainer.scrollTop = 0;
}

let selectedAnswerIndex = null;

function selectAnswer(index) {
  selectedAnswerIndex = index;
  
  // Update UI
  document.querySelectorAll('.quiz-option').forEach((btn, idx) => {
    if (idx === index) {
      btn.classList.add('border-cyan-400', 'bg-cyan-500/20');
      btn.querySelector('.w-6').classList.add('bg-cyan-400');
    } else {
      btn.classList.remove('border-cyan-400', 'bg-cyan-500/20');
      btn.querySelector('.w-6').classList.remove('bg-cyan-400');
    }
  });
  
  // Enable submit button
  const submitBtn = document.getElementById('submit-quiz');
  submitBtn.disabled = false;
  submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
}

function submitQuiz() {
  const lesson = lessons[currentLessonIndex];
  const quiz = lesson.quiz;
  const isCorrect = selectedAnswerIndex === quiz.correctIndex;
  
  // Save answer
  quizAnswers[lesson.id] = {
    selectedIndex: selectedAnswerIndex,
    isCorrect: isCorrect
  };
  
  // Mark lesson as completed
  completedLessons.add(lesson.id);
  saveProgress();
  
  // Show feedback
  const feedbackContainer = document.getElementById('quiz-feedback');
  feedbackContainer.className = `mt-6 p-6 rounded-lg border ${
    isCorrect 
      ? 'bg-green-900/30 border-green-500/50' 
      : 'bg-yellow-900/30 border-yellow-500/50'
  }`;
  
  feedbackContainer.innerHTML = `
    <div class="flex items-start gap-4">
      <div class="text-3xl">${isCorrect ? '✅' : '💡'}</div>
      <div class="flex-1">
        <h3 class="text-lg font-semibold mb-2">
          ${isCorrect ? 'Correct!' : 'Not quite!'}
        </h3>
        <p class="text-sm ${isCorrect ? 'text-green-100' : 'text-yellow-100'}">
          ${isCorrect 
            ? 'Great job! You understood the lesson.' 
            : `The correct answer was: "${quiz.options[quiz.correctIndex]}"`
          }
        </p>
      </div>
    </div>
  `;
  
  feedbackContainer.classList.remove('hidden');
  
  // Update button options
  const submitBtn = document.getElementById('submit-quiz');
  submitBtn.remove();
  
  const buttonContainer = feedbackContainer.parentElement.querySelector('.mt-8');
  buttonContainer.innerHTML = `
    <button 
      onclick="renderLesson(${currentLessonIndex})"
      class="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
    >
      ← Back to Lesson
    </button>
    ${currentLessonIndex < lessons.length - 1 
      ? `<button 
          onclick="nextLesson()"
          class="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-lg transition-all"
        >
          Next Lesson →
        </button>`
      : `<button 
          onclick="showCertificatePage()"
          class="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 rounded-lg transition-all font-semibold"
        >
          Get Certificate 🎓
        </button>`
    }
  `;
  
  renderLessonList();
}

// Navigation helpers
function previousLesson() {
  if (currentLessonIndex > 0) {
    currentLessonIndex--;
    renderLesson(currentLessonIndex);
  }
}

function nextLesson() {
  if (currentLessonIndex < lessons.length - 1) {
    currentLessonIndex++;
    renderLesson(currentLessonIndex);
  }
}

// Progress tracking
function updateProgress() {
  const progress = (completedLessons.size / lessons.length) * 100;
  document.getElementById('progress-fill').style.width = `${progress}%`;
  document.getElementById('progress-text').textContent = `${Math.round(progress)}% complete`;
}

// LocalStorage persistence
function saveProgress() {
  const data = {
    learnerName,
    currentLessonIndex,
    completedLessons: Array.from(completedLessons),
    quizAnswers
  };
  localStorage.setItem('coreEchoProgress', JSON.stringify(data));
}

function loadProgress() {
  const saved = localStorage.getItem('coreEchoProgress');
  if (saved) {
    const data = JSON.parse(saved);
    learnerName = data.learnerName || '';
    currentLessonIndex = data.currentLessonIndex || 0;
    completedLessons = new Set(data.completedLessons || []);
    quizAnswers = data.quizAnswers || {};
  }
}

function resetProgress() {
  if (confirm('Are you sure you want to reset all progress?')) {
    localStorage.removeItem('coreEchoProgress');
    learnerName = '';
    currentLessonIndex = 0;
    completedLessons = new Set();
    quizAnswers = {};
    showLandingPage();
    init();
  }
}

// Initialize on load
window.addEventListener('DOMContentLoaded', () => {
  try {
    init();
    console.log('CoreEcho initialized successfully');
  } catch (error) {
    console.error('CoreEcho initialization error:', error);
  }
});

// Ensure functions are globally accessible
window.startLearning = startLearning;
window.showLandingPage = showLandingPage;
window.showLearnPage = showLearnPage;
window.showCertificatePage = showCertificatePage;
window.showQuiz = showQuiz;
window.selectAnswer = selectAnswer;
window.submitQuiz = submitQuiz;
window.renderLesson = renderLesson;
window.previousLesson = previousLesson;
window.nextLesson = nextLesson;
window.resetProgress = resetProgress;